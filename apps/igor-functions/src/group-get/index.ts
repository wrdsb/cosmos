import { AzureFunction, Context } from "@azure/functions";
const { google } = require('googleapis');

const groupGet: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Get',
        eventLabel: ''
    };

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default groupGet;