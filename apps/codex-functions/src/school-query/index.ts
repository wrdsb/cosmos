import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { CosmosClient } from "@azure/cosmos";

const schoolQuery: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.School.Query';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-school-query-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'schools';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const reqQuery = req.body;
    let cosmosQuery = "";

    if (reqQuery.id) {
        cosmosQuery = `SELECT * FROM c where c.id = "${reqQuery.id}"`;
    } else if (reqQuery.alpha_code) {
        cosmosQuery = `SELECT * FROM c where c.alpha_code = "${reqQuery.alpha_code}"`;
    } else if (reqQuery.school_code) {
        cosmosQuery = `SELECT * FROM c where c.alpha_code = "${reqQuery.alpha_code}"`;
    } else if (reqQuery.abbreviated_name) {
        cosmosQuery = `SELECT * FROM c where c.abbreviated_name = "${reqQuery.abbreviated_name}"`;
    } else {
        context.res = {
            status: 400,
            body: "One of id, alpha_code, school_code, or abbreviated_name is required."
        };
        context.done("One of id, alpha_code, school_code, or abbreviated_name is required.");
    }

    const querySpec = {
        query: cosmosQuery
    }

    const records = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec).catch(err => {
        context.log(err);

        context.res = {
            status: 500,
            body: err
        };

        context.done(err);
    });

    context.res = {
        status: 200,
        body: records
    };

    const logPayload = req.body;
    context.log(logPayload);

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


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec)
    {
        context.log('getCosmosItems');

        let records = [];

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        const queryIterator = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec, queryOptions);
        
        while (queryIterator.hasMoreResults()) {
            const results = await queryIterator.executeNext();

            records = await consolidateCosmosItems(results.result, records);

            if (results === undefined) {
                // no more results
                break;
            }   
        }

        return records;
    }

    async function consolidateCosmosItems(items: any[], consolidatedArray)
    {
        items.forEach(function(item) {
            if (!item.deleted) {
                // These fields are not present in the data model
                // They are added by Cosmos DB when the object is created/updated/deleted
                delete item._rid;
                delete item._self;
                delete item._etag;
                delete item._attachments;
                delete item._ts;

                consolidatedArray.push(item);
            }
        });

        return consolidatedArray;
    }
};

export default schoolQuery;
