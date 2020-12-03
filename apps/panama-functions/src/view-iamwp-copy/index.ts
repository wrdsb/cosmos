import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewIAMWPCopy: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIAMWP',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    let logPayload;
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 5000) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = "Success: Copied ipps-view-iamwp/incoming.json to ipps-view-iamwp/now.json.";

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: "ipps-view-iamwp/incoming.json",
        outgoingBlob: "ipps-view-iamwp/now.json"
    };
    functionInvocation.logPayload = logPayload;

    // Fire event for external consumption
    const invocationEvent = {type: 'WRDSB.Panama.View.IAMWP.Copy', data: {status: statusCode}};
    context.bindings.eventEmitter = JSON.stringify(invocationEvent);
    
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIAMWPCopy;
