import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, WALDIRJobType, WALDIRCommand, WALDIRJobEnqueueFunctionRequest } from "@cosmos/types";

const jobCascade: AzureFunction = async function (context: Context, triggerMessage: FunctionInvocation): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Cascade',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FunctionInvocation;
    const jobType = triggerObject.jobType as WALDIRJobType;

    const jobEnqueueMessages: WALDIRJobEnqueueFunctionRequest[] = [];

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
            case 'WRDSB.WALDIR.WPUser.Reconcile':
                // Reconcile jobs send changes to -store functions directly
                break;

            case 'WRDSB.WALDIR.WALDIRUser.Materialize':
                // TODO:
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
        context.bindings.waldirJobEnqueue = jobEnqueueMessages;
    
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
