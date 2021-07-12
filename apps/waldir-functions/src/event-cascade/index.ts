import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, WALDIRCommand, WALDIRJobEnqueueFunctionRequest, WRDSBEvent, WRDSBEventType, WALDIRCommandOperation, WALDIRCommandFunctionRequestPayload } from "@cosmos/types";
import { WALDIRPersonMaterializeBatchFunctionRequestPayload, WALDIRPositionMaterializeBatchFunctionRequestPayload } from "@cosmos/types";

const eventCascade: AzureFunction = async function (context: Context, triggerMessage: WRDSBEvent): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Event',
        functionDataOperation: 'Cascade',
        eventLabel: ''
    } as FunctionInvocation;

    const incomingEvent = triggerMessage as WRDSBEvent;
    const eventType = incomingEvent.eventType as WRDSBEventType;
    const data = incomingEvent.data;

    const jobEnqueueMessages: WALDIRJobEnqueueFunctionRequest[] = [];

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
            case 'WRDSB.WALDIR.WPUser.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.WALDIR.WALDIRUser.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as WALDIRPersonMaterializeBatchFunctionRequestPayload
                    } as WALDIRCommand
                } as WALDIRJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.WALDIR.WPUser.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.WALDIR.WALDIRUser.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as WALDIRPersonMaterializeBatchFunctionRequestPayload
                    } as WALDIRCommand
                } as WALDIRJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.WALDIR.WPUser.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.WALDIR.WALDIRUser.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as WALDIRPersonMaterializeBatchFunctionRequestPayload
                    } as WALDIRCommand
                } as WALDIRJobEnqueueFunctionRequest);
                break;

            default:
                // TODO: add some error handling
                break;
        }
    }
    else {
        // TODO: add some error handling
    }

    context.bindings.waldirJobEnqueue = jobEnqueueMessages;

    logPayload.queueMessages = jobEnqueueMessages;
    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default eventCascade;
