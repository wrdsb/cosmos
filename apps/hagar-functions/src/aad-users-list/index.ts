import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions/shared";
import { storeLogBlob } from "@cosmos/azure-functions/shared";
import { createCallbackMessage } from "@cosmos/azure-functions/shared";
import { createEvent } from "@cosmos/azure-functions/shared";
import { MSGraphUsersAPI } from "../shared/MSGraphUsersAPI";
import { AADUsersListFunctionRequest, AADUsersListFunctionRequestPayload } from "@cosmos/types";
import aadUsersListParse from '../aad-users-list-parse';

const aadUsersList: AzureFunction = async function (context: Context, triggerMessage: AADUsersListFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.User.List';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-users-list-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADUsersListFunctionRequest;
    const payload = triggerObject.payload as AADUsersListFunctionRequestPayload;

    const apiToken = context.bindings.graphToken;
    const apiClient = new MSGraphUsersAPI(apiToken);

    let result = await apiClient.list(context);
    context.bindings.blobActualCurrentArray = result;

    const logPayload = {};
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

    let aadUsersListParseMessages = [
        {operation: "actual-current-object-aad-id"},
        {operation: "actual-current-object-hagar-id"},
        {operation: "actual-current-object-userPrincipalName"},
        {operation: "actual-current-object-staff-aad-id"},
        {operation: "actual-current-object-staff-hagar-id"},
        {operation: "actual-current-object-staff-userPrincipalName"},
        {operation: "actual-current-object-students-aad-id"},
        {operation: "actual-current-object-students-hagar-id"},
        {operation: "actual-current-object-students-userPrincipalName"}
    ]
    context.bindings.aadUsersListParse = aadUsersListParseMessages;

    context.done(null, logBlob);
};

export default aadUsersList;
