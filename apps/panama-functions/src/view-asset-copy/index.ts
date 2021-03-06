import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewAssetCopy: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewAsset',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType = triggerMessage.jobType;
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 500) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = `Success: Copied ats-view-hd-asset/${triggerMessage.incomingBlob} to ats-view-hd-asset/${triggerMessage.outgoingBlob}.`;

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    const logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: `ats-view-hd-asset/${triggerMessage.incomingBlob}`,
        outgoingBlob: `ats-view-hd-asset/${triggerMessage.outgoingBlob}`
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewAssetCopy;
