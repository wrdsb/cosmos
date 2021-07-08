import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, FlendersonCommand, FlendersonJobEnqueueFunctionRequest } from "@cosmos/types";

const jobCascade: AzureFunction = async function (context: Context, triggerMessage: FunctionInvocation): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Cascade',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FunctionInvocation;
    const jobType = triggerObject.jobType as FlendersonJobType;

    const jobEnqueueMessages: FlendersonJobEnqueueFunctionRequest[] = [];

    let missingJobType = false;
    let jobTypeError = false;

    let logPayload = {
        status: '',
        message: '',
        jobEnqueueMessages: [],
        queueTriggered: '',
        error: '',
        result: ''
    };

    if (jobType) {
        switch (jobType) {
            case 'WRDSB.Flenderson.View.All.Process':
                // This job is used to enqueue other jobs directly
                break;

            case 'WRDSB.Flenderson.View.IAMWP.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSJob.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSLocation.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSPerson.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.View.IPPSGroups.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.View.IPPSJobs.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSJob.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.View.IPPSLocations.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSLocation.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.View.IPPSPal.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSPal.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;
    
            case 'WRDSB.Flenderson.View.IPPSPeople.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSPerson.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.View.IPPSPositions.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSPosition.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;
                                                    
            case 'WRDSB.Flenderson.View.StaffDir.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSDirectory.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
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
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        operation: 'invoke',
                        payload: {
                            'indexName': 'flenderson-groups'
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSJob.ChangeTrigger':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        operation: 'invoke',
                        payload: {
                            'indexName': 'flenderson-jobs'
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSLocation.ChangeTrigger':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        operation: 'invoke',
                        payload: {
                            'indexName': 'flenderson-locations'
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
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
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.SearchIndexer.Invoke',
                        operation: 'invoke',
                        payload: {
                            'indexName': 'flenderson-people'
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
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
                jobTypeError = true;
                break;
        }
    }
    else {
        missingJobType = true;
    }

    if (jobEnqueueMessages.length > 0) {
        context.bindings.flendersonJobEnqueue = jobEnqueueMessages;
    
        logPayload = {
            status: '200',
            message: `Sent ${jobEnqueueMessages.length} messages to job-enqueue`,
            jobEnqueueMessages: jobEnqueueMessages,
            queueTriggered: 'job-enqueue',
            result: '',
            error: ''
        };
    } else if (jobTypeError) {
        logPayload = {
            status: '400',
            message: `jobType Error: unrecognized jobType ${jobType}`,
            jobEnqueueMessages: jobEnqueueMessages,
            queueTriggered: 'job-enqueue',
            result: '',
            error: `jobType Error: unrecognized jobType ${jobType}`
        };
    } else if (missingJobType) {
        logPayload = {
            status: '400',
            message: `jobType Error: missing jobType`,
            jobEnqueueMessages: jobEnqueueMessages,
            queueTriggered: 'job-enqueue',
            result: '',
            error: `jobType Error: missing jobType`
        };
    } else {
        logPayload = {
            status: "204",
            message: `Nothing to do.`,
            jobEnqueueMessages: jobEnqueueMessages,
            queueTriggered: 'job-enqueue',
            result: '',
            error: ''
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobCascade;
