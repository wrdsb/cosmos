import { AzureFunction, Context } from "@azure/functions"

const membershipsAllStaffCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const rows = context.bindings.iamwpRaw;

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    let members = [];

    rows.forEach(function(row) {
        if (row.EMAIL_ADDRESS 
            && !excluded_job_codes.includes(row.JOB_CODE)
            && activity_codes.includes(row.ACTIVITY_CODE)
        ) {
            let ein = row.EMPLOYEE_ID;
            let email = row.EMAIL_ADDRESS;
            let username = row.USERNAME;

            let person = {
                ein: ein,
                email: email,
                username: username
            };

            members.push(person);
        }
    });

    context.bindings.outputBlob = members;

    const logPayload = "";

    context.done(null, logPayload);
};

export default membershipsAllStaffCalculate;
