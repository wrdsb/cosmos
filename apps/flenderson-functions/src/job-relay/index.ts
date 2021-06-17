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

    const jobType = triggerMessage.jobType as FlendersonJobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    let queueTriggered = '';
    let queueMessages = [];
    let sentQueueMessage = false;

    const html = '';
    const sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        queueMessages: [],
        queueTriggered: '',
        error: '',
        result: ''
    };
    const notification = {};

    if (jobType) {
        switch (jobType) {
            case 'WRDSB.Flenderson.View.IAMWP.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile'
                    },
                    {
                        jobType: 'WRDSB.Flenderson.IPPSJob.Reconcile'
                    },
                    {
                        jobType: 'WRDSB.Flenderson.IPPSLocation.Reconcile'
                    },
                    {
                        jobType: 'WRDSB.Flenderson.IPPSPerson.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSJob.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSLocation.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSPal.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;
    
            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSPerson.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSPosition.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;
                                                    
            case 'WRDSB.Flenderson.View.StaffDir.Process':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.IPPSDirectory.Reconcile'
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;
            
            case 'WRDSB.Flenderson.IPPSPal.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Materialize':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSPal.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Store':
                // Store jobs send changes to -change-parse functions directly
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.ChangeTrigger':
                // No search index for this intermediate data type
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeTrigger':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        payload: {
                            'indexName': 'flenderson-groups'
                        }
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeTrigger':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        payload: {
                            'indexName': 'flenderson-jobs'
                        }
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeTrigger':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        payload: {
                            'indexName': 'flenderson-locations'
                        }
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSPal.ChangeTrigger':
                // No search index for this intermediate data type
                break;

            case 'WRDSB.Flenderson.IPPSPerson.ChangeTrigger':
                // No search index for this intermediate data type
                break;

            case 'WRDSB.Flenderson.IPPSPosition.ChangeTrigger':
                // No search index for this intermediate data type
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.ChangeTrigger':
                queueTriggered = 'Flenderson:job-enqueue';
                queueMessages = [
                    {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        payload: {
                            'indexName': 'flenderson-people'
                        }
                    }
                ];
                context.bindings.flendersonJobEnqueue = queueMessages;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSPal.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSPerson.ChangeParse':
                break;

            case 'WRDSB.Flenderson.IPPSPosition.ChangeParse':
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.ChangeParse':
                break;

            case 'WRDSB.Flenderson.SearchIndexer.Invoke':
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
            message: `Sent ${queueMessages} to ${queueTriggered}`,
            queueMessages: queueMessages,
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
