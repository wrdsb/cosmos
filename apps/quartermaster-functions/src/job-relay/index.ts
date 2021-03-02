import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, QuartermasterJobType } from "@cosmos/types";

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

    //const sgMail = require('@sendgrid/mail');
    //sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType as QuartermasterJobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    let queueTriggered = '';
    let jobTriggered = '' as QuartermasterJobType;
    let queueMessage = {};
    const sentQueueMessage = false;

    const html = '';
    const sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        queueMessage: {},
        queueTriggered: '',
        error: '',
        result: ''
    };
    const notification = {};

    if (jobType) {
        switch (jobType) {
            case 'Quartermaster.ViewATSAssetChecksum.Process':
                //queueTriggered = 'quartermaster:job-enqueue';
                //jobTriggered = '';
                //queueMessage = {
                    //jobType: jobTriggered,
                    //blobFile: ''
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAsset.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ViewATSAsset.ExtractAssets';
                queueMessage = {
                    jobType: jobTriggered,
                    incomingBlob: `ats/view-ats-asset-raw${offset}.json`,
                    offset: offset
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAsset.ExtractAssets':
                //queueTriggered = 'quartermaster:job-enqueue';
                //jobTriggered = 'WRDSB.Quartermaster.ATS.AssetClasses.Reconcile';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetClass.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ViewATSAssetClass.ExtractAssetClasses';
                queueMessage = {
                    jobType: jobTriggered,
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetClass.ExtractAssetClasses':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ATSAssetClass.Reconcile';
                queueMessage = {
                    jobType: jobTriggered,
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetClassType.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ViewATSAssetClassType.ExtractAssetClassTypes';
                queueMessage = {
                    jobType: jobTriggered,
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetClassType.ExtractAssetClassTypes':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ATSAssetClassType.Reconcile';
                queueMessage = {
                    jobType: jobTriggered,
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetType.Process':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ViewATSAssetType.ExtractAssetTypes';
                queueMessage = {
                    jobType: jobTriggered,
                };
                context.bindings.quartermasterJobEnqueue = queueMessage;
                break;

            case 'Quartermaster.ViewATSAssetType.ExtractAssetTypes':
                queueTriggered = 'quartermaster:job-enqueue';
                jobTriggered = 'Quartermaster.ATSAssetType.Reconcile';
                queueMessage = {
                    jobType: jobTriggered,
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

    //if (sendNotification) {
        //notification = {
            //subject: 'Poison Message Notification',
            //to: process.env['SENDGRID_TO'],
            //from: {
                //email: 'errors@panama.wrdsb.io',
                //name: 'Panama Errors'
            //},
            //html: html
        //};
        //sgMail.send(notification, (error, result) => {
            //if (error) {
                //logPayload = {
                    //status: "500",
                    //message: 'Failed to send email notification.',
                    //queueMessage: '',
                    //queueTriggered: '',
                    //result: '',
                    //error: error,
                //};
            //} else {
                //logPayload = {
                    //status: "200",
                    //message: 'Sent email notification',
                    //queueMessage: '',
                    //queueTriggered: '',
                    //result: result,
                    //error: error
                //};
            //}
        //});
    //}

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobRelay;
