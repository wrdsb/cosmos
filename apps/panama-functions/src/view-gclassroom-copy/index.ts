import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewGClassroomCopy: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGClassroom',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    let logPayload;
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 500) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = "Success: Copied trillium-view-gclassroom/incoming.json to trillium-view-gclassroom/now.json.";

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: "trillium-view-gclassroom/incoming.json",
        outgoingBlob: "trillium-view-gclassroom/now.json"
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewGClassroomCopy;