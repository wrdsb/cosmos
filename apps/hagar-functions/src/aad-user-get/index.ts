import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { MSGraphUsersAPI } from "../shared/MSGraphUsersAPI";
import { AADUserGetFunctionRequest, AADUserGetFunctionRequestPayload } from "@cosmos/types";

const aadUserGet: AzureFunction = async function (context: Context, triggerMessage: AADUserGetFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.User.Get';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-user-get-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADUserGetFunctionRequest;
    const payload = triggerObject.payload as AADUserGetFunctionRequestPayload;

    const apiToken = context.bindings.graphToken;
    const apiClient = new MSGraphUsersAPI(apiToken);

    let result = await apiClient.get(payload.userID);

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

    let userToStore = result;
    userToStore['aadID'] = userToStore.id;
    userToStore['id'] = userToStore.userPrincipalName;

    context.bindings.storeUser = {
        operation: "patch",
        payload: userToStore
    }
    context.log(userToStore);

    context.done(null, logBlob);
};

export default aadUserGet;
