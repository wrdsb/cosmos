import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import jwt_decode from 'jwt-decode';
import { FunctionInvocation } from "@cosmos/types";

const groupQuery: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Query',
        eventLabel: ''
    } as FunctionInvocation;

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

    const query = req.query;
    const operation = query.operation;
    const payload = query.payload;

    let cosmosQuery = "";
    let records = [];
    
    switch (operation) {
        case 'list':
            if (payload) {
                switch (payload) {
                    case 'admin_created':
                        records = context.bindings.adminCreatedSlim;
                        break;
                    case 'admin_created_slim':
                        records = context.bindings.adminCreatedSlim;
                        break;
                    case 'admin_created_full':
                        records = context.bindings.adminCreatedFull;
                        break;
                    case 'automated':
                        records = context.bindings.automatedSlim;
                        break;
                    case 'automated_slim':
                        records = context.bindings.automatedSlim;
                        break;
                    case 'automated_full':
                        records = context.bindings.automatedFull;
                        break;
                    case 'all':
                        records = context.bindings.allSlim;
                        break;
                    case 'all_slim':
                        records = context.bindings.allSlim;
                        break;
                    case 'all_full':
                        records = context.bindings.allFull;
                        break;
                    default:
                        records = context.bindings.adminCreatedSlim;
                        break;
                }
            } else {
                records = context.bindings.adminCreatedSlim;
            }
            break;
        case 'find':
            if (payload) {
                cosmosQuery = `SELECT * FROM c where c.email = "${payload}"`
                const querySpec = {
                    query: cosmosQuery
                }
                records = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec);
            } else {
                context.res = {
                    status: 400,
                    body: "Please supply an email address in the query payload."
                };
                context.done("Please supply an email address in the query payload.");
            }
            break;
        default:
            break;
    }

    if (!authenticated) {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 401,
                    message: "Unauthorized: Cannot verify your identity.",
                    chatter: "Unauthorized: Cannot verify your identity.",
                    timestamp: functionInvocation.functionInvocationTimestamp,
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
                    timestamp: functionInvocation.functionInvocationTimestamp,
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
                    timestamp: functionInvocation.functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    }

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


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
