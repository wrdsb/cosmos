import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequest, GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsGradeCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsStudentsGrade',
        functionDataOperation: 'CalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequestPayload;

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
        const grades = new Set();

        rows.forEach(function(row) {
            const grade = (row.student_grade) ? row.student_grade : 0;

            if (! 0 === grade) {
                grades.add(grade);
                context.log(`Add grade ${grade}`);
            }
        });

        grades.forEach(grade => {
            const message = {
                payload: {
                    grade: grade
                }
            };

            messages.push(message);
        });

        return messages;
    }
}

export default GroupMembershipsStudentsGradeCalculateAll;
