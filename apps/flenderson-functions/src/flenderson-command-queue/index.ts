import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonCommandFunctionRequestBody, FlendersonJobType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from '@cosmos/types';
import { ViewIAMWPProcessFunctionRequest, ViewIPPSGroupsProcessFunctionRequest, ViewIPPSJobsProcessFunctionRequest, ViewIPPSLocationsProcessFunctionRequest, ViewIPPSPalProcessFunctionRequest, ViewIPPSPeopleProcessFunctionRequest, ViewIPPSPositionsProcessFunctionRequest, ViewStaffDirProcessFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryReconcileFunctionRequest, IPPSEmployeeGroupReconcileFunctionRequest, IPPSJobReconcileFunctionRequest, IPPSLocationReconcileFunctionRequest, IPPSPalReconcileFunctionRequest, IPPSPersonReconcileFunctionRequest, IPPSPositionReconcileFunctionRequest } from '@cosmos/types';
import { IPPSDirectoryStoreFunctionRequest, IPPSEmployeeGroupStoreFunctionRequest, IPPSJobStoreFunctionRequest, IPPSLocationStoreFunctionRequest, IPPSPalStoreFunctionRequest, IPPSPersonStoreFunctionRequest, IPPSPositionStoreFunctionRequest, FlendersonPersonStoreFunctionRequest } from '@cosmos/types';

const flendersonCommandQueue: AzureFunction = async function (context: Context, triggerMessage: FlendersonCommandFunctionRequestBody): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FlendersonCommandFunctionRequestBody;

    const jobType = triggerObject.jobType as FlendersonJobType;
    const operation = triggerObject.operation as FlendersonCommandOperation;
    const payload = triggerObject.payload as FlendersonCommandFunctionRequestPayload;

    switch (jobType) {
        case 'WRDSB.Flenderson.View.IAMWP.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIAMWPProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSGroups.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSGroupsProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSJobs.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSJobsProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSLocations.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSLocationsProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSPal.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSPalProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSPeople.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSPeopleProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.IPPSPositions.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewIPPSPositionsProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.View.StaffDir.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as ViewStaffDirProcessFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSDirectoryReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSEmployeeGroupReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSJob.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSJobReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSLocationReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPal.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSPalReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                payload: {}
            } as IPPSPersonReconcileFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
            context.bindings.jobEnqueue = {
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
            context.bindings.jobEnqueue = {
                jobType: jobType,
            };
            break;

        case 'WRDSB.Flenderson.IPPSDirectory.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSDirectoryStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSEmployeeGroupStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSJob.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSJobStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSLocation.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSLocationStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPal.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSPalStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPerson.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSPersonStoreFunctionRequest;
            break;

        case 'WRDSB.Flenderson.IPPSPosition.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as IPPSPositionStoreFunctionRequest;
            break;
                            
        case 'WRDSB.Flenderson.FlendersonPerson.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            } as FlendersonPersonStoreFunctionRequest;
            break;

        default:
            break;
    }

    const response = {
        header: {
            status: 202,
            message: `Accepted. Enqueued jobType ${jobType}.`,
            chatter: `Wilco. Create and process ${jobType} job.`,
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 202,
        jobType: jobType,
        operation: operation,
        payload: payload
    };

    //context.res = {
        //status: response.header.status,
        //body: response
    //}

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default flendersonCommandQueue;
