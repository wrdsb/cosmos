import * as Cosmos from "../common";

interface WALDIRUserReconcileFunctionRequest {
    readonly payload: WALDIRUserReconcileFunctionRequestPayload;
}

interface WALDIRUserReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRUserReconcileFunctionResponsePayload;
}

interface WALDIRUserReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRUserReconcileFunctionResponsePayload;
}

interface WALDIRUserReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRUserReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRUserReconcileFunctionInvocationEventPayload;
}

interface WALDIRUserReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WALDIRUserReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRUserReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRUserReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRUserReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WALDIRUserReconcileFunctionRequest,
    WALDIRUserReconcileFunctionResponse,
    WALDIRUserReconcileFunctionLogObject,
    WALDIRUserReconcileFunctionCallbackMessage,
    WALDIRUserReconcileFunctionInvocationEvent,
    WALDIRUserReconcileFunctionRequestPayload,
    WALDIRUserReconcileFunctionResponsePayload,
    WALDIRUserReconcileFunctionLogObjectPayload,
    WALDIRUserReconcileFunctionCallbackMessagePayload,
    WALDIRUserReconcileFunctionInvocationEventPayload
}
