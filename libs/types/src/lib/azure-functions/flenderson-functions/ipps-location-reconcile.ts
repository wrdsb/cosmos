import * as Cosmos from "../common";

interface IPPSLocationReconcileFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSLocationReconcileFunctionRequestPayload;
}

interface IPPSLocationReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSLocationReconcileFunctionResponsePayload;
}

interface IPPSLocationReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSLocationReconcileFunctionResponsePayload;
}

interface IPPSLocationReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSLocationReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSLocationReconcileFunctionInvocationEventPayload;
}

interface IPPSLocationReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSLocationReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSLocationReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSLocationReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSLocationReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSLocationReconcileFunctionRequest,
    IPPSLocationReconcileFunctionResponse,
    IPPSLocationReconcileFunctionLogObject,
    IPPSLocationReconcileFunctionCallbackMessage,
    IPPSLocationReconcileFunctionInvocationEvent,
    IPPSLocationReconcileFunctionRequestPayload,
    IPPSLocationReconcileFunctionResponsePayload,
    IPPSLocationReconcileFunctionLogObjectPayload,
    IPPSLocationReconcileFunctionCallbackMessagePayload,
    IPPSLocationReconcileFunctionInvocationEventPayload
}
