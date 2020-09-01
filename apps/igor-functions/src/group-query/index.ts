import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import jwt_decode from 'jwt-decode';
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const groupQuery: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Group.Query';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-query-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'groups-groups';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const request = req;
    let authenticated = false;
    let authorized = false;
    let idToken = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        authenticated = true;
        idToken = request.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken);
        userRoles = decodedToken.roles as string[];
        authorized = userRoles.includes('cosmos-user-its') ? true : false;
    }

    //let response = {
        //payload: {
            //status: 200,
            //message: "I.G.O.R. is up",
            //chatter: "I.G.O.R. here. What can I do for you?",
            //timestamp: functionInvocationTimestamp,
            //authenticated: authenticated,
            //authorized: authorized,
            //roles: userRoles
        //}
    //};

    const query = req.body;
    const operation = query.operation;
    const payload = query.payload;

    let cosmosQuery = "";
    
    switch (operation) {
        case 'list':
            if (payload) {
                switch (payload) {
                    case 'admin_created':
                        cosmosQuery = 'SELECT c.name, c.email, c.description, c.adminCreated, c.membership_automation_active FROM c where c.adminCreated = true';
                        break;
                    case 'automated':
                        cosmosQuery = 'SELECT c.name, c.email, c.description, c.adminCreated, c.membership_automation_active FROM c where c.membership_automation_active = true';
                        break;
                    case 'all':
                        cosmosQuery = 'SELECT c.name, c.email, c.description, c.adminCreated, c.membership_automation_active FROM c';
                        break;
                    default:
                        cosmosQuery = 'SELECT c.name, c.email, c.description, c.adminCreated, c.membership_automation_active FROM c';
                        break;
                }
            } else {
                cosmosQuery = 'SELECT c.name, c.email, c.description, c.adminCreated, c.membership_automation_active FROM c';
            }
            break;
        case 'find':
            if (payload.id) {
                cosmosQuery = `SELECT * FROM c where c.id = "${payload.id}"`;
            } else if (payload.email) {
                cosmosQuery = `SELECT * FROM c where c.email = "${payload.email}"`;
            } else if (payload.name) {
                cosmosQuery = `SELECT * FROM c where c.name = "${payload.name}"`;
            } else {
                context.res = {
                    status: 400,
                    body: "One of id, email, or name is required."
                };
                context.done("One of id, email, or name is required.");
            }
            break;
        default:
            break;
    }

    const querySpec = {
        query: cosmosQuery
    }

    const records = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec);

    const logPayload = {
        operation: operation,
        payload: payload,
        records: records
    }
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

    //response.payload['invocationEvent'] = invocationEvent;

    if (!authenticated) {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 401,
                    message: "Unauthorized: Cannot verify your identity.",
                    chatter: "Unauthorized: Cannot verify your identity.",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    }
    else if (authenticated && !authorized) {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 403,
                    message: "Forbidden: You are not permitted to query I.G.O.R.",
                    chatter: "Forbidden: You are not permitted to query I.G.O.R.",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    } else if (authenticated && authorized) {
        context.res = {
            status: 200,
            body: records
        };
    } else {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 400,
                    message: "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.",
                    chatter: "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    }

    context.done(null, logBlob);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec)
    {
        context.log('getCosmosItems');

        let records = [];

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const group of resources) {
                if (!group.deleted) {
                    // These fields are not present in the data model
                    // They are added by Cosmos DB when the object is created/updated/deleted
                    delete group._rid;
                    delete group._self;
                    delete group._etag;
                    delete group._attachments;
                    delete group._ts;
    
                    records.push(group);
                }
            }
    
            return records;
        } catch (error) {
            context.log(error);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }
};

export default groupQuery;
