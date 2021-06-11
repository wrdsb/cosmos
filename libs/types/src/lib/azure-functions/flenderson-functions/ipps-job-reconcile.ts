import * as Cosmos from "../common";

interface IPPSJobReconcileFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSJobReconcileFunctionRequestPayload;
}

interface IPPSJobReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSJobReconcileFunctionResponsePayload;
}

interface IPPSJobReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSJobReconcileFunctionResponsePayload;
}

interface IPPSJobReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSJobReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSJobReconcileFunctionInvocationEventPayload;
}

interface IPPSJobReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSJobReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSJobReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSJobReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSJobReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSJobReconcileFunctionRequest,
    IPPSJobReconcileFunctionResponse,
    IPPSJobReconcileFunctionLogObject,
    IPPSJobReconcileFunctionCallbackMessage,
    IPPSJobReconcileFunctionInvocationEvent,
    IPPSJobReconcileFunctionRequestPayload,
    IPPSJobReconcileFunctionResponsePayload,
    IPPSJobReconcileFunctionLogObjectPayload,
    IPPSJobReconcileFunctionCallbackMessagePayload,
    IPPSJobReconcileFunctionInvocationEventPayload
}
