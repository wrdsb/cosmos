import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createCallbackMessage } from "../SharedCode/createCallbackMessage";
import { createEvent } from "../SharedCode/createEvent";

const eventListener: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Panama.Event.Listen';
    const functionEventID = `panama-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-event-listener-logs';

    const eventLabel = '';
    const eventTags = [
        "panama", 
    ];

    const event = req.body.event;

    let queueTriggered = '';
    let queueMessage = '';

    switch (event) {
        case 'Panama.View.GClassroom.Extract':
            queueTriggered = 'view-gclassroom-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.GClassroom.Copy"});
            context.bindings.triggerViewGClassroomCopy = queueMessage;
            break;
        case 'Panama.View.IAMWP.Extract':
            queueTriggered = 'view-iamwp-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.IAMWP.Copy"});
            context.bindings.triggerViewIAMWPCopy = queueMessage;
            break;
        case 'Panama.View.SkinnerAssignments.Extract':
            queueTriggered = 'view-skinnerassignments-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.SkinnerAssignments.Copy"});
            context.bindings.triggerViewSkinnerAssignmentsCopy = queueMessage;
            break;
        case 'Panama.View.SkinnerStaff.Extract':
            queueTriggered = 'view-skinnerstaff-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.SkinnerStaff.Copy"});
            context.bindings.triggerViewSkinnerStaffCopy = queueMessage;
            break;
        case 'Panama.View.StaffDir.Extract':
            queueTriggered = 'view-staffdir-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.StaffDir.Copy"});
            context.bindings.triggerViewStaffDirCopy = queueMessage;
            break;
        default:
            break;
    }

    const statusCode = '200';
    const statusMessage = `Sent ${queueMessage} to ${queueTriggered}`;

    const logPayload = {
        status: statusCode,
        message: statusMessage,
        queueMessage: queueMessage,
        queueTriggered: queueTriggered
    };

    // Log function invocation and results
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    // Callback for internal consumption
    const callbackMessage = await createCallbackMessage(logObject, logPayload.status);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);
    
    // Fire event for external consumption
    const invocationEvent = await createEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, statusCode, statusMessage, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.res = {
        status: 200,
        body: logPayload
    };
    context.done(null, logBlob);
};

export default eventListener;
