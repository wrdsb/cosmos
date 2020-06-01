import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createCallbackMessage } from "../SharedCode/createCallbackMessage";
import { createEvent } from "../SharedCode/createEvent";

const eventEmitter: AzureFunction = AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Panama.Event.Emit';
    const functionEventID = `panama-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-event-emitter-logs';

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const eventLabel = '';
    const eventTags = [
        "panama", 
    ];

    const event = context.bindings.triggerMessage;
    const eventType = event.type;
    const eventData = event.data;
    const eventStatus = eventData.status;

    let queueTriggered = '';
    let queueMessage = '';
    let sentQueueMessage = false;

    let html = '';
    let sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        queueMessage: '',
        queueTriggered: '',
        error: '',
        result: ''
    };
    let notification = {};

    if (eventStatus > 399) {
        html = JSON.stringify(event);
        sendNotification = true;
    } else {
        switch (eventType) {
            case 'WRDSB.Panama.View.GClassroom.Copy':
                queueTriggered = 'view-gclassroom-process';
                queueMessage = JSON.stringify({"job_type": "Skinner.View.GClassroom.Process"});
                context.bindings.triggerViewGClassroomProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.IAMWP.Copy':
                queueTriggered = 'view-iamwp-process';
                queueMessage = 'Flenderson.View.IAMWP.Process';
                context.bindings.triggerViewIAMWPProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.SkinnerAssignments.Copy':
                queueTriggered = 'view-skinnerassignments-process';
                queueMessage = JSON.stringify({"job_type": "Skinner.View.SkinnerAssignments.Process"});
                context.bindings.triggerViewSkinnerAssignmentsProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.SkinnerStaff.Copy':
                queueTriggered = 'view-skinnerstaff-process';
                queueMessage = JSON.stringify({"job_type": "Skinner.View.SkinnerStaff.Process"});
                context.bindings.triggerViewSkinnerStaffProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.StaffDir.Copy':
                queueTriggered = 'view-staffdir-process';
                queueMessage = 'Flenderson.View.StaffDir.Process';
                context.bindings.triggerViewStaffDirProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.GClassroom.Copy.Poison':
                html = JSON.stringify(event);
                sendNotification = true;
                break;
            case 'WRDSB.Panama.View.IAMWP.Copy.Poison':
                html = JSON.stringify(event);
                sendNotification = true;
                break;
            case 'WRDSB.Panama.View.SkinnerAssignments.Copy.Poison':
                html = JSON.stringify(event);
                sendNotification = true;
                break;
            case 'WRDSB.Panama.View.SkinnerStaff.Copy.Poison':
                html = JSON.stringify(event);
                sendNotification = true;
                break;
            case 'WRDSB.Panama.View.StaffDir.Copy.Poison':
                html = JSON.stringify(event);
                sendNotification = true;
                break;
            default:
                break;
        }
    }

    if (sentQueueMessage) {
        logPayload = {
            status: "200",
            message: `Sent ${queueMessage} to ${queueTriggered}`,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            result: '',
            error: ''
        };
    }

    if (sendNotification) {
        notification = {
            subject: 'Poison Message Notification',
            to: process.env['SENDGRID_TO'],
            from: {
                email: 'errors@panama.wrdsb.io',
                name: 'Panama Errors'
            },
            html: html
        };
        sgMail.send(notification, (error, result) => {
            if (error) {
                logPayload = {
                    status: "500",
                    message: 'Failed to send email notification.',
                    queueMessage: '',
                    queueTriggered: '',
                    result: '',
                    error: error,
                };
            } else {
                logPayload = {
                    status: "200",
                    message: 'Sent email notification',
                    queueMessage: '',
                    queueTriggered: '',
                    result: result,
                    error: error
                };
            }
        });
    }

    // Log function invocation and results
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    // Callback for internal consumption
    const callbackMessage = await createCallbackMessage(logObject, logPayload.status);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);
    
    context.done(null, logBlob);
};

export default eventEmitter;
