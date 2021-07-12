import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, WALDIRJobType, WALDIRCommand, WALDIRJobEnqueueFunctionRequest, WALDIRCommandOperation, WALDIRCommandFunctionRequestPayload } from "@cosmos/types";
import { WALDIRUserReconcileFunctionRequest } from '@cosmos/types';
import { WALDIRUserMaterializeFunctionRequest } from '@cosmos/types';
import { WALDIRUserStoreFunctionRequest, WPUserStoreFunctionRequest } from '@cosmos/types';
import { WALDIRUserMaterializeBatchFunctionRequest } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: WALDIRJobEnqueueFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as WALDIRJobEnqueueFunctionRequest
    const command = triggerObject.command as WALDIRCommand;

    const jobType = command.jobType as WALDIRJobType;
    const operation = command.operation as WALDIRCommandOperation;
    const payload = command.payload as WALDIRCommandFunctionRequestPayload;
    //const incomingBlob = command.incomingBlob;
    //const offset = command.offset;

    let queueTriggered = '';
    let queueMessage = {};
    let sentQueueMessage = false;

    let missingJobType = false;
    let jobTypeError = false;

    //const html = '';
    //const sendNotification = false;

    let logPayload = {
        status: '',
        message: '',
        command: {},
        queueMessage: {},
        queueTriggered: '',
        error: ''
    };
    //const notification = {};

    if (jobType) {
        switch (jobType) {
            case 'WRDSB.WALDIR.WALDIRUser.Reconcile':
                queueTriggered = "waldir-user-reconcile";
                queueMessage = {
                    jobType: jobType,
                    payload: {}
                } as WALDIRUserReconcileFunctionRequest;
                context.bindings.waldirUserReconcile = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.WALDIR.WALDIRUser.Materialize':
                queueTriggered = "waldir-user-materialize";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        email: payload.email,
                        employeeID: payload.employeeID
                    }
                } as WALDIRUserMaterializeFunctionRequest;
                context.bindings.waldirUserMaterialize = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.WALDIR.WALDIRUser.MaterializeBatch':
                queueTriggered = "waldir-user-materialize-batch";
                queueMessage = {
                    jobType: jobType,
                    payload: {
                        all: payload.all,
                        employeeID: payload.employeeID,
                        email: payload.email,
                        ippsEmployeeGroupCode: payload.ippsEmployeeGroupCode,
                        ippsJobCode: payload.ippsJobCode,
                        ippsLocationCode: payload.ippsLocationCode,
                        ippsPositionID: payload.ippsPositionID,
                    }
                } as WALDIRUserMaterializeBatchFunctionRequest;
                context.bindings.walderUserMaterializeBatch = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.WALDIR.WALDIRUser.Store':
                queueTriggered = "waldir-user-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as WALDIRUserStoreFunctionRequest;
                context.bindings.walderUserStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.WALDIR.WPUser.Store':
                queueTriggered = "wp-user-store";
                queueMessage = {
                    operation: operation,
                    payload: payload
                } as WPUserStoreFunctionRequest;
                context.bindings.wpUserStore = queueMessage;
                sentQueueMessage = true;
                break;

            case 'WRDSB.WALDIR.WALDIRUser.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.WALDIR.WPUser.ChangeTrigger':
                // only invoked by Cosmos DB change feed trigger
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.WALDIR.WALDIRUser.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.WALDIR.WPUser.ChangeParse':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            case 'WRDSB.WALDIR.SearchIndexer.Invoke':
                queueTriggered = "";
                sentQueueMessage = false;
                break;

            default:
                jobTypeError = true;
                break;
        }
    }
    else {
        missingJobType = true;
    }

    if (sentQueueMessage) {
        logPayload = {
            status: "200",
            message: `Sent request to ${queueTriggered}`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: ''
        };
    } else if (jobTypeError) {
        logPayload = {
            status: '400',
            message: `jobType Error: unrecognized jobType ${jobType}`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: `jobType Error: unrecognized jobType ${jobType}`
        };
    } else if (missingJobType) {
        logPayload = {
            status: '400',
            message: `jobType Error: missing jobType`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: `jobType Error: missing jobType`
        };
    } else {
        logPayload = {
            status: "204",
            message: `Nothing to do.`,
            command: command,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            error: ''
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobEnqueue;
