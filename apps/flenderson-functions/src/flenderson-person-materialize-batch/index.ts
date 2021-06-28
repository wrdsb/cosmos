import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FlendersonJobType, FunctionInvocation, FlendersonDatabaseContainer, FlendersonPersonMaterializeBatchFunctionRequest, FlendersonPersonMaterializeBatchFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPersonMaterializeFunctionRequest, FlendersonPersonMaterializeFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPerson, FlendersonPosition, IPPSDirectory, IPPSPal, IPPSPerson } from "@cosmos/types";

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
    const employeeGroupCode = payload.employeeGroupCode;
    const jobCode = payload.jobCode;
    const locationCode = payload.locationCode;
    const positionID = payload.positionID;

    const outgoingQueueMessages: FlendersonPersonMaterializeFunctionRequest[] = [];

    if (all) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-people';
        const requests = await findIPPSPeopleAll(cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (employeeGroupCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const requests = await findEmployeeIDsByEmployeeGroupCode(employeeGroupCode, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (jobCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const requests = await findEmployeeIDsByJobCode(jobCode, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (locationCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const requests = await findEmployeeIDsByLocationCode(locationCode, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (positionID) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const requests = await findEmployeeIDsByPositionID(positionID, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    context.bindings.queueMaterialize = outgoingQueueMessages;

    const logPayload = outgoingQueueMessages;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findIPPSPeopleAll(cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const querySpec = {
            query: `SELECT employeeID, email FROM c WHERE c.deleted = false`
        }

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });
    
        return requests;
    }


    async function findEmployeeIDsByEmployeeGroupCode(employeeGroupCode, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.employeeGroupCode = ${employeeGroupCode}`
        }

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        return requests;
    }


    async function findEmployeeIDsByJobCode(jobCode, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.jobCode = ${jobCode}`
        }

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        return requests;
    }


    async function findEmployeeIDsByLocationCode(locationCode, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.locationCode = ${locationCode}`
        }

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        return requests;
    }


    async function findEmployeeIDsByPositionID(positionID, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPersonMaterializeFunctionRequest[]> {
        const requests: FlendersonPersonMaterializeFunctionRequest[] = [];

        const querySpec = {
            query: `SELECT employeeID FROM c WHERE c.deleted = false and c.positionID = ${positionID}`
        }

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        return requests;
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
};

export default flendersonPersonMaterializeBatch;
