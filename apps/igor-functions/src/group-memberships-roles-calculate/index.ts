import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GroupMembershipsRolesCalculateFunctionRequest, GroupMembershipsRolesCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsRolesCalculate: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsRolesCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsRoles',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GroupMembershipsRolesCalculateFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsRolesCalculateFunctionRequestPayload;

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

    const calculatedMembers = await calculateMembers(rows);

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
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function calculateMembers(rows) {
        const members = {
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
            const email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : null;
            const jobCode = (row.JOB_CODE) ? row.JOB_CODE : null;
            const groupCode = (row.EMP_GROUP_CODE) ? row.EMP_GROUP_CODE : null;
            const locationCode = (row.LOCATION_CODE) ? row.LOCATION_CODE : null;
            const schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : null;
            const panel = (row.PANEL) ? row.PANEL : null;
            const activityCode = (row.ACTIVITY_CODE ) ? row.ACTIVITY_CODE : null;

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

export default GroupMembershipsRolesCalculate;