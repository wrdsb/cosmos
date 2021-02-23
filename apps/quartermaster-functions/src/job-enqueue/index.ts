import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, DeviceLoanSubmissionStoreFunctionRequest } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    //const sgMail = require('@sendgrid/mail');
    //sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    let queueTriggered = '';
    let queueMessage = {};
    let sentQueueMessage = false;

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
            case "Quartermaster.DeviceLoanSubmission.Store":
                context.bindings.deviceLoanSubmissionStore = {
                    operation: operation,
                    payload: payload
                } as DeviceLoanSubmissionStoreFunctionRequest;
                break;

            case 'WRDSB.Quartermaster.View.Asset.Checksum.Process':
                queueTriggered = 'view-ats-asset-checksum-process';
                queueMessage = {
                    jobType: "WRDSB.Quartermaster.View.Asset.Checksum.Process",
                    incomingBlob: incomingBlob
                };
                context.bindings.viewATSAssetChecksumProcessTrigger = queueMessage;
                sentQueueMessage = true;
                break;
    
            case "WRDSB.Quartermaster.View.Asset.Process":
                queueTriggered = 'view-ats-asset-process';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.Asset.Process',
                    incomingBlob: incomingBlob,
                    offset: offset
                };
                context.bindings.viewATSAssetProcessTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetClass.Process":
                queueTriggered = 'view-ats-asset-class-process';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetClass.Process',
                    incomingBlob: incomingBlob
                };
                context.bindings.viewATSAssetClassProcessTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetType.Process":
                queueTriggered = 'view-ats-asset-type-process';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetType.Process',
                    incomingBlob: incomingBlob
                };
                context.bindings.viewATSAssetTypeProcessTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetClassType.Process":
                queueTriggered = 'view-ats-asset-class-type-process';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetClassType.Process',
                    incomingBlob: incomingBlob
                };
                context.bindings.viewATSAssetClassTypeProcessTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.Asset.Extract.Assets":
                queueTriggered = 'view-ats-asset-extract-assets';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.Asset.Extract.Assets',
                    incomingBlob: incomingBlob,
                    offset: offset
                };
                context.bindings.viewATSAssetExtractAssetsTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetClass.Extract.AssetClasses":
                queueTriggered = 'view-ats-asset-class-extract-asset-classes';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetClass.Extract.AssetClasses'
                };
                context.bindings.viewATSAssetClassExtractAssetClassesTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetType.Extract.AssetTypes":
                queueTriggered = 'view-ats-asset-type-extract-asset-types';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetType.Extract.AssetTypes'
                };
                context.bindings.viewATSAssetTypeExtractAssetTypesTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.View.AssetClassType.Extract.AssetClassTypes":
                queueTriggered = 'view-ats-asset-class-type-extract-asset-class-types';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.View.AssetClassType.Extract.AssetClassTypes'
                };
                context.bindings.viewATSAssetClassTypeExtractAssetClassTypesTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.ATS.Assets.Reconcile":
                queueTriggered = 'ats-assets-reconcile';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.ATS.Assets.Reconcile',
                    incomingBlob: incomingBlob
                };
                context.bindings.atsAssetsReconcileTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.ATS.AssetClasses.Reconcile":
                queueTriggered = 'ats-asset-classes-reconcile';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.ATS.AssetClasses.Reconcile'
                };
                context.bindings.atsAssetClassesReconcileTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.ATS.AssetTypes.Reconcile":
                queueTriggered = 'ats-asset-types-reconcile';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.ATS.AssetTypes.Reconcile'
                };
                context.bindings.atsAssetTypesReconcileTrigger = queueMessage;
                sentQueueMessage = true;
                break;

            case "WRDSB.Quartermaster.ATS.AssetClassTypes.Reconcile":
                queueTriggered = 'ats-asset-class-types-reconcile';
                queueMessage = {
                    jobType: 'WRDSB.Quartermaster.ATS.AssetClassTypes.Reconcile'
                };
                context.bindings.atsAssetClassTypesReconcileTrigger = queueMessage;
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

    // if (sendNotification) {
        // notification = {
            // subject: 'Poison Message Notification',
            // to: process.env['SENDGRID_TO'],
            // from: {
                // email: 'errors@quartermaster.wrdsb.io',
                // name: 'Quartermaster Errors'
            // },
            // html: html
        // };
        // sgMail.send(notification, (error, result) => {
            // if (error) {
                // logPayload = {
                    // status: "500",
                    // message: 'Failed to send email notification.',
                    // queueMessage: '',
                    // queueTriggered: '',
                    // result: '',
                    // error: error,
                // };
            // } else {
                // logPayload = {
                    // status: "200",
                    // message: 'Sent email notification',
                    // queueMessage: '',
                    // queueTriggered: '',
                    // result: result,
                    // error: error
                // };
            // }
        // });
    // }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobEnqueue;
