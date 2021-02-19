import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const blobFile = triggerMessage.blobFile;

    let queueTriggered = '';
    let queueMessage = {};
    let sentQueueMessage = false;

    let html = '';
    let sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        queueMessage: {},
        queueTriggered: '',
        error: '',
        result: ''
    };
    let notification = {};

    if (jobType) {
        switch (jobType) {
            case 'WRDSB.Panama.View.AssetChecksum.Copy':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetChecksum.Copy",
                    incomingBlob: "incomingChecksum.json",
                    outgoingBlob: "nowChecksum.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy",
                    incomingBlob: "incoming.json",
                    outgoingBlob: "now.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'wRDSB.Panama.View.Asset.Copy50k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "wRDSB.Panama.View.Asset.Copy50k",
                    incomingBlob: "incoming50.json",
                    outgoingBlob: "now50.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy100k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy100k",
                    incomingBlob: "incoming100.json",
                    outgoingBlob: "now100.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy150k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy150k",
                    incomingBlob: "incoming150.json",
                    outgoingBlob: "now150.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy200k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy200k",
                    incomingBlob: "incoming200.json",
                    outgoingBlob: "now200.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy250k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy250k",
                    incomingBlob: "incoming250.json",
                    outgoingBlob: "now250.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy300k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy300k",
                    incomingBlob: "incoming300.json",
                    outgoingBlob: "now300.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.Asset.Copy350k':
                queueTriggered = 'view-asset-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy350k",
                    incomingBlob: "incoming350.json",
                    outgoingBlob: "now350.json"
                };
                context.bindings.triggerViewAssetCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.AssetClass.Copy':
                queueTriggered = 'view-asset-class-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetClass.Copy"
                };
                context.bindings.triggerViewAssetClassCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.AssetClassType.Copy':
                queueTriggered = 'view-asset-class-type-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetClassType.Copy"
                };
                context.bindings.triggerViewAssetClassTypeCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.AssetType.Copy':
                queueTriggered = 'view-asset-type-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetType.Copy"
                };
                context.bindings.triggerViewAssetTypeCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.GClassroom.Copy':
                queueTriggered = 'view-gclassroom-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.GClassroom.Copy"
                };
                context.bindings.triggerViewGClassroomCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.IAMWP.Copy':
                queueTriggered = 'view-iamwp-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.IAMWP.Copy"
                };
                context.bindings.triggerViewIAMWPCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.SkinnerAssignments.Copy':
                queueTriggered = 'view-skinnerassignments-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.SkinnerAssignments.Copy"
                };
                context.bindings.triggerViewSkinnerAssignmentsCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.SkinnerStaff.Copy':
                queueTriggered = 'view-skinnerstaff-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.SkinnerStaff.Copy"
                };
                context.bindings.triggerViewSkinnerStaffCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.StaffDir.Copy':
                queueTriggered = 'view-staffdir-copy';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.StaffDir.Copy"
                };
                context.bindings.triggerViewStaffDirCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.GClassroom.Copy.Poison':
                html = JSON.stringify(triggerMessage);
                sendNotification = true;
                break;

            case 'WRDSB.Panama.View.IAMWP.Copy.Poison':
                html = JSON.stringify(triggerMessage);
                sendNotification = true;
                break;

            case 'WRDSB.Panama.View.SkinnerAssignments.Copy.Poison':
                html = JSON.stringify(triggerMessage);
                sendNotification = true;
                break;

            case 'WRDSB.Panama.View.SkinnerStaff.Copy.Poison':
                html = JSON.stringify(triggerMessage);
                sendNotification = true;
                break;

            case 'WRDSB.Panama.View.StaffDir.Copy.Poison':
                html = JSON.stringify(triggerMessage);
                sendNotification = true;
                break;

            default:
                context.bindings.callbackMessage = JSON.stringify({
                    status: 422,
                    body: "Unprocessable Entity. Cannot find the specified jobType."
                });
                break;
        }
    }
    else {
        context.bindings.callbackMessage = JSON.stringify({
            status: 400,
            body: "Please pass a valid jobType in the request body."
        });
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

export default jobEnqueue;
