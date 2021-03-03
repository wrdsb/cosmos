import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, QuartermasterQueryFunctionRequest, QuartermasterQueryFunctionRequestBody, QuartermasterQueryFunctionResultType } from "@cosmos/types";

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
    //const userQuery = requestBody.query;
    //const queryScope = requestBody.scope as QuartermasterQueryFunctionScope;
    //const resultType = requestBody.resultType as QuartermasterQueryFunctionResultType;
    const dataType = requestBody.dataType;
    const recordID = requestBody.id;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    let cosmosContainer = '';

    switch (dataType) {
        case 'device-loan':
            cosmosContainer = 'device-loan-submissions';
            break;

        case 'device-loan-submission':
            cosmosContainer = 'device-loan-submissions';
            break;

        case 'asset':
            cosmosContainer = 'assets';
            break;

        case 'device':
            cosmosContainer = 'assets';
            break;

        case 'asset-assignment':
            cosmosContainer = 'asset-assignments';
            break;

        case 'asset-assignment-history':
            cosmosContainer = 'asset-assignment-histories';
            break;

        case 'asset-entitlement':
            cosmosContainer = 'asset-entitlements'
            break;

        case 'asset-entitlement-history':
            cosmosContainer = 'asset-entitlement-histories';
            break;

        case 'ats-asset':
            cosmosContainer = 'ats-assets';
            break;

        case 'ats-asset-class':
            cosmosContainer = 'ats-asset-classes';
            break;

        case 'ats-asset-type':
            cosmosContainer = 'ats-asset-types';
            break;

        case 'ats-asset-class-type':
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

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer: string, querySpec, resultType: QuartermasterQueryFunctionResultType) {
        context.log('getCosmosItems');

        let records;
        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }
        const query = Object.assign(querySpec, queryOptions);

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(query).fetchAll();

            if (resultType === 'object') {
                records = {};
                for (const item of resources) {
                    records[item.id] = item;
                }
            } else if (resultType === 'array') {
                records = [];
                for (const item of resources) {
                    records.push(item);
                }
            } else {
                records = resources[0];
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
