import { WALDIRCommand, WALDIRJobType, WALDIRCommandOperation, WALDIRCommandFunctionRequestPayload, WALDIRJobEnqueueFunctionRequest} from '@cosmos/types';
import { WALDIRUser, WPUser } from "@cosmos/types";

export function validateWALDIRCommand(jobType: WALDIRJobType, operation: WALDIRCommandOperation, payload: WALDIRCommandFunctionRequestPayload ) {
    let jobTypeValid = false;
    let operationValid = false;
    let payloadValid = false;
    let isValid = false;
    const jobEnqueueMessages: WALDIRJobEnqueueFunctionRequest[] = [];

    switch (jobType) {
        case 'WRDSB.WALDIR.WPUser.Get':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;

            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'get',
                    payload: {

                    }
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.GetAll':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;

            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'getAll',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.Create':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'create',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.Update':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'patch',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.Delete':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'delete',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.Reconcile':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WALDIRUser.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isWALDIRUser(payload?.waldirUser)) {
                payloadValid = true;
            }

            if (jobTypeValid && operationValid && payloadValid) {
                jobEnqueueMessages.push({
                    command: {
                        jobType: jobType,
                        operation: operation,
                        payload: {
                            waldirUser: payload.waldirUser
                        }
                    } as WALDIRCommand
                } as WALDIRJobEnqueueFunctionRequest);
            }
            break;

        case 'WRDSB.WALDIR.WPUser.Store':
            jobTypeValid = true;

            if (isStoreOperation(operation)) {
                operationValid = true;
            }

            if (isWPUser(payload?.wpUser)) {
                payloadValid = true;
            }
        
            if (jobTypeValid && operationValid && payloadValid) {
                jobEnqueueMessages.push({
                    command: {
                        jobType: jobType,
                        operation: operation,
                        payload: {
                            wpUser: payload.wpUser
                        }
                    } as WALDIRCommand
                } as WALDIRJobEnqueueFunctionRequest);
            }
            break;

        case 'WRDSB.WALDIR.WALDIRUser.ChangeTrigger':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.ChangeTrigger':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WALDIRUser.ChangeParse':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WPUser.ChangeParse':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WALDIRUser.Materialize':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.WALDIRUser.MaterializeBatch':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'reconcile',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.NotificationEmail.Send':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;
        
            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'send',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
            break;

        case 'WRDSB.WALDIR.SearchIndexer.Invoke':
            jobTypeValid = true;
            operationValid = true;
            payloadValid = true;

            jobEnqueueMessages.push({
                command: {
                    jobType: jobType,
                    operation: 'invoke',
                    payload: {}
                } as WALDIRCommand
            } as WALDIRJobEnqueueFunctionRequest);
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

function isWALDIRUser(payload: any): payload is WALDIRUser {
    return (payload as WALDIRUser).email !== undefined;
}
function isWPUser(payload: any): payload is WPUser {
    return (payload as WPUser).email !== undefined;
}

function isStoreOperation(operation: string): boolean {
    return ['patch', 'replace', 'delete' ].includes(operation)
}

function isStorable(payload: WALDIRCommandFunctionRequestPayload): boolean {
    if (isWALDIRUser(payload?.waldirUser)) {
        return true;
    }
    if (isWPUser(payload?.wpUser)) {
        return true;
    }
    return false;
}
