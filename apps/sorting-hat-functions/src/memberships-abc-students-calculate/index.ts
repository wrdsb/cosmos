import { AzureFunction, Context } from "@azure/functions";

const MembershipsABCStudentsCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.studentsNow;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSchoolCode: requestedSchoolCode,
        memberCounts: memberCounts
    };
    context.log(logPayload);

    context.done(null, logPayload);

    async function calculateMembers(rows) {
        let members = {};

        rows.forEach(function(row) {
            let email = (row.student_email) ? row.student_email : false;
            let schoolCode = (row.school_code) ? row.school_code.toLowerCase() : false;
            let oyap = (row.student_oyap === 'Y') ? true : false;

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

export default MembershipsABCStudentsCalculate;