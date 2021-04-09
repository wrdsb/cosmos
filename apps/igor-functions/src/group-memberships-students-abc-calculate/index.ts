import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest, GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsABCCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsStudentsABC',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.studentsNow;

    const calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSchoolCode: requestedSchoolCode,
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
            const schoolCode = (row.school_code) ? row.school_code.toLowerCase() : false;
            const oyap = (row.student_oyap === 'Y') ? true : false;
            const shsm = (row.student_shsm_sector.length > 1) ? true : false;

            if (requestedSchoolCode === 'oyap') {
                if (email && oyap) {
                    members[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'oyap-students@wrdsb.ca'
                    };
                }
            } else if (requestedSchoolCode === 'shsm') {
                if (email && shsm) {
                    members[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'shsm-students@wrdsb.ca'
                    };
                }
            } else {
                if (email && (requestedSchoolCode === schoolCode)) {
                    members[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-students@wrdsb.ca'
                    };
                }
            }
        });
        return members;
    }
}

export default GroupMembershipsStudentsABCCalculate;