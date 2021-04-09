import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GroupMembershipsABCCalculateAllFunctionRequest, GroupMembershipsABCCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsABCCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsABCCalculateAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsABC',
        functionDataOperation: 'CalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GroupMembershipsABCCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsABCCalculateAllFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;
    
    const queueMessages = await prepareMessages(rows);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
    async function prepareMessages(rows) {
        const messages = [];
        const schoolCodes = new Set();

        rows.forEach(function(row) {
            const schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(schoolCode => {
            const message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        return messages;
    }
}

export default GroupMembershipsABCCalculateAll;
