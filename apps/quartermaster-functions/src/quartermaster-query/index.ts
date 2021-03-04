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
    let querySpec = {query: 'SELECT * FROM c'};
    let response = {
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
        record: null
    };

    switch (dataType) {
        case 'DeviceLoan':
            cosmosContainer = 'device-loan-submissions';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'DeviceLoanForm':
            cosmosContainer = 'device-loan-submissions';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'Asset':
            cosmosContainer = 'assets';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'Device':
            cosmosContainer = 'assets';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'AssetAssignment':
            cosmosContainer = 'asset-assignments';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'AssetAssignmentHistory':
            cosmosContainer = 'asset-assignment-histories';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'AssetEntitlement':
            cosmosContainer = 'asset-entitlements'
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'AssetEntitlementHistory':
            cosmosContainer = 'asset-entitlement-histories';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'ATSAsset':
            cosmosContainer = 'ats-assets';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'ATSAssetClass':
            cosmosContainer = 'ats-asset-classes';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'ATSAssetType':
            cosmosContainer = 'ats-asset-types';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        case 'ATSAssetClassType':
            cosmosContainer = 'ats-asset-class-types';
            querySpec = {query: `SELECT * FROM c WHERE c.id = '${recordID}'`};
            break;

        default:
            break;
    }

    const records = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec);
    const record = records[0];

    if (record) {
        context.log(`Got record ${record.id}.`);

        response = {
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
    } else {
        response = {
            header: {
                status: 404,
                message: "",
                chatter: "",
                timestamp: functionInvocation.functionInvocationTimestamp
            },
            status: 404,
            recordID: recordID,
            dataType: dataType,
            collection: cosmosContainer,
            record: null
        };
    }

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);


    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec) {
        context.log('getCosmosItems');

        const records = [];

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        const query = Object.assign(querySpec, queryOptions);
        context.log(query);

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(query).fetchAll();

            for (const item of resources) {
                records.push(item);
            }
    
            return records;

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
