import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation,
    FridayCommandFunctionRequestBody,
    FridayCommandJobType,
    FridayCommandOperation,
    FridayCommandFunctionRequestPayload } from "@cosmos/types";

const fridayCommandQueue: AzureFunction = async function (context: Context, triggerMessage: FridayCommandFunctionRequestBody): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Friday',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FridayCommandFunctionRequestBody;
    const jobType = triggerObject.jobType as FridayCommandJobType;
    const operation = triggerObject.operation as FridayCommandOperation;
    const payload = triggerObject.payload as FridayCommandFunctionRequestPayload;

    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdDev':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdTest':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        default:
            break;
    }

    const response = {
        header: {
            status: 202,
            message: `Accepted. Enqueued jobType ${jobType}.`,
            chatter: `Wilco. Create and process ${jobType} job.`,
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 202,
        jobType: jobType,
        operation: operation,
        payload: payload
    };

    //context.res = {
        //status: response.header.status,
        //body: response
    //}

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default fridayCommandQueue;
