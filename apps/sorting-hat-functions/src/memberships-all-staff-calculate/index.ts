import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const membershipsAllStaffCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'AllStaffMembership',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

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
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default membershipsAllStaffCalculate;
