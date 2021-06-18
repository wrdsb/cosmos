import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";
import { ViewIAMWPProcessFunctionRequest, ViewIPPSGroupsProcessFunctionRequest, ViewIPPSJobsProcessFunctionRequest, ViewIPPSLocationsProcessFunctionRequest, ViewIPPSPalProcessFunctionRequest, ViewIPPSPeopleProcessFunctionRequest, ViewIPPSPositionsProcessFunctionRequest, ViewStaffDirProcessFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryReconcileFunctionRequest, IPPSEmployeeGroupReconcileFunctionRequest, IPPSJobReconcileFunctionRequest, IPPSLocationReconcileFunctionRequest, IPPSPalReconcileFunctionRequest, IPPSPersonReconcileFunctionRequest, IPPSPositionReconcileFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryStoreFunctionRequest, IPPSEmployeeGroupStoreFunctionRequest, IPPSJobStoreFunctionRequest, IPPSLocationStoreFunctionRequest, IPPSPalStoreFunctionRequest, IPPSPersonStoreFunctionRequest, IPPSPositionStoreFunctionRequest, FlendersonPersonStoreFunctionRequest } from '@cosmos/types';

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

    const jobType = triggerMessage.jobType as FlendersonJobType;
    const operation = triggerMessage.operation as FlendersonCommandOperation;
    const payload = triggerMessage.payload as FlendersonCommandFunctionRequestPayload;
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
                    payload: {}
                } as ViewIAMWPProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                context.bindings.viewIPPSGroupsProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSGroupsProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                context.bindings.viewIPPSJobsProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSJobsProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                context.bindings.viewIPPSLocationsProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSLocationsProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                context.bindings.viewIPPSPalProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPalProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                context.bindings.viewIPPSPeopleProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPeopleProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                context.bindings.viewIPPSPositionsProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPositionsProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.View.StaffDir.Process':
                context.bindings.viewStaffDirProcess = {
                    jobType: jobType,
                    payload: {}
                } as ViewStaffDirProcessFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
                context.bindings.ippsDirectoryReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSDirectoryReconcileFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                context.bindings.ippsEmployeeGroupReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSEmployeeGroupReconcileFunctionRequest;
                break;
                
            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                context.bindings.ippsJobReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSJobReconcileFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                context.bindings.ippsLocationReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSLocationReconcileFunctionRequest;
                break;
            
            case 'WRDSB.Flenderson.IPPSPal.Reconcile':
                context.bindings.ippsPalReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPalReconcileFunctionRequest;
                break;
            
            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                context.bindings.ippsPersonReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPersonReconcileFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
                context.bindings.ippsPositionReconcile = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPositionReconcileFunctionRequest;
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Materialize':
                context.bindings.jobEnqueue = {
                    jobType: jobType,
                };
                break;
    
            case 'WRDSB.Flenderson.FlendersonPerson.Materialize':
                context.bindings.flendersonPersonMaterialize = {
                    jobType: jobType
                };
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Store':
                context.bindings.ippsDirectoryStore = {
                    operation: operation,
                    payload: payload
                } as IPPSDirectoryStoreFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                context.bindings.ippsEmployeeGroupStore = {
                    operation: operation,
                    payload: payload
                } as IPPSEmployeeGroupStoreFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                context.bindings.ippsJobStore = {
                    operation: operation,
                    payload: payload
                } as IPPSJobStoreFunctionRequest;
                break;
                
            case 'WRDSB.Flenderson.IPPSLocation.Store':
                context.bindings.ippsLocationStore = {
                    operation: operation,
                    payload: payload
                } as IPPSLocationStoreFunctionRequest;
                break;
                
            case 'WRDSB.Flenderson.IPPSPal.Store':
                context.bindings.ippsPalStore = {
                    operation: operation,
                    payload: payload
                } as IPPSPalStoreFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Store':
                context.bindings.ippsPersonStore = {
                    operation: operation,
                    payload: payload
                } as IPPSPersonStoreFunctionRequest;
                break;
    
            case 'WRDSB.Flenderson.IPPSPosition.Store':
                context.bindings.ippsPositionStore = {
                    operation: operation,
                    payload: payload
                } as IPPSPositionStoreFunctionRequest;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Store':
                context.bindings.flendersonPersonStore = {
                    operation: operation,
                    payload: payload
                } as FlendersonPersonStoreFunctionRequest;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSPal.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSPerson.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

            case 'WRDSB.Flenderson.IPPSPosition.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                break;

                // only invoked by Cosmos DB change feed trigger
            case 'WRDSB.Flenderson.FlendersonPerson.ChangeTrigger':
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
