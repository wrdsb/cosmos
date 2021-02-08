import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, AssetAssignmentHistoryMaterializeFunctionRequest, AssetAssignmentHistoryMaterializeFunctionRequestPayload, AssetAssignmentHistory, AssetAssignment } from "@cosmos/types";

const assetAssignmentHistoryMaterialize: AzureFunction = async function (context: Context, triggerMessage: AssetAssignmentHistoryMaterializeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'AssetAssignmentHistory',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'asset-loan-submissions';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as AssetAssignmentHistoryMaterializeFunctionRequest;
    const payload = triggerObject.payload as AssetAssignmentHistoryMaterializeFunctionRequestPayload;
    const assetAssetID = payload.assetID;

    let assignmentHistory = {
        id: assetAssetID,
        assetID: assetAssetID,
        wasAssigned: false,
        wasUnassigned: false,
        totalAssignments: 0,
        totalUnassignments: 0,
        isAssigned: false
    } as AssetAssignmentHistory;

    context.log('Materialize Assignment History for Asset ID ' + assetAssetID);
    
    assignmentHistory.assetAssignments = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer);

    context.bindings.assetAssignmentHistoryStore = {
        operation: 'patch',
        payload: assignmentHistory
    };

    const logPayload = assignmentHistory;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer): Promise<AssetAssignment[]> {
        context.log(`get ${cosmosContainer} records: {assetID: ${assetAssetID}}`);

        let cosmosItems = [];
        let querySpec = {
            query: `SELECT * FROM c WHERE c.correctedAssetID = '${assetAssetID}'`
        };

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    let assetAssignment = {
                        created_at: item.created_at,
                        updated_at: item.updated_at,
                        deleted_at: item.deleted_at,
                        deleted: item.deleted,
                        id: item.id,
                        changeDetectionHash: item.changeDetectionHash,
                        assetID: item.assetID,
                        assignedBy: item.assignedBy,
                        assignedTo: item.assignedTo,
                        receivedBy: item.receivedBy,
                        untrackedAssestsIncluded: item.untrackedAssestsIncluded,
                        notes: item.notes
                    } as AssetAssignment;
                    cosmosItems.push(assetAssignment);
                }
            }
    
            return cosmosItems;
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

export default assetAssignmentHistoryMaterialize;