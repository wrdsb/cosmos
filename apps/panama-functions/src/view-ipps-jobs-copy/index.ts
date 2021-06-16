import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewIPPSJobsCopy: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIPPSJobs',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType = 'WRDSB.Panama.View.IPPSJobs.Copy';
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 1000) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = "Success: Copied ipps-view-ipps-jobs/incoming.json to ipps-view-ipps-jobs/now.json.";

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    const logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: "ipps-view-ipps-jobs/incoming.json",
        outgoingBlob: "ipps-view-ipps-jobs/now.json"
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIPPSJobsCopy;
