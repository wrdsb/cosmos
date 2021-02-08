import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, AssetAssignmentHistoryMaterializeAllFunctionRequest, AssetAssignmentHistoryMaterializeAllFunctionRequestPayload, AssetAssignmentHistoryMaterializeFunctionRequest } from "@cosmos/types";

const assetAssignmentHistoryMaterializeAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'AssetAssignmentHistory',
        functionDataOperation: 'MaterializeAll',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainerLoans = 'asset-loan-submissions';
    const cosmosContainerReturns = 'asset-return-submissions';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage;

    context.log('Queue all Materialize Asset Loans');

    let queueMessages = [];

    // fetch current records from Cosmos
    let loansAssetIDs = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerLoans);

    // fetch current records from Cosmos
    let returnsAssetIDs = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerReturns);

    let allAssetIDs = new Set(loansAssetIDs)

    for (let assetID of returnsAssetIDs) {
        allAssetIDs.add(assetID)
    }

    for (let assetID of allAssetIDs) {
        queueMessages.push({
            payload: {
                assetID: assetID
            }
        } as AssetAssignmentHistoryMaterializeFunctionRequest);
    }

    context.bindings.assetAssignmentHistoryMaterialize = queueMessages;

    const logPayload = {count: queueMessages.length};
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log(`get ${cosmosContainer} records`);

        let assetIDs = new Set();

        const querySpec = {
            query: `SELECT c.correctedAssetID FROM c GROUP BY c.correctedAssetID`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                assetIDs.add(item.correctedAssetID);
            }
    
            return assetIDs;
        } catch (error) {
            context.log(`caught cosmos error: ${error}`);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }
};

export default assetAssignmentHistoryMaterializeAll;