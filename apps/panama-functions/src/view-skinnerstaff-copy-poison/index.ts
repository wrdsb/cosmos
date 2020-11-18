import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createCallbackMessage } from "../SharedCode/createCallbackMessage";
import { createEvent } from "../SharedCode/createEvent";

const viewSkinnerStaffCopyPoison: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Panama.View.SkinnerStaff.Copy.Poison';
    const functionEventID = `panama-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-view-skinnerstaff-copy-poison-logs';

    const eventLabel = '';
    const eventTags = [
        "panama",
        "poison"
    ];

    const queueMessage = context.bindings.triggerMessage;

    const statusCode = '200';
    const statusMessage = 'Logged poisonous message from queue view-skinnerstaff-copy.';

    const logPayload = {
        application: 'panama-functions',
        function: context.executionContext.functionName,
        queue: "view-skinnerstaff-copy",
        message: queueMessage
    };

    // Log function invocation and results
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    // Callback for internal consumption
    const callbackMessage = await createCallbackMessage(logObject, '200');
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);
    
    // Fire event for external consumption
    const invocationEvent = await createEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, statusCode, statusMessage, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);
};

export default viewSkinnerStaffCopyPoison;
