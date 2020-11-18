import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewSkinnerStaffCopyPoison: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerStaff',
        functionDataOperation: 'CopyPoison',
        eventLabel: ''
    } as FunctionInvocation;

    const queueMessage = context.bindings.triggerMessage;

    const statusCode = '200';
    const statusMessage = 'Logged poisonous message from queue view-skinnerstaff-copy.';

    const logPayload = {
        application: 'panama-functions',
        function: context.executionContext.functionName,
        queue: "view-skinnerstaff-copy",
        message: queueMessage
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerStaffCopyPoison;
