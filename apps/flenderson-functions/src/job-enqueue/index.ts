import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, AssetAssignmentCreateFunctionRequest, AssetAssignmentStoreFunctionRequest, DeviceLoanSubmissionStoreFunctionRequest } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    //const sgMail = require('@sendgrid/mail');
    //sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const jobType = triggerMessage.jobType as FlendersonJobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    const queueTriggered = '';
    const queueMessage = {};
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
            case 'WRDSB.Flenderson.View.IAMWP.Process':
                context.bindings.viewIAMWPProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                context.bindings.viewIPPSGroupsProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                context.bindings.viewIPPSJobsProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                context.bindings.viewIPPSLocationsProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                context.bindings.viewIPPSPalProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                context.bindings.viewIPPSPeopleProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                context.bindings.viewIPPSPositionsProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.View.StaffDir.Process':
                context.bindings.viewStaffDirProcess = {
                    jobType: jobType,
                    incomingBlob: incomingBlob
                };
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                context.bindings.IPPSGroupsReconcile = {
                    jobType: jobType
                };
                break;
                
            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                context.bindings.IPPSJobsReconcile = {
                    jobType: jobType
                };
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                context.bindings.IPPSLocationsReconcile = {
                    jobType: jobType
                };
                break;
            
            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                context.bindings.IPPSPeopleReconcile = {
                    jobType: jobType
                };
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                context.bindings.IPPSEmployeeGroupStore = {
                    operation: operation,
                    payload: payload
                };
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                context.bindings.IPPSJobStore = {
                    operation: operation,
                    payload: payload
                };
                break;
                
            case 'WRDSB.Flenderson.IPPSLocation.Store':
                context.bindings.IPPSLocationStore = {
                    operation: operation,
                    payload: payload
                };
                break;
                
            case 'WRDSB.Flenderson.IPPSPerson.Store':
                context.bindings.IPPSPersonStore = {
                    operation: operation,
                    payload: payload
                };
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
                // email: 'errors@Flenderson.wrdsb.io',
                // name: 'Flenderson Errors'
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
