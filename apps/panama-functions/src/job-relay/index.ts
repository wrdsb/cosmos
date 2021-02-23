import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const jobRelay: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Relay',
        eventLabel: ''
    } as FunctionInvocation;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;

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
            case 'WRDSB.Panama.View.AssetChecksum.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetChecksum.Copy",
                    incomingBlob: "incomingChecksum.json",
                    outgoingBlob: "nowChecksum.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetChecksum.Copy':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Checksum.Process",
                    incomingBlob: "nowChecksum.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy",
                    incomingBlob: "incoming.json",
                    outgoingBlob: "now.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now.json",
                    offset: "0"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract50k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "wRDSB.Panama.View.Asset.Copy50k",
                    incomingBlob: "incoming50.json",
                    outgoingBlob: "now50.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'wRDSB.Panama.View.Asset.Copy50k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now50.json",
                    offset: "50"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract100k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy100k",
                    incomingBlob: "incoming100.json",
                    outgoingBlob: "now100.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy100k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now100.json",
                    offset: "100"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract150k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy150k",
                    incomingBlob: "incoming150.json",
                    outgoingBlob: "now150.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy150k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now150.json",
                    offset: "150"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract200k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy200k",
                    incomingBlob: "incoming200.json",
                    outgoingBlob: "now200.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy200k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now200.json",
                    offset: "200"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract250k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy250k",
                    incomingBlob: "incoming250.json",
                    outgoingBlob: "now250.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy250k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now250.json",
                    offset: "250"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract300k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy300k",
                    incomingBlob: "incoming300.json",
                    outgoingBlob: "now300.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy300k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now300.json",
                    offset: "300"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Extract350k':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.Asset.Copy350k",
                    incomingBlob: "incoming350.json",
                    outgoingBlob: "now350.json"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.Asset.Copy350k':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Process",
                    incomingBlob: "ats-view-hd-asset/now350.json",
                    offset: "350"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetClass.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetClass.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetClass.Copy':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetClass.Process",
                    incomingBlob: "ats-view-hd-asset-class/now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetClassType.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetClassType.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetClassType.Copy':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetClassType.Process",
                    incomingBlob: "ats-view-hd-asset-class-type/now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetType.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.AssetType.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.AssetType.Copy':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetType.Process",
                    incomingBlob: "ats-view-hd-asset-type/now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.GClassroom.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.GClassroom.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.GClassroom.Copy':
                queueTriggered = 'view-gclassroom-process';
                queueMessage = {
                    jobType: "Skinner.View.GClassroom.Process"
                };
                context.bindings.triggerViewGClassroomProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.IAMWP.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.IAMWP.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.IAMWP.Copy':
                queueTriggered = 'view-iamwp-process';
                queueMessage = {
                    jobType: "Flenderson.View.IAMWP.Process"
                };
                context.bindings.triggerViewIAMWPProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.SkinnerAssignments.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.SkinnerAssignments.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.SkinnerAssignments.Copy':
                queueTriggered = 'view-skinnerassignments-process';
                queueMessage = {
                    jobType: "Skinner.View.SkinnerAssignments.Process"
                };
                context.bindings.triggerViewSkinnerAssignmentsProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.SkinnerStaff.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.SkinnerStaff.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.SkinnerStaff.Copy':
                queueTriggered = 'view-skinnerstaff-process';
                queueMessage = {
                    jobType: "Skinner.View.SkinnerStaff.Process"
                };
                context.bindings.triggerViewSkinnerStaffProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Panama.View.StaffDir.Extract':
                queueTriggered = 'panama:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Panama.View.StaffDir.Copy"
                };
                context.bindings.panamaJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Panama.View.StaffDir.Copy':
                queueTriggered = 'view-staffdir-process';
                queueMessage = {
                    jobType: "Flenderson.View.StaffDir.Process"
                };
                context.bindings.triggerViewStaffDirProcess = queueMessage;
                sentQueueMessage = true;
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

export default jobRelay;
