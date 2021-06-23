import { FlendersonCommand, FlendersonJobType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from '@cosmos/types';
import { IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPosition, IPPSPerson, FlendersonPerson, FlendersonPosition } from "@cosmos/types";

export function validateFlendersonCommand(jobType: FlendersonJobType, operation: FlendersonCommandOperation, payload: FlendersonCommandFunctionRequestPayload ) {
    let jobTypeValid = false;
    let operationValid = false;
    let payloadValid = false;
    let isValid = false;
    let job: FlendersonCommand;
    const jobEnqueueMessages: FlendersonCommand[] = [];

    switch (jobType) {
        case 'WRDSB.Flenderson.View.IAMWP.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSGroups.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSJobs.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSLocations.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSPal.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSPeople.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.IPPSPositions.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.View.StaffDir.Process':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'process',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSDirectory.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSEmployeeGroup.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSJob.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSLocation.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSPal.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSPerson.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.IPPSPosition.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            job = {
                jobType: jobType,
                operation: 'reconcile',
                payload: {}
            } as FlendersonCommand;
            jobEnqueueMessages.push(job);
            break;

        case 'WRDSB.Flenderson.FlendersonPerson.Materialize':
            jobTypeValid = true;

            if (operation === 'materialize') {
                operationValid = true;
            }

            if (isIPPSPerson(payload?.ippsPerson)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: 'materialize',
                    payload: payload
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.FlendersonPosition.Materialize':
            jobTypeValid = true;

            if (operation === 'materialize') {
                operationValid = true;
            }

            if (isIPPSPosition(payload?.ippsPosition)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: 'materialize',
                    payload: payload
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSDirectory.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSDirectory(payload?.ippsDirectory)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsDirectory
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSEmployeeGroup.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSEmployeeGroup(payload?.ippsEmployeeGroup)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsEmployeeGroup
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSJob.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSJob(payload?.ippsJob)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsJob
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSLocation.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSLocation(payload?.ippsLocation)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsLocation
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSPal.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSPal(payload?.ippsPal)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsPal
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSPerson.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSPerson(payload?.ippsPerson)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsPerson
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.IPPSPosition.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isIPPSPosition(payload?.ippsPosition)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.ippsPosition
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;
                            
        case 'WRDSB.Flenderson.FlendersonPerson.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isFlendersonPerson(payload?.flendersonPerson)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.flendersonPerson
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        case 'WRDSB.Flenderson.FlendersonPosition.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isFlendersonPosition(payload?.flendersonPosition)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                job = {
                    jobType: jobType,
                    operation: operation,
                    payload: payload.flendersonPosition
                } as FlendersonCommand;
                jobEnqueueMessages.push(job);
            }
            break;

        default:
            break;
    }

    if (jobTypeValid && operationValid && payloadValid) {
        isValid =  true;
    }

    return {
        jobTypeValid: jobTypeValid,
        operationValid: operationValid,
        payloadValid: payloadValid,
        isValid: isValid,
        jobEnqueueMessages: jobEnqueueMessages
    }
}

function isIPPSDirectory(payload: any): payload is IPPSDirectory {
    return (payload as IPPSDirectory).email !== undefined;
}
function isIPPSEmployeeGroup(payload: any): payload is IPPSEmployeeGroup {
    return (payload as IPPSEmployeeGroup).employeeGroupCode !== undefined;
}
function isIPPSJob(payload: any): payload is IPPSJob {
    return (payload as IPPSJob).jobCode !== undefined;
}
function isIPPSLocation(payload: any): payload is IPPSLocation {
    return (payload as IPPSLocation).locationCode !== undefined;
}
function isIPPSPal(payload: any): payload is IPPSPal {
    return (payload as IPPSPal).username !== undefined;
}
function isIPPSPerson(payload: any): payload is IPPSPerson {
    return (payload as IPPSPerson).employeeID !== undefined;
}
function isIPPSPosition(payload: any): payload is IPPSPosition {
    return (payload as IPPSPosition).positionID !== undefined;
}
function isFlendersonPerson(payload: any): payload is FlendersonPerson {
    return (payload as FlendersonPerson).employeeID !== undefined;
}
function isFlendersonPosition(payload: any): payload is FlendersonPosition {
    return (payload as FlendersonPosition).positionID !== undefined;
}

function isStoreOperation(operation: string): boolean {
    return ['patch', 'replace', 'delete' ].includes(operation)
}

function isStorable(payload: any): boolean {
    if (isIPPSDirectory(payload?.ippsDirectory)) {
        return true;
    }
    if (isIPPSEmployeeGroup(payload?.ippsEmployeeGroup)) {
        return true;
    }
    if (isIPPSJob(payload?.ippsJob)) {
        return true;
    }
    if (isIPPSLocation(payload?.ippsLocation)) {
        return true;
    }
    if (isIPPSPal(payload?.ippsPal)) {
        return true;
    }
    if (isIPPSPerson(payload?.ippsPerson)) {
        return true;
    }
    if (isIPPSPosition(payload?.ippsPosition)) {
        return true;
    }
    if (isFlendersonPerson(payload?.flendersonPerson)) {
        return true;
    }
    if (isFlendersonPosition(payload?.flendersonPosition)) {
        return true;
    }
    return false;
}
