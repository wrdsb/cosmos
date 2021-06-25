import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonCommand, FlendersonJobEnqueueFunctionRequest, WRDSBEvent, WRDSBEventType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from "@cosmos/types";

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
            case 'Flenderson.IPPSDirectory.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsDirectory: data.ippsDirectory
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSDirectory.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsDirectory: data.ippsDirectory
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSDirectory.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsDirectory: data.ippsDirectory
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSEmployeeGroup.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroup: data.ippsEmployeeGroup
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSEmployeeGroup.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroup: data.ippsEmployeeGroup
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSEmployeeGroup.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsEmployeeGroup: data.ippsEmployeeGroup
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSJob.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJob: data.ippsJob
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSJob.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJob: data.ippsJob
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSJob.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsJob: data.ippsJob
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSLocation.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocation: data.ippsLocation
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSLocation.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocation: data.ippsLocation
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSLocation.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsLocation: data.ippsLocation
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSPal.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsPal: data.ippsPal
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSPal.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsPal: data.ippsPal
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.IPPSPal.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.MaterializeBatch',
                        operation: 'materialize',
                        payload: {
                            ippsPal: data.ippsPal
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

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

            case 'Flenderson.IPPSPosition.Create':
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

            case 'Flenderson.IPPSPosition.Update':
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

            case 'Flenderson.IPPSPosition.Delete':
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

            case 'Flenderson.FlendersonPerson.Create':
                break;

            case 'Flenderson.FlendersonPerson.Update':
                break;

            case 'Flenderson.FlendersonPerson.Delete':
                break;

            case 'Flenderson.FlendersonPosition.Create':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            //ippsPerson: data.ippsPerson
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.FlendersonPosition.Update':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            //ippsPerson: data.ippsPerson
                        }
                    } as FlendersonCommand
                } as FlendersonJobEnqueueFunctionRequest);
                break;

            case 'Flenderson.FlendersonPosition.Delete':
                jobEnqueueMessages.push({
                    command: {
                        jobType: 'WRDSB.Flenderson.FlendersonPerson.Materialize',
                        operation: 'materialize',
                        payload: {
                            //ippsPerson: data.ippsPerson
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

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(JSON.stringify(functionInvocation));
    context.done(null, functionInvocation);
};

export default eventCascade;