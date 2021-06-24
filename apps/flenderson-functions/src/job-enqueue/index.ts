import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";
import { ViewIAMWPProcessFunctionRequest, ViewIPPSGroupsProcessFunctionRequest, ViewIPPSJobsProcessFunctionRequest, ViewIPPSLocationsProcessFunctionRequest, ViewIPPSPalProcessFunctionRequest, ViewIPPSPeopleProcessFunctionRequest, ViewIPPSPositionsProcessFunctionRequest, ViewStaffDirProcessFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryReconcileFunctionRequest, IPPSEmployeeGroupReconcileFunctionRequest, IPPSJobReconcileFunctionRequest, IPPSLocationReconcileFunctionRequest, IPPSPalReconcileFunctionRequest, IPPSPersonReconcileFunctionRequest, IPPSPositionReconcileFunctionRequest } from '@cosmos/types';
import { FlendersonPositionMaterializeFunctionRequest, FlendersonPersonMaterializeFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryStoreFunctionRequest, IPPSEmployeeGroupStoreFunctionRequest, IPPSJobStoreFunctionRequest, IPPSLocationStoreFunctionRequest, IPPSPalStoreFunctionRequest, IPPSPersonStoreFunctionRequest, IPPSPositionStoreFunctionRequest, FlendersonPersonStoreFunctionRequest, FlendersonPositionStoreFunctionRequest } from '@cosmos/types';

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: FlendersonJobEnqueueFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FlendersonJobEnqueueFunctionRequest
    const command = triggerObject.command as FlendersonCommand;

    const jobType = command.jobType as FlendersonJobType;
    const operation = command.operation as FlendersonCommandOperation;
    const payload = command.payload as FlendersonCommandFunctionRequestPayload;
    //const incomingBlob = command.incomingBlob;
    //const offset = command.offset;

    let queueTriggered = '';
    let queueMessage = {};
    let sentQueueMessage = false;

    //const html = '';
    //const sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        command: {},
        queueMessage: {},
        queueTriggered: '',
        error: ''
    };
    //const notification = {};

    if (jobType) {
        switch (jobType) {
            case 'WRDSB.Flenderson.View.IAMWP.Process':
                queueTriggered = "view-iamwp-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIAMWPProcessFunctionRequest;
                context.bindings.viewIAMWPProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                queueTriggered = "view-ipps-groups-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSGroupsProcessFunctionRequest;
                context.bindings.viewIPPSGroupsProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                queueTriggered = "view-ipps-jobs-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSJobsProcessFunctionRequest;
                context.bindings.viewIPPSJobsProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                queueTriggered = "view-ipps-locations-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSLocationsProcessFunctionRequest;
                context.bindings.viewIPPSLocationsProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                queueTriggered = "view-ipps-pal-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPalProcessFunctionRequest;
                context.bindings.viewIPPSPalProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                queueTriggered = "view-ipps-people-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPeopleProcessFunctionRequest;
                context.bindings.viewIPPSPeopleProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                queueTriggered = "view-ipps-positions-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPositionsProcessFunctionRequest;
                context.bindings.viewIPPSPositionsProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.View.StaffDir.Process':
                queueTriggered = "view-staffdir-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewStaffDirProcessFunctionRequest;
                context.bindings.viewStaffDirProcess = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
                queueTriggered = "ipps-directory-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSDirectoryReconcileFunctionRequest;
                context.bindings.ippsDirectoryReconcile = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                queueTriggered = "ipps-employee-group-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSEmployeeGroupReconcileFunctionRequest;
                context.bindings.ippsEmployeeGroupReconcile = queueMessage;
                break;
                
            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                queueTriggered = "ipps-job-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSJobReconcileFunctionRequest;
                context.bindings.ippsJobReconcile = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                queueTriggered = "ipps-location-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSLocationReconcileFunctionRequest;
                context.bindings.ippsLocationReconcile = queueMessage;
                break;
            
            case 'WRDSB.Flenderson.IPPSPal.Reconcile':
                queueTriggered = "ipps-pal-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPalReconcileFunctionRequest;
                context.bindings.ippsPalReconcile = queueMessage;
                break;
            
            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                queueTriggered = "ipps-person-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPersonReconcileFunctionRequest;
                context.bindings.ippsPersonReconcile = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
                queueTriggered = "ipps-position-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPositionReconcileFunctionRequest;
                context.bindings.ippsPositionReconcile = queueMessage;
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Materialize':
                queueTriggered = "flenderson-position-materialize";
                queueMessage = {
                    jobType: jobType,
                    payload: payload
                } as FlendersonPositionMaterializeFunctionRequest;
                context.bindings.flendersonPositionMaterialize = queueMessage;
                break;
    
            case 'WRDSB.Flenderson.FlendersonPerson.Materialize':
                queueTriggered = "flenderson-person-materialize";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        email: '',
                        employeeID: ''
                    }
                } as FlendersonPersonMaterializeFunctionRequest;
                context.bindings.flendersonPersonMaterialize = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Store':
                queueTriggered = "ipps-directory-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSDirectoryStoreFunctionRequest;
                context.bindings.ippsDirectoryStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                queueTriggered = "ipps-employee-group-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSEmployeeGroupStoreFunctionRequest;
                context.bindings.ippsEmployeeGroupStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                queueTriggered = "ipps-job-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSJobStoreFunctionRequest;
                context.bindings.ippsJobStore = queueMessage;
                break;
                
            case 'WRDSB.Flenderson.IPPSLocation.Store':
                queueTriggered = "ipps-location-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSLocationStoreFunctionRequest;
                context.bindings.ippsLocationStore = queueMessage;
                break;
                
            case 'WRDSB.Flenderson.IPPSPal.Store':
                queueTriggered = "ipps-pal-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPalStoreFunctionRequest;
                context.bindings.ippsPalStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Store':
                queueTriggered = "ipps-person-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPersonStoreFunctionRequest;
                context.bindings.ippsPersonStore = queueMessage;
                break;
    
            case 'WRDSB.Flenderson.IPPSPosition.Store':
                queueTriggered = "ipps-position-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPositionStoreFunctionRequest;
                context.bindings.ippsPositionStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Store':
                queueTriggered = "flenderson-person-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as FlendersonPersonStoreFunctionRequest;
                context.bindings.flendersonPersonStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Store':
                queueTriggered = "flenderson-position-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as FlendersonPositionStoreFunctionRequest;
                context.bindings.flendersonPositionStore = queueMessage;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPal.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPosition.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPal.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.IPPSPosition.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.Flenderson.SearchIndexer.Invoke':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            default:
                // TODO: add some error handling
                break;
        }
    }
    else {
        // TODO: add some error handling
    }

    if (sentQueueMessage) {
        logPayload = {
            status: "200",
            message: `Sent request to ${queueTriggered}`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: ''
        };
    } else {
        logPayload = {
            status: '400',
            message: `Did not send request to ${queueTriggered}`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: 'Bad Request. Unknown error.'
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobEnqueue;
