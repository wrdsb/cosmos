import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, WRDSBEvent, WRDSBEventType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";

const eventCascade: AzureFunction = async function (context: Context, triggerMessage: WRDSBEvent): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Event',
        functionDataOperation: 'Cascade',
        eventLabel: ''
    } as FunctionInvocation;

    const incomingEvent = triggerMessage as WRDSBEvent;
    const eventType = incomingEvent.eventType as WRDSBEventType;
    const data = incomingEvent.data;

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
            case 'Flenderson.IPPSPerson.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPerson: data.ippsPerson
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSPerson.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPerson: data.ippsPerson
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSPerson.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPerson: data.ippsPerson
                        }
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
