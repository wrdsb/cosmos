import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequest, GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsGradeCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsStudentsGrade',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedGrade = payload.grade;
    const rows = context.bindings.studentsNow;

    const calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedGrade: requestedGrade,
        memberCounts: memberCounts
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function calculateMembers(rows) {
        const members = {};

        rows.forEach(function(row) {
            const email = (row.student_email) ? row.student_email : false;
            let grade = (row.student_grade) ? row.student_grade : '';

            grade = grade.replace(/^0+/, '');

            if (email && (requestedGrade === grade)) {
                members[email] = {
                    email:          email,
                    role:           "MEMBER",
                    status:         "ACTIVE",
                    type:           "USER",
                    groupKey:       `wrdsb-grade-${grade}@wrdsb.ca`
                };
            }
        });
        return members;
    }
}

export default GroupMembershipsStudentsGradeCalculate;