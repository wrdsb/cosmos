import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation } from "@cosmos/types";

const deviceLoanSubmissionsQuery: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Query',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'device-loan-submissions';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const request = req;
    const userQuery = request.query.query;
    const queryScope = request.query.scope;

    switch (userQuery) {
        // Total form submissions
        case 'total-device-loans':
            break;

        // Forms where an Asset ID was supplied
        case 'device-loans-with-asset-id':
            break;

        // Unique Asset IDs in the data set
        case 'device-loans-unique':
            break;

        // Asset IDs appearing more than once in the data set
        case 'devices-with-multiple-loans':
            break;

        default:
            break;
    }

    const response = {
        header: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp
        },
        status: 200,
        query: userQuery,
        scope: queryScope,
        payload: {}
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
};

export default deviceLoanSubmissionsQuery;
