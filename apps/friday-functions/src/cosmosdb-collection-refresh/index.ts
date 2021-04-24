import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation,
    FridayCosmosDBCollectionRefreshFunctionRequest,
    FridayCosmosDBCollectionRefreshJobType,
    FridayCosmosDBCollectionRefreshFunctionRequestPayload } from "@cosmos/types";

const fridayCosmosDBCollectionRefresh: AzureFunction = async function (context: Context, triggerMessage: FridayCosmosDBCollectionRefreshFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Friday',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FridayCosmosDBCollectionRefreshFunctionRequest;
    const jobType = triggerObject.jobType as FridayCosmosDBCollectionRefreshJobType;
    const payload = triggerObject.payload as FridayCosmosDBCollectionRefreshFunctionRequestPayload;

    const response = {
        header: {
            status: 202,
            message: `Accepted. Enqueued jobType ${jobType}.`,
            chatter: `Wilco. Create and process ${jobType} job.`,
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 202,
        jobType: jobType,
        payload: payload
    };

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default fridayCosmosDBCollectionRefresh;
