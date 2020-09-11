import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const MembershipsABCStudentsCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'ABCStudentMembership',
        functionDataOperation: 'CalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const rows = context.bindings.studentsNow;
    
    let queueMessages = await prepareMessages(rows);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    context.log(logPayload);

    context.done(null, logPayload);
    
    async function prepareMessages(rows) {
        let messages = [];
        let schoolCodes = new Set();

        rows.forEach(function(row) {
            let schoolCode = (row.school_code) ? row.school_code.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(schoolCode => {
            let message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        let oyapMessage = {
            payload: {
                schoolCode: 'oyap'
            }
        };
        messages.push(oyapMessage);

        return messages;
    }
}

export default MembershipsABCStudentsCalculateAll;