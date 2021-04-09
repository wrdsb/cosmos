import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest, GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsABCCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsStudentsABC',
        functionDataOperation: 'CalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.studentsNow;
    
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
            const schoolCode = (row.school_code) ? row.school_code.toLowerCase() : 0;

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

        const oyapMessage = {
            payload: {
                schoolCode: 'oyap'
            }
        };
        messages.push(oyapMessage);

        const shsmMessage = {
            payload: {
                schoolCode: 'shsm'
            }
        };
        messages.push(shsmMessage);

        return messages;
    }
}

export default GroupMembershipsStudentsABCCalculateAll;
