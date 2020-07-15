import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { MSGraphUsersAPI } from "../shared/MSGraphUsersAPI";
import { AADUsersListFunctionRequest, AADUsersListFunctionRequestPayload } from "@cosmos/types";

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

    let blobActualCurrentArray = [];
    let blobActualCurrentObjectAADID = {};
    let blobActualCurrentObjectHAGARID = {};
    let blobActualCurrentObjectUserPrincipalName = {};

    let blobActualCurrentObjectStaffAADID = {};
    let blobActualCurrentObjectStaffHAGARID = {};
    let blobActualCurrentObjectStaffUserPrincipalName = {};

    let blobActualCurrentObjectStudentsAADID = {};
    let blobActualCurrentObjectStudentsHAGARID = {};
    let blobActualCurrentObjectStudentsUserPrincipalName = {};

    let result = await apiClient.list(context);

    blobActualCurrentArray = result;

    result.forEach((user) => {
        let userToStore = user;
        userToStore['aadID'] = userToStore.id;
        userToStore['id'] = userToStore.userPrincipalName;
    
        blobActualCurrentObjectAADID[userToStore['aadID']] = user;
        blobActualCurrentObjectHAGARID[userToStore.id] = user;
        blobActualCurrentObjectUserPrincipalName[userToStore.userPrincipalName] = user;

        if (/\d/.test(userToStore.mail)) {
            blobActualCurrentObjectStudentsAADID[userToStore['aadID']] = user;
            blobActualCurrentObjectStudentsHAGARID[userToStore.id] = user;
            blobActualCurrentObjectStudentsUserPrincipalName[userToStore.userPrincipalName] = user;
        } else {
            blobActualCurrentObjectStaffAADID[userToStore['aadID']] = user;
            blobActualCurrentObjectStaffHAGARID[userToStore.id] = user;
            blobActualCurrentObjectStaffUserPrincipalName[userToStore.userPrincipalName] = user;
        }
    });

    context.bindings.blobActualCurrentArray = blobActualCurrentArray;
    context.bindings.blobActualCurrentObjectAADID = blobActualCurrentObjectAADID;
    context.bindings.blobActualCurrentObjectHAGARID = blobActualCurrentObjectHAGARID;
    context.bindings.blobActualCurrentObjectUserPrincipalName = blobActualCurrentObjectUserPrincipalName;

    context.bindings.blobActualCurrentObjectStaffAADID = blobActualCurrentObjectStaffAADID;
    context.bindings.blobActualCurrentObjectStaffHAGARID = blobActualCurrentObjectStaffHAGARID;
    context.bindings.blobActualCurrentObjectStaffUserPrincipalName = blobActualCurrentObjectStaffUserPrincipalName;

    context.bindings.blobActualCurrentObjectStudentsAADID = blobActualCurrentObjectStudentsAADID;
    context.bindings.blobActualCurrentObjectStudentsHAGARID = blobActualCurrentObjectStudentsHAGARID;
    context.bindings.blobActualCurrentObjectStudentsUserPrincipalName = blobActualCurrentObjectStudentsUserPrincipalName;

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

export default aadUsersList;
