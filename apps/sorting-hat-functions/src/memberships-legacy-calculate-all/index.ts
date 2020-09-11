import { AzureFunction, Context } from "@azure/functions"

const membershipsLegacyCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
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
