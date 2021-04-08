import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const membershipsLegacyCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'LegacyMembership',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const rows = context.bindings.iamwpRaw;
    const legacySetDefinition = context.bindings.legacySetDefinition;

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    let membersByEmail = {};
    let membersByEIN = {};
    let membersByUsername = {};

    let membersArray = [];
    let membersCSV = '"ein","email","username","firstName","lastName","full_name","sortableName"' + "\n";

    rows.forEach(function(row) {
        if ( !excluded_job_codes.includes(row.JOB_CODE) && activity_codes.includes(row.ACTIVITY_CODE)) {

            let ein = (row.EMPLOYEE_ID) ? row.EMPLOYEE_ID : '';
            let email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : '';
            let username = (row.USERNAME) ? row.USERNAME.toLowerCase() : '';
            let firstName = (row.FIRST_NAME) ? row.FIRST_NAME : '';
            let lastName = (row.SURNAME) ? row.SURNAME : '';
            let fullName = (row.SURNAME && row.FIRST_NAME) ? row.FIRST_NAME + ' ' + row.SURNAME : '';
            let sortableName = (row.SURNAME && row.FIRST_NAME) ? row.SURNAME + ', ' + row.FIRST_NAME : '';

            let person = {
                ein: ein,
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                fullName: fullName,
                sortableName: sortableName
            };

            let jobCode = (row.JOB_CODE) ? 'JC-' + row.JOB_CODE : '';
            let groupCode = (row.EMP_GROUP_CODE) ? 'GC-' + row.EMP_GROUP_CODE : '';
            let locationCode = (row.LOCATION_CODE) ? 'LC-' + row.LOCATION_CODE : '';
            let schoolCode = (row.SCHOOL_CODE) ? 'SC-' + row.SCHOOL_CODE : '';
            let panel = (row.PANEL) ? 'PANEL-' + row.PANEL : 'PANEL-X';

            let qualifications = [jobCode, groupCode, locationCode, schoolCode, panel];
            let qualifies = [];

            legacySetDefinition.definition.forEach(function(criteria) {  // foreach array of criteria in the definition

                let check = criteria.some(function(criterion) {          //   look at each criterion on the array
                    if (criterion.charAt(0) === '!' ) {                  //     if the criterion is an exclusion
                        return !qualifications.includes(criterion.substr(1));
                    } else {                                             //     if the criterion is an inclusion
                        return qualifications.includes(criterion);                     
                    }
                });
                
                qualifies.push(check);
            });

            let qualified = qualifies.every(v => v === true);

            if (qualified) {
                membersByEmail[email] = person;
                membersByEIN[ein] = person;
                membersByUsername[username] = person;
            }
        }
    });

    Object.getOwnPropertyNames(membersByEmail).forEach(function (email) {
        let member = membersByEmail[email];

        membersArray.push(membersByEmail[email]);
        
        let csv_row = '"' + member.ein +'","'+ member.email +'","'+ member.username +'","'+ member.firstName +'","'+ member.lastName +'","'+ member.fullName +'","'+ member.sortableName + '"' + "\n";
        membersCSV = membersCSV + csv_row;
    })

    context.bindings.setMembershipsByEmailObject = JSON.stringify(membersByEmail);
    context.bindings.setMembershipsByEINObject = JSON.stringify(membersByEIN);
    context.bindings.setMembershipsByUsernameObject = JSON.stringify(membersByUsername);

    context.bindings.setMembershipsArray = JSON.stringify(membersArray);
    context.bindings.setMembershipsCSV = membersCSV;

    const logPayload = membersByEmail;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default membershipsLegacyCalculate;
