import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMaterializeAllFunctionRequest, GoogleGroupsMaterializeAllFunctionRequestPayload } from "@cosmos/types";

const groupsMaterializeAll: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMaterializeAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'MaterializeAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMaterializeAllFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMaterializeAllFunctionRequestPayload;

    const groups = context.bindings.groups;
    let queueMessages = [];

    groups.forEach(group => {
        let message = {
            "payload": {
                "email": group.email
            }
        };

        queueMessages.push(message);
    });

    context.bindings.outputQueue = queueMessages;

    const logPayload = queueMessages;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default groupsMaterializeAll;