import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createCallbackMessage } from "../SharedCode/createCallbackMessage";
import { createEvent } from "../SharedCode/createEvent";

const eventEmitter: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Flenderson.Event.Emit';
    const functionEventID = `flenderson-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-event-emitter-logs';

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const eventLabel = '';
    const eventTags = [
        "flenderson", 
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
            case 'WRDSB.Flenderson.HRIS.Group.Store':
                break;
            case 'WRDSB.Flenderson.HRIS.Job.Store':
                break;
            case 'WRDSB.Flenderson.HRIS.Location.Store':
                break;
            case 'WRDSB.Flenderson.HRIS.Person.Store':
                break;

            case 'WRDSB.Flenderson.View.IAMWP.Process':
                queueTriggered = 'hris-groups-reconcile';
                queueMessage = JSON.stringify({"job_type": "Flenderson.HRIS.Groups.Reconcile"});
                context.bindings.triggerHRISGroupsReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Flenderson.HRIS.Groups.Reconcile':
                queueTriggered = 'hris-jobs-reconcile';
                queueMessage = JSON.stringify({"job_type": "Flenderson.HRIS.Jobs.Reconcile"});
                context.bindings.triggerHRISJobsReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Flenderson.HRIS.Jobs.Reconcile':
                queueTriggered = 'hris-locations-reconcile';
                queueMessage = JSON.stringify({"job_type": "Flenderson.HRIS.Locations.Reconcile"});
                context.bindings.triggerHRISLocationsReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Flenderson.HRIS.Locations.Reconcile':
                queueTriggered = 'hris-people-reconcile';
                queueMessage = JSON.stringify({"job_type": "Flenderson.HRIS.People.Reconcile"});
                context.bindings.triggerHRISPeopleReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Flenderson.HRIS.People.Reconcile':
            break;

            case 'WRDSB.Flenderson.View.StaffDir.Process':
                queueTriggered = 'hris-people-reconcile';
                queueMessage = JSON.stringify({"job_type": "Flenderson.HRIS.People.Reconcile"});
                context.bindings.triggerHRISPeopleReconcile = queueMessage;
                sentQueueMessage = true;
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