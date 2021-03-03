import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, QuartermasterQueryFunctionRequest, QuartermasterQueryFunctionRequestBody } from "@cosmos/types";

const quartermasterQuery: AzureFunction = async function (context: Context, req: QuartermasterQueryFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Query',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as QuartermasterQueryFunctionRequest;
    const requestBody = request.body as QuartermasterQueryFunctionRequestBody;
    const dataType = requestBody.dataType;
    const recordID = requestBody.id;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    let cosmosContainer = '';

    switch (dataType) {
        case 'DeviceLoan':
            cosmosContainer = 'device-loan-submissions';
            break;

        case 'DeviceLoanSubmission':
            cosmosContainer = 'device-loan-submissions';
            break;

        case 'Asset':
            cosmosContainer = 'assets';
            break;

        case 'Device':
            cosmosContainer = 'assets';
            break;

        case 'AssetAssignment':
            cosmosContainer = 'asset-assignments';
            break;

        case 'AssetAssignmentHistory':
            cosmosContainer = 'asset-assignment-histories';
            break;

        case 'AssetEntitlement':
            cosmosContainer = 'asset-entitlements'
            break;

        case 'AssetEntitlementHistory':
            cosmosContainer = 'asset-entitlement-histories';
            break;

        case 'ATSAsset':
            cosmosContainer = 'ats-assets';
            break;

        case 'ATSAssetClass':
            cosmosContainer = 'ats-asset-classes';
            break;

        case 'ATSAssetType':
            cosmosContainer = 'ats-asset-types';
            break;

        case 'ATSAssetClassType':
            cosmosContainer = 'ats-asset-class-types';
            break;

        default:
            break;
    }

    const record = await getCosmosItem(cosmosClient, cosmosDatabase, cosmosContainer, recordID).catch(err => {
        context.log(err);
    });

    const response = {
        header: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp
        },
        status: 200,
        recordID: recordID,
        dataType: dataType,
        collection: cosmosContainer,
        record: record
    };

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);


    async function getCosmosItem(cosmosClient, cosmosDatabase, cosmosContainer: string, recordID: string) {
        context.log('getCosmosItem');

        try {
            const { record } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).item(recordID).read();
            context.log(JSON.stringify(record));
            return record.item;

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

export default quartermasterQuery;
