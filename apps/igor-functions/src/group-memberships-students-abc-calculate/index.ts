import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest, GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsABCCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.StudentsABC.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-students-abc-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.studentsNow;

    const calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSchoolCode: requestedSchoolCode,
        memberCounts: memberCounts
    };
    context.log(logPayload);

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
    context.log(invocationEvent);

    context.done(null, invocationEvent);


    async function calculateMembers(rows) {
        const members = {};

        rows.forEach(function(row) {
            const email = (row.student_email) ? row.student_email : false;
            const schoolCode = (row.school_code) ? row.school_code.toLowerCase() : false;
            const oyap = (row.student_oyap === 'Y') ? true : false;
            const shsm = (row.student_shsm_sector.length > 1) ? true : false;

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
            } else if (requestedSchoolCode === 'shsm') {
                if (email && shsm) {
                    members[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'shsm-students@wrdsb.ca'
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

export default GroupMembershipsStudentsABCCalculate;