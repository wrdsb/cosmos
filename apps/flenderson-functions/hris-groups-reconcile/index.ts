import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { isEqual } from "lodash";
import { create } from "domain";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const hrisGroupsReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Flenderson.HRIS.Groups.Reconcile';
    const functionEventID = `flenderson-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-hris-groups-reconcile-logs';

    const eventLabel = '';
    const eventTags = [
        "flenderson", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'groups';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    // give our bindings more human-readable names
    const groups_now = context.bindings.groupsNow;
    let totalGroups = Object.getOwnPropertyNames(groups_now).length;

    if (totalGroups < 50) {
        context.done('Too few records. Aborting.');
    }

    // fetch current records from Cosmos
    const records_previous = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    let records_now = groups_now;

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

    let differences = await processDifferences(calculation.differences);
    let totalDifferences = await calculateTotalDifferences(calculation);

    if (totalDifferences > 0) {
        context.bindings.queueGroupStore = creates.concat(updates, deletes);
    }

    const statusCode = '200';
    const statusMessage = 'Success: Reconciled all group records.';

    const logPayload = calculation;
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);

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
            let message = {
                operation: 'replace',
                payload: record
            };
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
            let message = {
                operation: 'replace',
                payload: record.now
            };
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
            let message = {
                operation: 'delete',
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDifferences(differences)
    {
        context.log('processDifferences');

        // array for the results being returned
        let messages = [];

        differences.created_records.forEach(function (record) {
            let message = {
                operation: 'create',
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        differences.updated_records.forEach(function (record) {
            let message = {
                operation: 'update',
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        differences.deleted_records.forEach(function (record) {
            let message = {
                operation: 'delete',
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function calculateTotalDifferences (calculation)
    {
        let creates = calculation.differences.created_records.length;
        let updates = calculation.differences.updated_records.length;
        let deletes = calculation.differences.deleted_records.length;
        let totalDifferences = creates + updates + deletes;

        return totalDifferences;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer)
    {
        context.log('getCosmosItems');

        let records_previous = {};

        const querySpec = {
            query: `SELECT * FROM c`
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
                // These fields are not present in the data from the HRIS
                // They are added by Flenderson when the person is created/updated/deleted
                delete item.created_at;
                delete item.updated_at;
                delete item.deleted_at;
                delete item.deleted;
                delete item._rid;
                delete item._self;
                delete item._etag;
                delete item._attachments;
                delete item._ts;

                consolidatedObject[item.id] = item;
            }
        });

        return consolidatedObject;
    }
};

export default hrisGroupsReconcile;
