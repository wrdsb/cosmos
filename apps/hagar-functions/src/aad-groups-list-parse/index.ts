import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { AADGroupsListParseFunctionRequest, AADGroupsListParseFunctionRequestOperation } from "@cosmos/types";

const aadGroupsListParse: AzureFunction = async function (context: Context, triggerMessage: AADGroupsListParseFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.Group.List.Parse';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-groups-list-parse-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADGroupsListParseFunctionRequest;
    const operation = triggerObject.operation as AADGroupsListParseFunctionRequestOperation;

    const blobActualCurrentArray = context.bindings.blobActualCurrentArray;
    let outputBlob = {};

    let logPayload = {};

    switch (operation) {
        case 'actual-current-object-aad-id':
            context.log('actual-current-object-aad-id');
            blobActualCurrentArray.forEach((group) => {
                outputBlob[group.id] = group;
            });
        
            context.bindings.blobActualCurrentObjectAADID = outputBlob;
            break;
        case 'actual-current-object-hagar-id':
            context.log('actual-current-object-hagar-id');
            blobActualCurrentArray.forEach((group) => {
                outputBlob[group.id] = group;
            });

            context.bindings.blobActualCurrentObjectHAGARID = outputBlob
            break;
        case 'actual-current-object-mailNickname':
            context.log('actual-current-object-mailNickname');
            blobActualCurrentArray.forEach((group) => {
                outputBlob[group.mailNickname] = group;
            });

            context.bindings.blobActualCurrentObjectMailNickname = outputBlob;
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

    context.done(null, 'done');
};

export default aadGroupsListParse;
