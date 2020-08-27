import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsRolesCalculateFunctionRequest, GoogleGroupsMembershipsRolesCalculateFunctionRequestPayload } from "@cosmos/types";

const GoogleGroupsMembershipsRolesCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsRolesCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.Roles.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-google-groups-memberships-roles-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsRolesCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsRolesCalculateFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;

    const excludedJobCodes = ['6106', '6118'];
    const activityCodes = ['ACTIVE', 'ONLEAVE'];

    const elementaryAdminJobCodes = context.bindings.elementaryAdminJobCodes.job_codes;
    const elementaryHeadSecretariesJobCodes = context.bindings.elementaryHeadSecretariesJobCodes.job_codes;
    const elementaryCSecretariesJobCodes = context.bindings.elementaryCSecretariesJobCodes.job_codes;
    const elementaryTeachersGroupCodes = context.bindings.elementaryTeachersGroupCodes.group_codes;
    const elementaryOTTeachersJobCodes = context.bindings.elementaryOTTeachersJobCodes.job_codes;
    const elementaryStaffingSupportJobCodes = context.bindings.elementaryStaffingSupportJobCodes.job_codes;
    
    const secondaryAdminJobCodes = context.bindings.secondaryAdminJobCodes.job_codes;
    const secondaryOfficeSupervisorsJobCodes = context.bindings.secondaryOfficeSupervisorsJobCodes.job_codes;
    const secondaryOfficeAssistantsJobCodes = context.bindings.secondaryOfficeAssistantsJobCodes.job_codes;
    const secondaryCSecretariesJobCodes = context.bindings.secondaryCSecretariesJobCodes.job_codes;
    const secondaryTeachersGroupCodes = context.bindings.secondaryTeachersGroupCodes.group_codes;
    const secondaryOTTeachersGroupCodes = context.bindings.secondaryOTTeachersGroupCodes.group_codes;
    //const secondaryStaffingSupportJobCodes = context.bindings.secondaryStaffingSupportJobCodes.job_codes;
    //const educationalAssistantsJobCodes = context.bindings.educationalAssistantsJobCodes.job_codes;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.elementaryAdminOutputBlob = calculatedMembers.elementaryAdmin;
    context.bindings.elementaryHeadSecretariesOutputBlob = calculatedMembers.elementaryHeadSecretaries;
    context.bindings.elementaryCSecretariesOutputBlob = calculatedMembers.elementaryCSecretaries;
    context.bindings.elementaryTeachersOutputBlob = calculatedMembers.elementaryTeachers;
    context.bindings.elementaryOTTeachersOutputBlob = calculatedMembers.elementaryOTTeachers;
    context.bindings.elementaryStaffingSupportOutputBlob = calculatedMembers.elementaryStaffingSupport;
    context.bindings.secondaryAdminOutputBlob = calculatedMembers.secondaryAdmin;
    context.bindings.secondaryOfficeSupervisorsOutputBlob = calculatedMembers.secondaryOfficeSupervisors;
    context.bindings.secondaryOfficeAssistantsOutputBlob = calculatedMembers.secondaryOfficeAssistants;
    context.bindings.secondaryCSecretariesOutputBlob = calculatedMembers.secondaryCSecretaries;
    context.bindings.secondaryTeachersOutputBlob = calculatedMembers.secondaryTeachers;
    context.bindings.secondaryOTTeachersOutputBlob = calculatedMembers.secondaryOTTeachers;
  
    const memberCounts = {
        elementaryAdmin: Object.getOwnPropertyNames(calculatedMembers.elementaryAdmin).length,
        elementaryHeadSecretaries: Object.getOwnPropertyNames(calculatedMembers.elementaryHeadSecretaries).length,
        elementaryCSecretaries: Object.getOwnPropertyNames(calculatedMembers.elementaryCSecretaries).length,
        elementaryTeachers: Object.getOwnPropertyNames(calculatedMembers.elementaryTeachers).length,
        elementaryOTTeachers: Object.getOwnPropertyNames(calculatedMembers.elementaryOTTeachers).length,
        elementaryStaffingSupport: Object.getOwnPropertyNames(calculatedMembers.elementaryStaffingSupport).length,
        secondaryAdmin: Object.getOwnPropertyNames(calculatedMembers.secondaryAdmin).length,
        secondaryOfficeSupervisors: Object.getOwnPropertyNames(calculatedMembers.secondaryOfficeSupervisors).length,
        secondaryOfficeAssistants: Object.getOwnPropertyNames(calculatedMembers.secondaryOfficeAssistants).length,
        secondaryCSecretaries: Object.getOwnPropertyNames(calculatedMembers.secondaryCSecretaries).length,
        secondaryTeachers: Object.getOwnPropertyNames(calculatedMembers.secondaryTeachers).length,
        secondaryOTTeachers: Object.getOwnPropertyNames(calculatedMembers.secondaryOTTeachers).length
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


    async function calculateMembers(rows) {
        let members = {
            elementaryAdmin: {},
            elementaryHeadSecretaries: {},
            elementaryCSecretaries: {},
            elementaryTeachers: {},
            elementaryOTTeachers: {},
            elementaryStaffingSupport: {},
            secondaryAdmin: {},
            secondaryOfficeSupervisors: {},
            secondaryOfficeAssistants: {},
            secondaryCSecretaries: {},
            secondaryTeachers: {},
            secondaryOTTeachers: {},
            educationalAssistants: {}
        };

        rows.forEach(function(row) {
            let email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : null;
            let jobCode = (row.JOB_CODE) ? row.JOB_CODE : null;
            let groupCode = (row.EMP_GROUP_CODE) ? row.EMP_GROUP_CODE : null;
            let locationCode = (row.LOCATION_CODE) ? row.LOCATION_CODE : null;
            let schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : null;
            let panel = (row.PANEL) ? row.PANEL : null;
            let activityCode = (row.ACTIVITY_CODE ) ? row.ACTIVITY_CODE : null;

            if (row.EMAIL_ADDRESS
                && !excludedJobCodes.includes(jobCode)
                && activityCodes.includes(activityCode)
            ) {
                if (elementaryAdminJobCodes.includes(jobCode)) {
                    members.elementaryAdmin[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-admin@wrdsb.ca"
                    };
                }
                
                if (elementaryHeadSecretariesJobCodes.includes(jobCode)) {
                    members.elementaryHeadSecretaries[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-head-secretaries@wrdsb.ca"
                    };
                }
                
                if (elementaryCSecretariesJobCodes.includes(jobCode)) {
                    members.elementaryCSecretaries[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-c-secretaries@wrdsb.ca"
                    };
                }
                
                if (elementaryTeachersGroupCodes.includes(groupCode)) {
                    members.elementaryTeachers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-teachers@wrdsb.ca"
                    };
                }
                
                if (elementaryOTTeachersJobCodes.includes(jobCode)) {
                    members.elementaryOTTeachers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-ot-teachers@wrdsb.ca"
                    };
                }
                
                if (elementaryStaffingSupportJobCodes.includes(jobCode)) {
                    members.elementaryStaffingSupport[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'elementary-staffing-support@wrdsb.ca'
                    };
                }
                
                if (secondaryAdminJobCodes.includes(jobCode)) {
                    members.secondaryAdmin[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-admin@wrdsb.ca"
                    };
                }
                
                if (secondaryOfficeSupervisorsJobCodes.includes(jobCode)) {
                    members.secondaryOfficeSupervisors[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-office-supervisors@wrdsb.ca"
                    };
                }
                
                if (secondaryOfficeAssistantsJobCodes.includes(jobCode)) {
                    members.secondaryOfficeAssistants[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-office-assistants@wrdsb.ca"
                    };
                }
                
                if (secondaryCSecretariesJobCodes.includes(jobCode)) {
                    members.secondaryCSecretaries[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-c-secretaries@wrdsb.ca"
                    };
                }
                
                if (secondaryTeachersGroupCodes.includes(groupCode)) {
                    members.secondaryTeachers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-teachers@wrdsb.ca"
                    };
                }
                
                if (secondaryOTTeachersGroupCodes.includes(groupCode)) {
                    members.secondaryOTTeachers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-ot-teachers@wrdsb.ca"
                    };
                }

                //if (educationalAssistantsJobCodes.includes(jobCode)) {
                    //members.ducational-assistants[email] = {
                        //email:          email,
                        //role:           "MEMBER",
                        //status:         "ACTIVE",
                        //type:           "USER",
                        //groupKey:       "educational-assistants@wrdsb.ca"
                    //};
                //}
            }
        });
        return members;
    }
}

export default GoogleGroupsMembershipsRolesCalculate;