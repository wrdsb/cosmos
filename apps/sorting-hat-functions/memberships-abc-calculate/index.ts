import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { createLogBlob } from "../shared/createLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { createBlob } from "../shared/createBlob";

const membershipsABCCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.SortingHat.Memberships.ABC.Calculate';
    const functionEventID = `sorting-hat-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-memberships-abc-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "sorting-hat", 
    ];

    const blobStorageAccount = process.env['storageAccount'];
    const blobStorageKey = process.env['storageKey'];
    const blobStorageContainer = 'set-memberships-now';

    const admin_job_codes = context.bindings.abcAdminJobCodes.definition[0];
    const attendance_job_codes = context.bindings.abcAttendanceJobCodes.definition[0];
    const beforeafter_job_codes = context.bindings.abcBeforeafterJobCodes.definition[0];
    const courier_job_codes = context.bindings.abcCourierJobCodes.definition[0];
    const easyconnect_job_codes = context.bindings.abcEasyconnectJobCodes.definition[0];
    const its_job_codes = context.bindings.abcItsJobCodes.definition[0];
    const office_job_codes = context.bindings.abcOfficeJobCodes.definition[0];
    const orders_job_codes = context.bindings.abcOrdersJobCodes.definition[0];
    const s4s_job_codes = context.bindings.abcS4sJobCodes.definition[0];

    const rows = context.bindings.iamwpRaw;

    const triggerJSON = triggerMessage;
    const requested_school_code = triggerJSON.school_code.toUpperCase();

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    let calculated_members = await calculateMembers(excluded_job_codes, activity_codes, requested_school_code, rows);
    let staff_blob_results = await parseStaffMembers(calculated_members);

    let response = {};
    response['count'] = 0;
    
    staff_blob_results.forEach(function(blob) {
        response[blob.name] = blob.totalSize;
        response['count']++;
    });

    const logPayload = response;
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);

    async function parseStaffMembers(members) {
        let createBlobResults = [];

        Object.getOwnPropertyNames(members).forEach(async function (group_slug) {
            let blobName = requested_school_code.toLowerCase() +'-'+ group_slug +'.json';
            let memberships = members[group_slug];
            let uniqueMemberships = new Set(memberships);
            let blobContent = JSON.stringify([...uniqueMemberships]);
            let result = await createBlob(
                blobStorageAccount,
                blobStorageKey,
                blobStorageContainer,
                blobName,
                blobContent
            );
            createBlobResults.push(result);
        });

        return createBlobResults;
    }

    async function calculateMembers(excluded_job_codes, activity_codes, requested_school_code, rows) {
        let members = {};
        members['staff-school-codes'] = [];
        members['admin-job-codes'] = [];
        members['attendance-job-codes'] = [];
        members['beforeafter-job-codes'] = [];
        members['courier-job-codes'] = [];
        members['easyconnect-job-codes'] = [];
        members['its-job-codes'] = [];
        members['office-job-codes'] = [];
        members['orders-job-codes'] = [];
        members['s4s-job-codes'] = [];
    
        rows.forEach(function(row) {
            if (row.EMAIL_ADDRESS
                && row.JOB_CODE
                && row.EMP_GROUP_CODE
                && row.LOCATION_CODE
                && row.PANEL
                && row.SCHOOL_CODE
                && !excluded_job_codes.includes(row.JOB_CODE)
                && activity_codes.includes(row.ACTIVITY_CODE)
                && isNaN(row.SCHOOL_CODE)
                && requested_school_code == row.SCHOOL_CODE.toUpperCase()
            ) {
                let ein = row.EMPLOYEE_ID;
                let email = row.EMAIL_ADDRESS;
                let username = row.USERNAME;
                let job_code = 'JC-' + row.JOB_CODE;
                let school_code = 'SC-' + row.SCHOOL_CODE.toUpperCase();

                let person = {
                    ein: ein,
                    email: email,
                    username: username
                };

                if (row.EMP_GROUP_CODE) {
                    let group_code = 'GC-' + row.EMP_GROUP_CODE;
                }
                if (row.LOCATION_CODE) {
                    let location_code = 'LC-' + row.LOCATION_CODE;
                }
                if (row.PANEL) {
                    let panel = row.PANEL;
                }
                if (row.ACTIVITY_CODE) {
                    let activity_code = row.ACTIVITY_CODE;
                }

                members['staff-school-codes'].push(person);

                if (admin_job_codes.includes(job_code)) {
                    members['admin-job-codes'].push(person);
                }

                if (attendance_job_codes.includes(job_code)) {
                    members['attendance-job-codes'].push(person);
                }
            
                if (beforeafter_job_codes.includes(job_code)) {
                    members['beforeafter-job-codes'].push(person);
                }
            
                if (courier_job_codes.includes(job_code)) {
                    members['courier-job-codes'].push(person);
                }
            
                if (easyconnect_job_codes.includes(job_code)) {
                    members['easyconnect-job-codes'].push(person);
                }
            
                if (its_job_codes.includes(job_code)) {
                    members['its-job-codes'].push(person);
                }
            
                if (office_job_codes.includes(job_code)) {
                    members['office-job-codes'].push(person);
                }
            
                if (orders_job_codes.includes(job_code)) {
                    members['orders-job-codes'].push(person);
                }
            
                if (s4s_job_codes.includes(job_code)) {
                    members['s4s-job-codes'].push(person);
                }
            }
        });
        return members;
    }
};

export default membershipsABCCalculate;
