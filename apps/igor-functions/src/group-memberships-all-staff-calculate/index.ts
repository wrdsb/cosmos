import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GroupMembershipsAllStaffCalculateFunctionRequest, GroupMembershipsAllStaffCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsAllStaffCalculate: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsAllStaffCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsAllStaff',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GroupMembershipsAllStaffCalculateFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsAllStaffCalculateFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    const calculatedMembers = {
        allStaff: {},
        bereavements: {},
        retirements: {},
        severeWeather: {},
        staffOpportunities: {}
    };

    rows.forEach(function(row) {
        if (row.EMAIL_ADDRESS 
            && !excluded_job_codes.includes(row.JOB_CODE)
            && activity_codes.includes(row.ACTIVITY_CODE)
        ) {
            const member = row.EMAIL_ADDRESS;

            calculatedMembers.allStaff[member] = {
                email:          member,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       'all-staff@wrdsb.ca'
            };

            calculatedMembers.bereavements[member] = {
                email:          member,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       'bereavements@wrdsb.ca'
            };

            calculatedMembers.retirements[member] = {
                email:          member,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       'retirements@wrdsb.ca'
            };

            calculatedMembers.severeWeather[member] = {
                email:          member,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       'severe-weather@wrdsb.ca'
            };

            calculatedMembers.staffOpportunities[member] = {
                email:          member,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       'staff-opportunities@wrdsb.ca'
            };
        }
    });

    context.bindings.allStaffOutputBlob = calculatedMembers.allStaff;
    context.bindings.bereavementsOutputBlob = calculatedMembers.bereavements;
    context.bindings.retirementsOutputBlob = calculatedMembers.retirements;
    context.bindings.severeWeatherOutputBlob = calculatedMembers.severeWeather;
    context.bindings.staffOpportunitiesOutputBlob = calculatedMembers.staffOpportunities;

    const memberCounts = {
        allStaff: Object.getOwnPropertyNames(calculatedMembers.allStaff).length,
        bereavements: Object.getOwnPropertyNames(calculatedMembers.bereavements).length,
        retirements: Object.getOwnPropertyNames(calculatedMembers.retirements).length,
        severeWeather: Object.getOwnPropertyNames(calculatedMembers.severeWeather).length,
        staffOpportunities: Object.getOwnPropertyNames(calculatedMembers.staffOpportunities).length,
    }

    const logPayload = {
        memberCounts: memberCounts
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default GroupMembershipsAllStaffCalculate;