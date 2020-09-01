import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GroupMembershipsABCCalculateFunctionRequest, GroupMembershipsABCCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsABCCalculate: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsABCCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.ABC.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-abc-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GroupMembershipsABCCalculateFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsABCCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.iamwpRaw;

    const excludedJobCodes = ['6106', '6118'];
    const activityCodes = ['ACTIVE', 'ONLEAVE'];

    const adminJobCodes = context.bindings.abcAdminJobCodes.job_codes;
    const attendanceJobCodes = context.bindings.abcAttendanceJobCodes.job_codes;
    const beforeafterJobCodes = context.bindings.abcBeforeafterJobCodes.job_codes;
    const courierJobCodes = context.bindings.abcCourierJobCodes.job_codes;
    const easyconnectJobCodes = context.bindings.abcEasyconnectJobCodes.job_codes;
    const itsJobCodes = context.bindings.abcItsJobCodes.job_codes;
    const officeJobCodes = context.bindings.abcOfficeJobCodes.job_codes;
    const ordersJobCodes = context.bindings.abcOrdersJobCodes.job_codes;
    const s4sJobCodes = context.bindings.abcS4sJobCodes.job_codes;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.adminOutputBlob = calculatedMembers.admin;
    context.bindings.attendanceOutputBlob = calculatedMembers.attendance;
    context.bindings.beforeafterOutputBlob = calculatedMembers.beforeafter;
    context.bindings.easyconnectOutputBlob = calculatedMembers.easyconnect;
    context.bindings.itsOutputBlob = calculatedMembers.its;
    context.bindings.itunesOutputBlob = calculatedMembers.itunes;
    context.bindings.officeOutputBlob = calculatedMembers.office;
    context.bindings.ordersOutputBlob = calculatedMembers.orders;
    context.bindings.registrationsOutputBlob = calculatedMembers.registrations;
    context.bindings.s4sOutputBlob = calculatedMembers.s4s;
    context.bindings.staffOutputBlob = calculatedMembers.staff;
    context.bindings.staffDiscussionOutputBlob = calculatedMembers.staffDiscussion;
    context.bindings.stswrOutputBlob = calculatedMembers.stswr;
    context.bindings.publicOutputBlob = calculatedMembers.public;
  
    const memberCounts = {
        admin: Object.getOwnPropertyNames(calculatedMembers.admin).length,
        attendance: Object.getOwnPropertyNames(calculatedMembers.attendance).length,
        beforeafter: Object.getOwnPropertyNames(calculatedMembers.beforeafter).length,
        easyconnect: Object.getOwnPropertyNames(calculatedMembers.easyconnect).length,
        itunes: Object.getOwnPropertyNames(calculatedMembers.itunes).length,
        office: Object.getOwnPropertyNames(calculatedMembers.office).length,
        orders: Object.getOwnPropertyNames(calculatedMembers.orders).length,
        registrations: Object.getOwnPropertyNames(calculatedMembers.registrations).length,
        s4s: Object.getOwnPropertyNames(calculatedMembers.s4s).length,
        staff: Object.getOwnPropertyNames(calculatedMembers.staff).length,
        staffDiscussion: Object.getOwnPropertyNames(calculatedMembers.staffDiscussion).length,
        stswr: Object.getOwnPropertyNames(calculatedMembers.stswr).length,
        its: Object.getOwnPropertyNames(calculatedMembers.its).length,
        public: Object.getOwnPropertyNames(calculatedMembers.public).length
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

    
    async function calculateMembers (rows) {
        let members = {
            admin: {},
            attendance: {},
            beforeafter: {},
            easyconnect: {},
            itunes: {},
            office: {},
            orders: {},
            registrations: {},
            s4s: {},
            staff: {},
            staffDiscussion: {},
            stswr: {},
            its: {},
            public: {}
        }

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
                && isNaN(schoolCode)
                && requestedSchoolCode == schoolCode
            ) {
                if (adminJobCodes.includes(jobCode)) {
                    members.staff[email] = {
                        email:          email,
                        role:           "MANAGER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-staff@wrdsb.ca'
                    };
                } else {
                    members.staff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-staff@wrdsb.ca'
                    };
                }
        
                if (officeJobCodes.includes(jobCode)) {
                    members.staffDiscussion[email] = {
                        email:          email,
                        role:           "MANAGER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-staff-discussion@wrdsb.ca'
                    };
                } else {
                    members.staffDiscussion[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-staff-discussion@wrdsb.ca'
                    };
                }
            
                if (adminJobCodes.includes(jobCode)) {
                    members.admin[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-admin@wrdsb.ca'
                    };
                }
            
                if (attendanceJobCodes.includes(jobCode)) {
                    members.attendance[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-attendance@wrdsb.ca'
                    };
                }
            
                if (beforeafterJobCodes.includes(jobCode)) {
                    members.beforeafter[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-beforeafter@wrdsb.ca'
                    };
                }
            
                if (easyconnectJobCodes.includes(jobCode)) {
                    members.easyconnect[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-easyconnect@wrdsb.ca'
                    };
                }
            
                if (itsJobCodes.includes(jobCode)) {
                    members.its[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-its@wrdsb.ca'
                    };
                }
            
                if (officeJobCodes.includes(jobCode)) {
                    members.itunes[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-itunes@wrdsb.ca'
                    };
                }
            
                if (officeJobCodes.includes(jobCode)) {
                    members.office[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-office@wrdsb.ca'
                    };
                }
            
                if (ordersJobCodes.includes(jobCode)) {
                    members.orders[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-orders@wrdsb.ca'
                    };
                }
            
                if (officeJobCodes.includes(jobCode)) {
                    members.registrations[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-registrations@wrdsb.ca'
                    };
                }
            
                if (s4sJobCodes.includes(jobCode)) {
                    members.s4s[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-s4s@wrdsb.ca'
                    };
                }
            
                if (officeJobCodes.includes(jobCode)) {
                    members.stswr[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '-stswr@wrdsb.ca'
                    };
                }
            
                if (officeJobCodes.includes(jobCode)) {
                    members.public[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       schoolCode + '@wrdsb.ca'
                    };
                }
            }
        });
        return members;
    }
}

export default GroupMembershipsABCCalculate;
