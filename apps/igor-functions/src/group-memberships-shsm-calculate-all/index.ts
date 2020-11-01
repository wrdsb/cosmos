import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GroupMembershipsStudentsCalculateAllFunctionRequest, GroupMembershipsStudentsCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsStudentsCalculateAllFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.Students.Calculate.All';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-shsm-calculate-all-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GroupMembershipsStudentsCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsStudentsCalculateAllFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.studentsNow;
    
    let queueMessages = await prepareMessages(rows);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
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

    
    async function prepareMessages(rows) {
        let messages = [];
        let schoolCodes = new Set();

        rows.forEach(function(row) {
            let schoolCode = (row.school_code) ? row.school_code.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(schoolCode => {
            let message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        let oyapMessage = {
            payload: {
                schoolCode: 'oyap'
            }
        };
        messages.push(oyapMessage);

        return messages;
    }
}

export default GroupMembershipsStudentsCalculateAll;
