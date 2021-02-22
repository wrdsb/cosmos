import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const jobRelay: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
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
            case 'WRDSB.Quartermaster.View.Asset.Checksum.Process':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: ""
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: ""
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process50k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //blobFile: "now50.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process100k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now100.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process150k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now150.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process200k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now200.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process250k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now250.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process300k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now300.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Process350k':
                //queueTriggered = 'quartermaster:job-enqueue';
                //queueMessage = {
                    //jobType: "",
                    //blobFile: "now350.json"
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.AssetClass.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetClass.Extract.AssetClasses",
                    blobFile: "now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case "WRDSB.Quartermaster.View.AssetClass.Extract.AssetClasses":
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.ATS.AssetClasses.Reconcile"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.AssetClassType.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetClassType.Extract.AssetClassTypes",
                    blobFile: "now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case "WRDSB.Quartermaster.View.AssetClassType.Extract.AssetClassTypes":
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.ATS.AssetClassTypes.Reconcile"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Quartermaster.View.AssetType.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.AssetType.Extract.AssetTypes",
                    blobFile: "now.json"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case "WRDSB.Quartermaster.View.AssetType.Extract.AssetTypes":
                queueTriggered = 'quartermaster:job-enqueue';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.ATS.AssetTypes.Reconcile"
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
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
