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

    const assignmentHistory = {
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

        const cosmosItems = [];
        const query = {
            query: `SELECT * FROM c WHERE c.correctedAssetID = '${assetAssetID}'`,
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        };

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(query).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    const assetAssignment = {
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        deletedAt: item.deletedAt,
                        deleted: item.deleted,

                        createdBy: item.createdBy,
                        updatedBy: item.updatedBy,
                        deletedBy: item.deletedBy,
                    
                        assignedBy: item.assignedBy,
                        assignedFromLocation: item.assignedFromLocation,
                    
                        id: item.id,
                        changeDetectionHash: item.changeDetectionHash,

                        assetID: item.assetID,
                        assetSerialNumber: item.assetSerialNumber,
                        assetType: item.assetType,
                        assetLocation: item.assetLocation,
                        
                        assignedToPerson: item.assignedToPerson,
                        assignedToPersonEmail: item.assignedToPersonEmail,
                        assignedToPersonNumber: item.assignedToPersonNumber,
                        assignedToPersonLocation: item.assignedToPersonLocation,
                    
                        assignedToBusinessUnit: item.assignedToBusinessUnit,
                    
                        receivedByAssignee: item.receivedByAssignee,
                        receivedBy: item.receivedBy,
                        receivedByRole: item.receivedByRole,
                    
                        isTemporary: item.isTemporary,
                        startDate: item.startDate,
                        endDate: item.endDate,

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