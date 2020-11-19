import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, DeviceLoanMaterializeFunctionRequest, DeviceLoanMaterializeFunctionRequestPayload, DeviceLoan } from "@cosmos/types";

const deviceLoanMaterialize: AzureFunction = async function (context: Context, triggerMessage: DeviceLoanMaterializeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoan',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainerLoans = 'device-loan-submissions';
    const cosmosContainerReturns = 'device-return-submissions';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as DeviceLoanMaterializeFunctionRequest;
    const payload = triggerObject.payload as DeviceLoanMaterializeFunctionRequestPayload;
    const deviceAssetID = payload.assetID;

    let deviceRecord = {
        id: '',
        assetID: '',
        deviceType: '',
        locationName: '',
        loans: {},
        returns: {}
    } as DeviceLoan;

    context.log('Materialize Device Loans for Asset ID ' + deviceAssetID);
    
    // fetch current records from Cosmos
    deviceRecord.loans = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerLoans).catch(err => {
        context.log(err);
    });

    // fetch current records from Cosmos
    deviceRecord.returns = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerReturns).catch(err => {
        context.log(err);
    });

    context.bindings.deviceLoanStore = {
        operation: 'patch',
        payload: deviceRecord
    };

    const logPayload = deviceRecord;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log(`getDeviceLoanSubmissions: {assetID: ${deviceAssetID}`);

        let cosmosItems = {};

        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false and c.correctedAssetID = '${deviceAssetID}'`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    cosmosItems[item.id] = item;
                }
            }
    
            return cosmosItems;
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

export default deviceLoanMaterialize;