import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createInvocationCallback } from "../SharedCode/createInvocationCallback";
import { createStorageCallback } from "../SharedCode/createStorageCallback";
import { createInvocationEvent } from "../SharedCode/createInvocationEvent";
import { createStorageEvent } from "../SharedCode/createStorageEvent";

const personStore: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z
    
    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.Person.Store';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-person-store-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'people';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    const triggerObject = context.bindings.triggerMessage;

    const operation = triggerObject.operation;
    const payload = triggerObject.payload;

    // fetch current records from Cosmos
    const oldRecord = await getCosmosItem(cosmosClient, cosmosDatabase, cosmosContainer, payload).catch(err => {
        context.log(err);
    });

    let newRecord;
    let storageEventType;
   
    switch (operation) {
        case 'delete':
            newRecord = doDelete(oldRecord, payload);
            storageEventType = 'WRDSB.Codex.Person.Delete';
            break;
        case 'patch':
            newRecord = doPatch(oldRecord, payload);
            storageEventType = 'WRDSB.Codex.Person.Patch';
            break;
        case 'replace':
            newRecord = doReplace(oldRecord, payload);
            storageEventType = 'WRDSB.Codex.Person.Replace';
            break;
        default:
            break;
    }

    const storageEventID = `${storageEventType}-${functionInvocationID}`;

    context.bindings.recordOut = newRecord;
    context.bindings.sortingHat = newRecord;

    const logPayload = {
        operation: operation,
        old_record: oldRecord,
        new_record: newRecord
    };
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const invocationCallback = await createInvocationCallback(logObject, 200);
    const storageCallback = await createStorageCallback(logObject, 200);
    context.bindings.callbackMessages = [JSON.stringify(invocationCallback), JSON.stringify(storageCallback)];
    context.log(invocationCallback)

    const invocationEvent = await createInvocationEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    const storageEvent = await createStorageEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, storageEventType, storageEventID);
    context.bindings.flynnEvents = [JSON.stringify([invocationEvent]), JSON.stringify([storageEvent])];
    context.log(invocationEvent);

    context.done(null, logBlob);


    function doDelete(oldRecord, payload)
    {
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocationTimestamp;
            newRecord.updated_at = functionInvocationTimestamp;
        } else {
            newRecord = Object.assign(newRecord, oldRecord);
        }

        // mark the record as deleted
        newRecord.deleted_at = functionInvocationTimestamp;
        newRecord.deleted = true;

        return newRecord;
    }

    function doPatch(oldRecord, payload)
    {
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocationTimestamp;
        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
        }
        
        newRecord.updated_at = functionInvocationTimestamp;
    
        // patching a record implicitly undeletes it
        newRecord.deleted_at = '';
        newRecord.deleted = false;

        return newRecord;
    }
    
    function doReplace(oldRecord, payload)
    {
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        newRecord = Object.assign(newRecord, payload);

        if (!oldRecord) {
            newRecord.created_at = functionInvocationTimestamp;
        } else {
            newRecord.created_at = oldRecord.created_at;
        }

        newRecord.updated_at = functionInvocationTimestamp;

        // replacing a record implicitly undeletes it
        newRecord.deleted_at = '';
        newRecord.deleted = false;
    
        return newRecord;
    }

    async function getCosmosItem(cosmosClient, cosmosDatabase, cosmosContainer, materializedPerson)
    {
        context.log('getCosmosItems');
        let records_previous = [];

        let cosmosQuery = 'SELECT * FROM c where ';
        
        if (materializedPerson.ein) {
            cosmosQuery = cosmosQuery + `c.ein = "${materializedPerson.ein}"`;
        }

        const querySpec = {
            query: cosmosQuery
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

        return records_previous[0];
    }

    async function consolidateCosmosItems(items: any[], consolidatedArray)
    {
        items.forEach(function(item) {
            context.log('Found: ' + item);
            consolidatedArray.push(item);
        });

        return consolidatedArray;
    }
};

export default personStore;
