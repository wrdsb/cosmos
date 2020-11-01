import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsSHSMCalculateFunctionRequest, GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsSHSMCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsSHSMCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.SHSM.Calculate';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-shsm-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsSHSMCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSector = payload.sector.toLowerCase();
    const rows = context.bindings.studentsNow;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSector: requestedSector,
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
            let sector = (row.shsm_sector) ? row.shsm_sector.toLowerCase() : false;

            if (email && (requestedSector === sector)) {
                members[email] = {
                    email:          email,
                    role:           "MEMBER",
                    status:         "ACTIVE",
                    type:           "USER",
                    groupKey:       `shsm-students-${sector}@wrdsb.ca`
                };
            }
        });
        return members;
    }
}

export default GroupMembershipsSHSMCalculate;