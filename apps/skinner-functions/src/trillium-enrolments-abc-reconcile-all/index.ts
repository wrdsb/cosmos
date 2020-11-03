import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation  } from "@cosmos/types";

const trilliumEnrolmentsABCReconcileAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumEnrolment',
        functionDataOperation: 'ABCReconcileAll',
        eventLabel: ''
    } as FunctionInvocation;

    const rows = context.bindings.studentsNow;
    
    let queueMessages = await prepareMessages(rows);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
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
                    alpha: schoolCode
                }
            };
            context.log(JSON.stringify(message));
            messages.push(message);
        });

        return messages;
    }
}

export default trilliumEnrolmentsABCReconcileAll;
