import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, WRDSBEvent, WRDSBEventType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPersonMaterializeBatchFunctionRequestPayload, FlendersonPositionMaterializeBatchFunctionRequestPayload } from "@cosmos/types";

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
            case 'WRDSB.Flenderson.IPPSDirectory.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSDirectory.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            email: data.ippsDirectory.email
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroupCode: data.ippsEmployeeGroup.employeeGroupCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroupCode: data.ippsEmployeeGroup.employeeGroupCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSEmployeeGroup.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroupCode: data.ippsEmployeeGroup.employeeGroupCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSJob.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJobCode: data.ippsJob.jobCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSJob.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJobCode: data.ippsJob.jobCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSJob.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJobCode: data.ippsJob.jobCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocationCode: data.ippsLocation.locationCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocationCode: data.ippsLocation.locationCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSLocation.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocationCode: data.ippsLocation.locationCode
                        } as FlendersonPositionMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPal.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.ippsPal.employeeID
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPal.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.ippsPal.employeeID
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPal.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.ippsPal.employeeID
                        } as FlendersonPersonMaterializeBatchFunctionRequestPayload
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPerson.Create':
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

            case 'WRDSB.Flenderson.IPPSPerson.Update':
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

            case 'WRDSB.Flenderson.IPPSPerson.Delete':
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

            case 'WRDSB.Flenderson.IPPSPosition.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPosition: data.ippsPostiion
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPosition: data.ippsPostiion
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.IPPSPosition.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPosition.Materialize',
                        operation: 'materialize',
                        payload: {
                            ippsPosition: data.ippsPostiion
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Create':
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Update':
                break;

            case 'WRDSB.Flenderson.FlendersonPerson.Delete':
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.flendersonPostiion.employeeID
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.flendersonPostiion.employeeID
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'WRDSB.Flenderson.FlendersonPosition.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            employeeID: data.flendersonPostiion.employeeID
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

    context.bindings.flendersonJobEnqueue = jobEnqueueMessages;

    logPayload.queueMessages = jobEnqueueMessages;
    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default eventCascade;
