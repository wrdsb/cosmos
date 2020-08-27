import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsStudentsCalculateFunctionRequest, GoogleGroupsMembershipsStudentsCalculateFunctionRequestPayload } from "@cosmos/types";

const GoogleGroupsMembershipsStudentsCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.Students.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-google-groups-memberships-students-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.studentsNow;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSchoolCode: requestedSchoolCode,
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
        let members = {};

        rows.forEach(function(row) {
            let email = (row.student_email) ? row.student_email : false;
            let schoolCode = (row.school_code) ? row.school_code.toLowerCase() : false;
            let oyap = (row.student_oyap === 'Y') ? true : false;

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

export default GoogleGroupsMembershipsStudentsCalculate;