import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { isEqual } from "lodash";

const sisStaffReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'staff';

    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    // give our bindings more human-readable names
    const records_now = context.bindings.recordsNow;

    // fetch current records from Cosmos
    const records_previous = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    // object to store our total diff as we build it
    let calculation = {
        records_previous: records_previous,
        records_now: records_now,
        differences: {
            created_records: [],
            updated_records: [],
            deleted_records: []
        }
    };

    calculation = await findCreatesAndUpdates(calculation);
    calculation = await findDeletes(calculation);

    let creates = await processCreates(calculation.differences.created_records);
    let updates = await processUpdates(calculation.differences.updated_records);
    let deletes = await processDeletes(calculation.differences.deleted_records);

    let totalDifferences = creates.length + updates.length + deletes.length;

    let callbackMessage = await createEvent(totalDifferences);

    context.bindings.queueCreates = creates;
    context.bindings.queueUpdates = updates;
    context.bindings.queueDeletes = deletes;

    context.bindings.logCalculation = JSON.stringify(calculation);

    context.bindings.callbackMessage = JSON.stringify(callbackMessage);

    context.log(JSON.stringify(callbackMessage));
    context.done(null, callbackMessage);

    async function findCreatesAndUpdates(calculation)
    {
        context.log('findCreatesAndUpdates');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        // loop through all records in records_now, looking for updates and creates
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            let new_record = records_now[record_id];      // get the full person record from records_now
            let old_record = records_previous[record_id]; // get the corresponding record in records_previous
    
            // if we found a corresponding record in records_previous, look for changes
            if (old_record) {
                // Compare old and new records using Lodash _.isEqual, which performs a deep comparison
                let records_equal = isEqual(old_record, new_record);
    
                // if record changed, record the change
                if (!records_equal) {
                    calculation.differences.updated_records.push({
                        previous: old_record,
                        now: new_record
                    });
                }
   
            // if we don't find a corresponding record in records_previous, they're new
            } else {
                calculation.differences.created_records.push(new_record);
            }
        });
        return calculation;
    }

    async function findDeletes(calculation)
    {
        context.log('findDeletes');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        // loop through all records in records_previous, looking for deletes
        Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
            let new_record = records_now[record_id];
    
            if (!new_record) {
                // the record was deleted
                calculation.differences.deleted_records.push(records_previous[record_id]);
            }
        });

        return calculation;
    }

    async function processCreates(created_records)
    {
        context.log('processCreates');

        // array for the results being returned
        let messages = [];

        created_records.forEach(function (record) {
            let message = record;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processUpdates(updated_records)
    {
        context.log('processUpdates');

        // array for the results being returned
        let messages = [];

        updated_records.forEach(function (record) {
            let message = record.now;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDeletes(deleted_records)
    {
        context.log('processDeletes');

        // array for the results being returned
        let messages = [];

        deleted_records.forEach(function (record) {
            let message = record;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function createEvent(totalDifferences)
    {
        context.log('createEvent');

        let event = {
            id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
            eventType: 'Skinner.Staff.Differences.Reconcile',
            eventTime: execution_timestamp,
            //subject: ,
            data: {
                event_type: 'function_invocation',
                app: 'wrdsb-skinner',
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                data: {
                    total_differences: totalDifferences,
                    blob: {
                        path: `trillium/sis-staff-reconcile.json`,
                        connection: 'wrdsbskinner_STORAGE'
                    }
                },
                timestamp: execution_timestamp
            },
            dataVersion: '1'
        };

        return event;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer)
    {
        context.log('getCosmosItems');

        let records_previous = {};

        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false`
        }
        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        const queryIterator = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec, queryOptions);
        
        while (queryIterator.hasMoreResults()) {
            const results = await queryIterator.executeNext();

            records_previous = await consolidateCosmosItems(results.result, records_previous);

            if (results === undefined) {
                // no more results
                break;
            }   
        }

        return records_previous;
    }

    async function consolidateCosmosItems(items: any[], consolidatedObject)
    {
        items.forEach(function(item) {
            if (!item.deleted) {
                let sisStaff = {
                    id: item.id,
                    ein: item.ein,
                    school_code: item.school_code,
                    school_year: item.school_year,
                    staff_type: item.staff_type,
                    status: item.status

                    // these fields are not present in the data from the SIS
                    //created_at: item.created_at,
                    //updated_at: item.updated_at,
                    //deleted_at: item.deleted_at,
                    //deleted: item.deleted
                };
                consolidatedObject[item.id] = sisStaff;
            }
        });

        return consolidatedObject;
    }
};

export default sisStaffReconcile;
