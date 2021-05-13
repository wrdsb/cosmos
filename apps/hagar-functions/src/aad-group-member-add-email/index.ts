import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions/shared";
import { storeLogBlob } from "@cosmos/azure-functions/shared";
import { createCallbackMessage } from "@cosmos/azure-functions/shared";
import { createEvent } from "@cosmos/azure-functions/shared";
import { MSGraphGroupMembershipsAPI } from "../shared/MSGraphGroupMembershipsAPI";
import { AADGroupMemberAddEmailFunctionRequest, AADGroupMemberAddEmailFunctionRequestPayload } from "@cosmos/types";

const aadGroupMemberAddEmail: AzureFunction = async function (context: Context, triggerMessage: AADGroupMemberAddEmailFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.GroupMember.Add';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-group-member-add-email-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const users = context.bindings.usersBlob;

    const triggerObject = triggerMessage as AADGroupMemberAddEmailFunctionRequest;
    const payload = triggerObject.payload as AADGroupMemberAddEmailFunctionRequestPayload;

    const apiToken = context.bindings.graphToken;
    const apiClient = new MSGraphGroupMembershipsAPI(apiToken);

    const groupID = payload.groupID;
    
    const memberIDs = [];

    let currentMembers = await apiClient.list(payload.groupID);
    context.log(currentMembers);

    let currentMembersIDs = [];
    currentMembers.forEach((member) => {
        currentMembersIDs.push(member.id);
    });
    context.log(currentMembersIDs);

    payload.memberEmails.forEach((email) => {
        if (users[email]) {
            context.log(`checking ${users[email].id}`);
            if (!currentMembersIDs.includes(users[email].id)) {
                memberIDs.push(users[email].id);
            }
        }
    });

    context.log(groupID);
    context.log(memberIDs);

    let result;
    if (memberIDs.length > 0) {
        result = await apiClient.add(groupID, memberIDs);
    }

    const logPayload = result;
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

export default aadGroupMemberAddEmail;
