import { AzureFunction, Context } from "@azure/functions";

const groupsGetAll: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'GetAll',
        eventLabel: ''
    };

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default groupsGetAll;