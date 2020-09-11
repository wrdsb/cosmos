import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const membershipsLegacyCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'LegacyMembership',
        functionDataOperation: 'CalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const legacySets = context.bindings.legacySets;

    let queueMessages = [];

    legacySets.forEach(set => {
        let message = {
            "set": set.id
        };
        queueMessages.push(message);
    });

    context.bindings.membershipsLegacyCalculate = JSON.stringify(queueMessages);

    const logPayload = {
        queueMessages: queueMessages
    }

    context.done(null, logPayload);
};

export default membershipsLegacyCalculateAll;
