import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FlendersonJobType, FunctionInvocation, FlendersonDatabaseContainer, FlendersonPersonMaterializeBatchFunctionRequest, FlendersonPersonMaterializeBatchFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPersonMaterializeFunctionRequest, FlendersonPersonMaterializeFunctionRequestPayload } from "@cosmos/types";

const flendersonPersonMaterializeBatch: AzureFunction = async function (context: Context, triggerMessage: FlendersonPersonMaterializeBatchFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPerson',
        functionDataOperation: 'MaterializeBatch',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch';
    functionInvocation.jobType = jobType;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as FlendersonPersonMaterializeBatchFunctionRequest;
    const payload = triggerObject.payload as FlendersonPersonMaterializeBatchFunctionRequestPayload;
    const all = payload.all;
    const employeeID = payload.employeeID;
    const email = payload.email;
    const employeeGroupCode = payload.ippsEmployeeGroupCode;
    const jobCode = payload.ippsJobCode;
    const locationCode = payload.ippsLocationCode;
    const positionID = payload.ippsPositionID;

    const outgoingQueueMessages: FlendersonPersonMaterializeFunctionRequest[] = [];

    if (all) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-people';
        const querySpec = {
            query: `SELECT employeeID, email FROM c WHERE c.deleted = false`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (employeeID) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-people';
        const querySpec = {
            query: `SELECT employeeID, email FROM c WHERE c.deleted = false and c.employeeID = ${employeeID}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (email) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-people';
        const querySpec = {
            query: `SELECT employeeID, email FROM c WHERE c.deleted = false and c.email = ${email}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (employeeGroupCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.employeeGroupCode = ${employeeGroupCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (jobCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.jobCode = ${jobCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (locationCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.locationCode = ${locationCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (positionID) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.positionID = ${positionID}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    context.bindings.queueMaterialize = outgoingQueueMessages;

    const logPayload = outgoingQueueMessages;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);


    async function createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        let requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        requests = await fillInFields(requests);

        return requests;
    }


    async function fillInFields(requests: FlendersonPersonMaterializeFunctionRequest[]): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-people';
        const updatedRequests: FlendersonPersonMaterializeFunctionRequest[] = [];

        for (const request of requests) {
            let employeeID = request.payload.employeeID;
            let email = request.payload.email;

            if (employeeID.length < 1) {
                employeeID = await getIPPSPersonEmployeeID(email, cosmosClient, cosmosDatabase, cosmosContainer);
            }

            if (email.length < 1) {
                email = await getIPPSPersonEmail(employeeID, cosmosClient, cosmosDatabase, cosmosContainer);
            }
                        
            const newRequest = {
                payload: {
                    employeeID: request.payload.employeeID,
                    email: email
                }
            } as FlendersonPersonMaterializeFunctionRequest;
            updatedRequests.push(newRequest);
        };
        
        return updatedRequests;
    }


    async function getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequestPayload[]> {
        context.log('getCosmosItems');

        const records = [];

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    const recordObject = {
                        employeeID: item.employeeID,
                        email: item.email
                    }
                    records.push(recordObject);
                }
            }
    
            return records;
        } catch (error) {
            context.log(error);
            return records;
        }
    }


    async function getIPPSPersonEmail(employeeID, cosmosClient, cosmosDatabase, cosmosContainer): Promise<string> {
        context.log('getIPPSPersonEmail');

        let email = '';

        const querySpec = {
            query: `SELECT email FROM c WHERE c.employeeID = ${employeeID}`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                email = item.email
            }
    
            return email;
        } catch (error) {
            context.log(error);
            return email;
        }
    }


    async function getIPPSPersonEmployeeID(email, cosmosClient, cosmosDatabase, cosmosContainer): Promise<string> {
        context.log('getIPPSPersonEmail');

        let employeeID = '';

        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.email = ${email}`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                employeeID = item.employeeID
            }
    
            return employeeID;
        } catch (error) {
            context.log(error);
            return employeeID;
        }
    }
};

export default flendersonPersonMaterializeBatch;
