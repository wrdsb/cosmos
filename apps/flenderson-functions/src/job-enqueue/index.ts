import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";
import { ViewAllProcessFunctionRequest, ViewIAMWPProcessFunctionRequest, ViewIPPSGroupsProcessFunctionRequest, ViewIPPSJobsProcessFunctionRequest, ViewIPPSLocationsProcessFunctionRequest, ViewIPPSPalProcessFunctionRequest, ViewIPPSPeopleProcessFunctionRequest, ViewIPPSPositionsProcessFunctionRequest, ViewStaffDirProcessFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryReconcileFunctionRequest, IPPSEmployeeGroupReconcileFunctionRequest, IPPSJobReconcileFunctionRequest, IPPSLocationReconcileFunctionRequest, IPPSPalReconcileFunctionRequest, IPPSPersonReconcileFunctionRequest, IPPSPositionReconcileFunctionRequest } from '@cosmos/types';
import { FlendersonPositionMaterializeFunctionRequest, FlendersonPersonMaterializeFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryStoreFunctionRequest, IPPSEmployeeGroupStoreFunctionRequest, IPPSJobStoreFunctionRequest, IPPSLocationStoreFunctionRequest, IPPSPalStoreFunctionRequest, IPPSPersonStoreFunctionRequest, IPPSPositionStoreFunctionRequest, FlendersonPersonStoreFunctionRequest, FlendersonPositionStoreFunctionRequest } from '@cosmos/types';
import { FlendersonPersonMaterializeBatchFunctionRequest, FlendersonPersonMaterializeBatchFunctionRequestPayload, FlendersonPositionMaterializeBatchFunctionRequest, FlendersonPositionMaterializeBatchFunctionRequestPayload } from "@cosmos/types";

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

    let missingJobType = false;
    let jobTypeError = false;

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
            case 'WRDSB.Flenderson.View.All.Process':
                queueTriggered = "view-all-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewAllProcessFunctionRequest;
                context.bindings.viewAllProcess = queueMessage;
                sentQueueMessage = true;
                break;

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
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                queueTriggered = "view-ipps-jobs-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSJobsProcessFunctionRequest;
                context.bindings.viewIPPSJobsProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                queueTriggered = "view-ipps-locations-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSLocationsProcessFunctionRequest;
                context.bindings.viewIPPSLocationsProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                queueTriggered = "view-ipps-pal-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPalProcessFunctionRequest;
                context.bindings.viewIPPSPalProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                queueTriggered = "view-ipps-people-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPeopleProcessFunctionRequest;
                context.bindings.viewIPPSPeopleProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                queueTriggered = "view-ipps-positions-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewIPPSPositionsProcessFunctionRequest;
                context.bindings.viewIPPSPositionsProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.View.StaffDir.Process':
                queueTriggered = "view-staffdir-process";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as ViewStaffDirProcessFunctionRequest;
                context.bindings.viewStaffDirProcess = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
                queueTriggered = "ipps-directory-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSDirectoryReconcileFunctionRequest;
                context.bindings.ippsDirectoryReconcile = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
                queueTriggered = "ipps-employee-group-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSEmployeeGroupReconcileFunctionRequest;
                context.bindings.ippsEmployeeGroupReconcile = queueMessage;
                sentQueueMessage = true;
                break;
                
            case 'WRDSB.Flenderson.IPPSJob.Reconcile':
                queueTriggered = "ipps-job-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSJobReconcileFunctionRequest;
                context.bindings.ippsJobReconcile = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
                queueTriggered = "ipps-location-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSLocationReconcileFunctionRequest;
                context.bindings.ippsLocationReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            
            case 'WRDSB.Flenderson.IPPSPal.Reconcile':
                queueTriggered = "ipps-pal-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPalReconcileFunctionRequest;
                context.bindings.ippsPalReconcile = queueMessage;
                sentQueueMessage = true;
                break;
            
            case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
                queueTriggered = "ipps-person-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPersonReconcileFunctionRequest;
                context.bindings.ippsPersonReconcile = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
                queueTriggered = "ipps-position-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as IPPSPositionReconcileFunctionRequest;
                context.bindings.ippsPositionReconcile = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Materialize':
                queueTriggered = "flenderson-position-materialize";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        ippsPosition: payload.ippsPosition
                    }
                } as FlendersonPositionMaterializeFunctionRequest;
                context.bindings.flendersonPositionMaterialize = queueMessage;
                sentQueueMessage = true;
                break;
    
            case 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch':
                queueTriggered = "flenderson-position-materialize-batch";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        all: payload.all,
                        employeeID: payload.employeeID,
                        email: payload.email,
                        ippsEmployeeGroupCode: payload.ippsEmployeeGroupCode,
                        ippsJobCode: payload.ippsJobCode,
                        ippsLocationCode: payload.ippsLocationCode,
                        ippsPositionID: payload.ippsPositionID,
                    }
                } as FlendersonPositionMaterializeBatchFunctionRequest;
                context.bindings.flendersonPositionMaterializeBatch = queueMessage;
                sentQueueMessage = true;
                break;
    
            case 'WRDSB.Flenderson.FlendersonPerson.Materialize':
                queueTriggered = "flenderson-person-materialize";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        email: payload.email,
                        employeeID: payload.employeeID
                    }
                } as FlendersonPersonMaterializeFunctionRequest;
                context.bindings.flendersonPersonMaterialize = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch':
                queueTriggered = "flenderson-person-materialize-batch";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        all: payload.all,
                        employeeID: payload.employeeID,
                        email: payload.email,
                        ippsEmployeeGroupCode: payload.ippsEmployeeGroupCode,
                        ippsJobCode: payload.ippsJobCode,
                        ippsLocationCode: payload.ippsLocationCode,
                        ippsPositionID: payload.ippsPositionID,
                    }
                } as FlendersonPersonMaterializeBatchFunctionRequest;
                context.bindings.flendersonPersonMaterializeBatch = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Store':
                queueTriggered = "ipps-directory-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSDirectoryStoreFunctionRequest;
                context.bindings.ippsDirectoryStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
                queueTriggered = "ipps-employee-group-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSEmployeeGroupStoreFunctionRequest;
                context.bindings.ippsEmployeeGroupStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSJob.Store':
                queueTriggered = "ipps-job-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSJobStoreFunctionRequest;
                context.bindings.ippsJobStore = queueMessage;
                sentQueueMessage = true;
                break;
                
            case 'WRDSB.Flenderson.IPPSLocation.Store':
                queueTriggered = "ipps-location-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSLocationStoreFunctionRequest;
                context.bindings.ippsLocationStore = queueMessage;
                sentQueueMessage = true;
                break;
                
            case 'WRDSB.Flenderson.IPPSPal.Store':
                queueTriggered = "ipps-pal-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPalStoreFunctionRequest;
                context.bindings.ippsPalStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Store':
                queueTriggered = "ipps-person-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPersonStoreFunctionRequest;
                context.bindings.ippsPersonStore = queueMessage;
                sentQueueMessage = true;
                break;
    
            case 'WRDSB.Flenderson.IPPSPosition.Store':
                queueTriggered = "ipps-position-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as IPPSPositionStoreFunctionRequest;
                context.bindings.ippsPositionStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Store':
                queueTriggered = "flenderson-person-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as FlendersonPersonStoreFunctionRequest;
                context.bindings.flendersonPersonStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Store':
                queueTriggered = "flenderson-position-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as FlendersonPositionStoreFunctionRequest;
                context.bindings.flendersonPositionStore = queueMessage;
                sentQueueMessage = true;
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
                jobTypeError = true;
                break;
        }
    }
    else {
        missingJobType = true;
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
    } else if (jobTypeError) {
        logPayload = {
            status: '400',
            message: `jobType Error: unrecognized jobType ${jobType}`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: `jobType Error: unrecognized jobType ${jobType}`
        };
    } else if (missingJobType) {
        logPayload = {
            status: '400',
            message: `jobType Error: missing jobType`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: `jobType Error: missing jobType`
        };
    } else {
        logPayload = {
            status: "204",
            message: `Nothing to do.`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: ''
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobEnqueue;
