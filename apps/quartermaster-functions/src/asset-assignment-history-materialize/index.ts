import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, AssetAssignmentHistoryMaterializeFunctionRequest, AssetAssignmentHistoryMaterializeFunctionRequestPayload, AssetAssignmentHistory } from "@cosmos/types";

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
    const cosmosContainerLoans = 'asset-loan-submissions';
    const cosmosContainerReturns = 'asset-return-submissions';
    const cosmosContainerSchoolInventory = 'school-inventory';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as AssetAssignmentHistoryMaterializeFunctionRequest;
    const payload = triggerObject.payload as AssetAssignmentHistoryMaterializeFunctionRequestPayload;
    const assetAssetID = payload.assetID;

    let assetRecord = {
        id: assetAssetID,
        assetID: assetAssetID,
        wasLoaned: false,
        wasReturned: false,
        totalLoans: 0,
        totalReturns: 0,
        isLoaned: false,
        schoolInventoryRecord: {},
        hasInventoryRecord: false,
        loans: {},
        returns: {}
    } as AssetAssignmentHistory;

    context.log('Materialize Asset Loans for Asset ID ' + assetAssetID);
    
    // fetch current loan submission records from Cosmos
    assetRecord.loans = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerLoans).catch(err => {
        context.log(err);
    });

    // fetch current return submission records from Cosmos
    assetRecord.returns = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerReturns).catch(err => {
        context.log(err);
    });

    // fetch current school inventory records from Cosmos
    assetRecord.schoolInventoryRecord = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerSchoolInventory).catch(err => {
        context.log(err);
    });

    const loanIDs = Object.getOwnPropertyNames(assetRecord.loans);
    const returnIDs = Object.getOwnPropertyNames(assetRecord.returns);
    const inventoryID = Object.getOwnPropertyNames(assetRecord.schoolInventoryRecord)[0] ? Object.getOwnPropertyNames(assetRecord.schoolInventoryRecord)[0] : false;

    if (loanIDs.length > 0) {
        assetRecord.wasLoaned = true;
        assetRecord.totalLoans = loanIDs.length;
        assetRecord.assetType = assetRecord.loans[loanIDs[0]].assetType;
        assetRecord.locationName = assetRecord.loans[loanIDs[0]].locationName;
    } else if (returnIDs.length > 0) {
        assetRecord.wasReturned = true;
        assetRecord.totalReturns = returnIDs.length;
        assetRecord.assetType = assetRecord.returns[returnIDs[0]].assetType;
        assetRecord.locationName = assetRecord.returns[returnIDs[0]].locationName;
    }

    if (inventoryID) {
        assetRecord.hasInventoryRecord = true;
        if (assetRecord.wasLoaned && assetRecord.schoolInventoryRecord[inventoryID].returned === "FALSE") {
            assetRecord.isLoaned = true;
        }
    } else {
        if (assetRecord.totalLoans > assetRecord.totalReturns) {
            assetRecord.isLoaned = true;
        }
    }

    context.bindings.assetAssignmentHistoryStore = {
        operation: 'patch',
        payload: assetRecord
    };

    const logPayload = assetRecord;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log(`get ${cosmosContainer} records: {assetID: ${assetAssetID}}`);

        let cosmosItems = {};
        let querySpec = {
            query: "SELECT c.id FROM c"
        };

        if (cosmosContainer === 'school-inventory') {
            querySpec = {
                query: `SELECT * FROM c WHERE c.assetID = '${assetAssetID}'`
            }
        } else {
            querySpec = {
                query: `SELECT * FROM c WHERE c.correctedAssetID = '${assetAssetID}'`
            }
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