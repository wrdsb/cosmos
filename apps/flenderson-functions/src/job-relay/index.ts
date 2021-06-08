import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType } from "@cosmos/types";

const jobRelay: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Relay',
        eventLabel: ''
    } as FunctionInvocation;

    //const sgMail = require('@sendgrid/mail');
    //sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType as FlendersonJobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    let queueTriggered = '';
    let jobTriggered = '' as FlendersonJobType;
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
            case 'WRDSB.Flenderson.View.IAMWP.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = [
                    {
                        jobType: 'Flenderson.IPPSEmployeeGroup.Reconcile'
                    },
                    {
                        jobType: 'Flenderson.IPPSJob.Reconcile'
                    },
                    {
                        jobType: 'Flenderson.IPPSLocation.Reconcile'
                    },
                    {
                        jobType: 'Flenderson.IPPSPerson.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSEmployeeGroup.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSJob.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSLocation.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSPerson.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSPosition.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;
                                                    
            case 'WRDSB.Flenderson.View.StaffDir.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessage = {
                    jobType: 'Flenderson.IPPSPerson.Reconcile'
                };
                context.bindings.flendersonJobEnqueue = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSEmployeeGroup.Reconcile';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSJob.Reconcile';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSLocation.Reconcile';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSPerson.Reconcile';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSEmployeeGroup.Store';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSJob.Store';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Store':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSLocation.Store';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Store':
                //queueTriggered = 'Flenderson:job-enqueue';
                //jobTriggered = 'Flenderson.IPPSPerson.Store';
                //queueMessage = {
                    //jobType: jobTriggered,
                //};
                //context.bindings.flendersonJobEnqueue = queueMessage;
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
    context.log(JSON.stringify(functionInvocation));
    context.done(null, functionInvocation);
};

export default jobRelay;
