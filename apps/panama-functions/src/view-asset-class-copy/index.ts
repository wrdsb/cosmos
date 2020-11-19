import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewAssetClassCopy: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewAssetClass',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    let logPayload;
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 10) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = "Success: Copied ats-view-hd-asset-class/incoming.json to ats-view-hd-asset-class/now.json.";

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: "ats-view-hd-asset-class/incoming.json",
        outgoingBlob: "ats-view-hd-asset-class/now.json"
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewAssetClassCopy;
