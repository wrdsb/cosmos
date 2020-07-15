import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { AADUsersListParseFunctionRequest, AADUsersListParseFunctionRequestOperation } from "@cosmos/types";

const aadUsersListParse: AzureFunction = async function (context: Context, triggerMessage: AADUsersListParseFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.User.List.Parse';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-users-list-parse-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADUsersListParseFunctionRequest;
    const operation = triggerObject.operation as AADUsersListParseFunctionRequestOperation

    const blobActualCurrentArray = context.bindings.blobActualCurrentArray;
    let outputBlob = {};

    let logPayload = {};

    let hasNumber = /\d/;

    switch (operation) {
        case 'actual-current-object-aad-id':
            blobActualCurrentArray.forEach((user) => {
                outputBlob[user.id] = user;
            });

            context.bindings.blobActualCurrentObjectAADID = outputBlob;

            break;
        case 'actual-current-object-hagar-id':
            blobActualCurrentArray.forEach((user) => {
                outputBlob[user.userPrincipalName] = user;
            });

            context.bindings.blobActualCurrentObjectHAGARID = outputBlob;

            break;
        case 'actual-current-object-userPrincipalName':
            blobActualCurrentArray.forEach((user) => {
                outputBlob[user.userPrincipalName] = user;
            });

            context.bindings.blobActualCurrentObjectUserPrincipalName = outputBlob;

            break;
        case 'actual-current-object-staff-aad-id':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && !hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStaffAADID = outputBlob;

            break;
        case 'actual-current-object-staff-hagar-id':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && !hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStaffHAGARID = outputBlob;

            break;
        case 'actual-current-object-staff-userPrincipalName':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && !hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStaffUserPrincipalName = outputBlob;

            break;
        case 'actual-current-object-students-aad-id':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStudentsAADID = outputBlob;

            break;
        case 'actual-current-object-students-hagar-id':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStudentsHAGARID = outputBlob;

            break;
        case 'actual-current-object-students-userPrincipalName':
            blobActualCurrentArray.forEach((user) => {
                if (typeof user.mail === 'string' && hasNumber.test(user.mail)) {
                    outputBlob[user.id] = user;
                }
            });

            context.bindings.blobActualCurrentObjectStudentsUserPrincipalName = outputBlob;

            break;
        default:
            break;
    }

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

export default aadUsersListParse;
