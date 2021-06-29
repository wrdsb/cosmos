import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FlendersonJobType, FunctionInvocation, FlendersonDatabaseContainer, FlendersonPositionMaterializeBatchFunctionRequest, FlendersonPositionMaterializeBatchFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPositionMaterializeFunctionRequest, FlendersonPositionMaterializeFunctionRequestPayload } from "@cosmos/types";

const flendersonPositionMaterializeBatch: AzureFunction = async function (context: Context, triggerMessage: FlendersonPositionMaterializeBatchFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPosition',
        functionDataOperation: 'MaterializeBatch',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch';
    functionInvocation.jobType = jobType;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as FlendersonPositionMaterializeBatchFunctionRequest;
    const payload = triggerObject.payload as FlendersonPositionMaterializeBatchFunctionRequestPayload;
    const all = payload.all;
    const employeeID = payload.employeeID;
    const employeeGroupCode = payload.ippsEmployeeGroupCode;
    const jobCode = payload.ippsJobCode;
    const locationCode = payload.ippsLocationCode;
    const positionID = payload.ippsPositionID;

    const outgoingQueueMessages: FlendersonPositionMaterializeFunctionRequest[] = [];

    if (all) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (employeeID) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.employeeID = ${employeeID}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (employeeGroupCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.employeeGroupCode = ${employeeGroupCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (jobCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.jobCode = ${jobCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (locationCode) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.locationCode = ${locationCode}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    if (positionID) {
        const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.positionID = ${positionID}`
        }
        const requests = await createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);
        outgoingQueueMessages.concat(requests);
    }

    context.bindings.queueMaterialize = outgoingQueueMessages;

    const logPayload = outgoingQueueMessages;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function createRequests(querySpec, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPositionMaterializeFunctionRequest[]> {
        const requests: FlendersonPositionMaterializeFunctionRequest[] = [];

        const payloads = await getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer);

        payloads.forEach(payload => {
            requests.push({
                payload: payload
            });
        });

        return requests;
    }


    async function getCosmosItems(querySpec, cosmosClient, cosmosDatabase, cosmosContainer): Promise<FlendersonPositionMaterializeFunctionRequestPayload[]> {
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
                        positionID:          item.positionID,
                        employeeID:          item.employeeID,
                        employeeGroupCode:   item.employeeGroupCode,
                        jobCode:             item.jobCode,
                        locationCode:        item.locationCode,
                        establishmentCode:   item.establishmentCode,
                        isHomeLocation:      item.isHomeLocation,
                        positionStartDate:   item.positionStartDate,
                        positionEndDate:     item.positionEndDate,
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

export default flendersonPositionMaterializeBatch;
