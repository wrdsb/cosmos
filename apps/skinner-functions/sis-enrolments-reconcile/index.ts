import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { isEqual } from "lodash";

const sisEnrolmentsReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    const alpha = context.bindings.triggerMessage.alpha;
    const alphaUpcase =  alpha.toUpperCase();

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'enrolments';

    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    // give our bindings more human-readable names
    const records_now = context.bindings.recordsNow[alphaUpcase];

    // fetch current records from Cosmos
    const records_previous = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, alpha).catch(err => {
        context.log(err);
    });

    context.log('Reconcile enrolments for ' + alphaUpcase + ': ' + Object.getOwnPropertyNames(records_previous).length);

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

    let callbackMessage = await createEvent(alpha, totalDifferences);

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

        if (!records_now) {
            return calculation;
        }

        // loop through all records in records_now, looking for updates and creates
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            let new_record = records_now[record_id];      // get the full person record from records_now

            if (!records_previous || !records_previous[record_id]) {
                calculation.differences.created_records.push(new_record);
            } else {
                let old_record = records_previous[record_id]; // get the corresponding record in records_previous
    
                // Compare old and new records using Lodash _.isEqual, which performs a deep comparison
                let records_equal = isEqual(old_record, new_record);
    
                // if record changed, record the change
                if (!records_equal) {
                    calculation.differences.updated_records.push({
                        previous: old_record,
                        now: new_record
                    });
                }
            }
        });
        return calculation;
    }

    async function findDeletes(calculation)
    {
        context.log('findDeletes');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        if (!records_previous) {
            return calculation;
        }

        // loop through all records in records_previous, looking for deletes
        Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
            if (!records_now || !records_now[record_id]) {
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

    async function createEvent(alpha, totalDifferences)
    {
        context.log('createEvent');

        let event = {
            id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
            eventType: 'Skinner.Enrolment.Differences.Reconcile.Alpha',
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
                        path: `trillium/enrolments-differences-${alpha}.json`,
                        connection: 'wrdsbskinner_STORAGE'
                    }
                },
                timestamp: execution_timestamp
            },
            dataVersion: '1'
        };

        return event;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, alpha)
    {
        context.log('getCosmosItems');

        let records_previous = {};
        let alphaUpcase =  alpha.toUpperCase();

        const querySpec = {
            query: `SELECT * FROM c WHERE startswith(c.id, "${alphaUpcase}") and c.deleted = false`
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
                let enrolment = {
                    id: item.id,
                    school_code: item.school_code,
                    class_code: item.class_code,
                    student_number: item.student_number,
                    student_first_name: item.student_first_name,
                    student_last_name: item.student_last_name,
                    student_email: item.student_email,
                    teacher_ein: item.teacher_ein,
                    teacher_email: item.teacher_email

                    // these fields are not present in the data from trillium
                    //created_at: item.created_at,
                    //updated_at: item.updated_at,
                    //deleted_at: item.deleted_at,
                    //deleted: item.deleted
                };
                consolidatedObject[item.id] = enrolment;
            }
        });

        return consolidatedObject;
    }
};

export default sisEnrolmentsReconcile;
