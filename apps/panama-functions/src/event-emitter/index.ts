import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const eventEmitter: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'Event',
        functionDataOperation: 'Emit',
        eventLabel: ''
    } as FunctionInvocation;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

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
            case 'WRDSB.Panama.View.AssetChecksum.Copy':
                queueTriggered = 'view-ats-asset-checksum-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Checksum.Process",
                    blobFile: "nowChecksum.json"
                });
                context.bindings.triggerViewATSAssetChecksumProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'wRDSB.Panama.View.Asset.Copy50k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now50.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy100k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now100.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy150k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now150.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy200k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now200.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy250k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now250.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy300k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now300.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.Asset.Copy350k':
                queueTriggered = 'view-ats-asset-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.Asset.Process",
                    blobFile: "now350.json"
                });
                context.bindings.triggerViewATSAssetProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.AssetClass.Copy':
                queueTriggered = 'view-ats-asset-class-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.AssetClass.Process",
                    blobFile: "now.json"
                });
                context.bindings.triggerViewATSAssetClassProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.AssetClassType.Copy':
                queueTriggered = 'view-ats-asset-class-type-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.AssetClassType.Process",
                    blobFile: "now.json"
                });
                context.bindings.triggerViewATSAssetClassTypeProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.AssetType.Copy':
                queueTriggered = 'view-ats-asset-type-process';
                queueMessage = JSON.stringify({
                    jobType: "Quartermaster.View.AssetType.Process",
                    blobFile: "now.json"
                });
                context.bindings.triggerViewATSAssetTypeProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.GClassroom.Copy':
                queueTriggered = 'view-gclassroom-process';
                queueMessage = JSON.stringify({
                    jobType: "Skinner.View.GClassroom.Process"
                });
                context.bindings.triggerViewGClassroomProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.IAMWP.Copy':
                queueTriggered = 'view-iamwp-process';
                queueMessage = JSON.stringify({
                    jobType: "Flenderson.View.IAMWP.Process"
                });
                context.bindings.triggerViewIAMWPProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.SkinnerAssignments.Copy':
                queueTriggered = 'view-skinnerassignments-process';
                queueMessage = JSON.stringify({
                    jobType: "Skinner.View.SkinnerAssignments.Process"
                });
                context.bindings.triggerViewSkinnerAssignmentsProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.SkinnerStaff.Copy':
                queueTriggered = 'view-skinnerstaff-process';
                queueMessage = JSON.stringify({
                    jobType: "Skinner.View.SkinnerStaff.Process"
                });
                context.bindings.triggerViewSkinnerStaffProcess = queueMessage;
                sentQueueMessage = true;
                break;
            case 'WRDSB.Panama.View.StaffDir.Copy':
                queueTriggered = 'view-staffdir-process';
                queueMessage = JSON.stringify({
                    jobType: "Flenderson.View.StaffDir.Process"
                });
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

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default eventEmitter;
