import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, FlendersonEvent, FlendersonEventType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";

const eventCascade: AzureFunction = async function (context: Context, triggerMessage: FlendersonEvent): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Event',
        functionDataOperation: 'Cascade',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as FlendersonEvent;
    const eventType = triggerObject.eventType as FlendersonEventType;

    const jobEnqueueMessages: FlendersonJobEnqueueFunctionRequest[] = [];

    let logPayload = {
        status: '',
        message: '',
        queueMessages: [],
        queueTriggered: '',
        error: '',
        result: ''
    };

    if (eventType) {
        switch (eventType) {
            case 'WRDSB.Flenderson.View.IAMWP.Process':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile',
                        operation: 'reconcile',
                        payload: {}
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
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
            message: `Sent ${queueMessages} to ${queueTriggered}`,
            queueMessages: queueMessages,
            queueTriggered: queueTriggered,
            result: '',
            error: ''
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(JSON.stringify(functionInvocation));
    context.done(null, functionInvocation);
};

export default eventCascade;
