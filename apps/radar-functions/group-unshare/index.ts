import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { storeLogBlob } from "../shared/storeLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { teamViewerGroupAPI, GroupAPIUnshareRequest } from "../shared/teamViewerGroupAPI";
import { GroupUnshareFunctionRequest, GroupUnshareFunctionRequestPayload } from "../shared/types/group-unshare.types";

const groupUnshare: AzureFunction = async function (context: Context, triggerMessage: GroupUnshareFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.RADAR.Group.Unshare';
    const functionEventID = `radar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-group-unshare-logs';

    const eventLabel = '';
    const eventTags = [
        "radar", 
    ];

    const apiToken = "Bearer " + process.env['userToken'];
    const apiClient = new teamViewerGroupAPI(apiToken);

    const triggerObject = triggerMessage as GroupUnshareFunctionRequest;
    const payload = triggerObject.payload as GroupUnshareFunctionRequestPayload;

    const request = {
        group_id: payload.group_id,
        user_id: payload.user_id
    } as GroupAPIUnshareRequest;

    let result = await apiClient.unshare(request);

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

export default groupUnshare;
