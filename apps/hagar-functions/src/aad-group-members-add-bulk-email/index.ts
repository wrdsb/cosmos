import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions/shared";
import { storeLogBlob } from "@cosmos/azure-functions/shared";
import { createCallbackMessage } from "@cosmos/azure-functions/shared";
import { createEvent } from "@cosmos/azure-functions/shared";
import { MSGraphGroupMembershipsAPI } from "../shared/MSGraphGroupMembershipsAPI";
import { AADGroupMembersAddBulkEmailFunctionRequest, AADGroupMemberAddEmailFunctionRequestPayload } from "@cosmos/types";

const aadGroupMemberAddBulkEmail: AzureFunction = async function (context: Context, triggerMessage: AADGroupMembersAddBulkEmailFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.GroupMember.Add';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-group-member-add-bulk-email-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADGroupMembersAddBulkEmailFunctionRequest;

    let queueMessages = [];

    triggerObject.payload.forEach((aadGroupMemberAddEmailFunctionRequestPayload) => {
        let queueMessage = {
            payload: aadGroupMemberAddEmailFunctionRequestPayload
        };

        queueMessages.push(queueMessage);
    });

    context.bindings.aadGroupMemberAddEmailQueue = queueMessages;

    const logPayload = "";
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

export default aadGroupMemberAddBulkEmail;
