import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest, GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsStudentsABCCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.StudentsABC.Calculate.All';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-memberships-students-abc-calculate-all-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsStudentsABCCalculateAllFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.studentsNow;
    
    const queueMessages = await prepareMessages(rows);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
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

    async function prepareMessages(rows) {
        const messages = [];
        const schoolCodes = new Set();

        rows.forEach(function(row) {
            const schoolCode = (row.school_code) ? row.school_code.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(schoolCode => {
            const message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        const oyapMessage = {
            payload: {
                schoolCode: 'oyap'
            }
        };
        messages.push(oyapMessage);

        const shsmMessage = {
            payload: {
                schoolCode: 'shsm'
            }
        };
        messages.push(shsmMessage);

        return messages;
    }
}

export default GroupMembershipsStudentsABCCalculateAll;
