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
    const cosmosContainerSchoolInventory = 'school-inventory';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as DeviceLoanMaterializeFunctionRequest;
    const payload = triggerObject.payload as DeviceLoanMaterializeFunctionRequestPayload;
    const deviceAssetID = payload.assetID;

    let deviceRecord = {
        id: deviceAssetID,
        assetID: deviceAssetID,
        wasLoaned: false,
        wasReturned: false,
        totalLoans: 0,
        totalReturns: 0,
        isLoaned: false,
        schoolInventoryRecord: {},
        hasInventoryRecord: false,
        loans: {},
        returns: {}
    } as DeviceLoan;

    context.log('Materialize Device Loans for Asset ID ' + deviceAssetID);
    
    // fetch current loan submission records from Cosmos
    deviceRecord.loans = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerLoans).catch(err => {
        context.log(err);
    });

    // fetch current return submission records from Cosmos
    deviceRecord.returns = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerReturns).catch(err => {
        context.log(err);
    });

    // fetch current school inventory records from Cosmos
    deviceRecord.schoolInventoryRecord = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainerSchoolInventory).catch(err => {
        context.log(err);
    });

    const loanIDs = Object.getOwnPropertyNames(deviceRecord.loans);
    const returnIDs = Object.getOwnPropertyNames(deviceRecord.returns);
    const inventoryID = Object.getOwnPropertyNames(deviceRecord.schoolInventoryRecord)[0] ? Object.getOwnPropertyNames(deviceRecord.schoolInventoryRecord)[0] : false;

    if (loanIDs.length > 0) {
        deviceRecord.wasLoaned = true;
        deviceRecord.totalLoans = loanIDs.length;
        deviceRecord.deviceType = deviceRecord.loans[loanIDs[0]].deviceType;
        deviceRecord.locationName = deviceRecord.loans[loanIDs[0]].locationName;
    } else if (returnIDs.length > 0) {
        deviceRecord.wasReturned = true;
        deviceRecord.totalReturns = returnIDs.length;
        deviceRecord.deviceType = deviceRecord.returns[returnIDs[0]].deviceType;
        deviceRecord.locationName = deviceRecord.returns[returnIDs[0]].locationName;
    }

    if (inventoryID) {
        deviceRecord.hasInventoryRecord = true;
        if (deviceRecord.wasLoaned && deviceRecord.schoolInventoryRecord[inventoryID].returned === "FALSE") {
            deviceRecord.isLoaned = true;
        }
    } else {
        if (deviceRecord.totalLoans > deviceRecord.totalReturns) {
            deviceRecord.isLoaned = true;
        }
    }

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
        context.log(`get ${cosmosContainer} records: {assetID: ${deviceAssetID}}`);

        let cosmosItems = {};
        let querySpec = {
            query: "SELECT c.id FROM c"
        };

        if (cosmosContainer === 'school-inventory') {
            querySpec = {
                query: `SELECT * FROM c WHERE c.assetID = '${deviceAssetID}'`
            }
        } else {
            querySpec = {
                query: `SELECT * FROM c WHERE c.correctedAssetID = '${deviceAssetID}'`
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

export default deviceLoanMaterialize;