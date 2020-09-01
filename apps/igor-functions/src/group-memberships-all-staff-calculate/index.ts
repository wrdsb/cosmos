import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GroupMembershipsAllStaffCalculateFunctionRequest, GroupMembershipsAllStaffCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsAllStaffCalculate: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsAllStaffCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.AllStaff.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-all-staff-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GroupMembershipsAllStaffCalculateFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsAllStaffCalculateFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    let calculatedMembers = {
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
            let member = row.EMAIL_ADDRESS;

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

    let memberCounts = {
        allStaff: Object.getOwnPropertyNames(calculatedMembers.allStaff).length,
        bereavements: Object.getOwnPropertyNames(calculatedMembers.bereavements).length,
        retirements: Object.getOwnPropertyNames(calculatedMembers.retirements).length,
        severeWeather: Object.getOwnPropertyNames(calculatedMembers.severeWeather).length,
        staffOpportunities: Object.getOwnPropertyNames(calculatedMembers.staffOpportunities).length,
    }

    const logPayload = {
        memberCounts: memberCounts
    };
    context.log(logPayload);

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);
};

export default GroupMembershipsAllStaffCalculate;