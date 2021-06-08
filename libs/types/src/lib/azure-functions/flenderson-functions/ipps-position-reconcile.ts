import * as Cosmos from "../common";

interface IPPSPositionReconcileFunctionRequest {
    readonly payload: IPPSPositionReconcileFunctionRequestPayload;
}

interface IPPSPositionReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPositionReconcileFunctionResponsePayload;
}

interface IPPSPositionReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPositionReconcileFunctionResponsePayload;
}

interface IPPSPositionReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPositionReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPositionReconcileFunctionInvocationEventPayload;
}

interface IPPSPositionReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPositionReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPositionReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPositionReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPositionReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPositionReconcileFunctionRequest,
    IPPSPositionReconcileFunctionResponse,
    IPPSPositionReconcileFunctionLogObject,
    IPPSPositionReconcileFunctionCallbackMessage,
    IPPSPositionReconcileFunctionInvocationEvent,
    IPPSPositionReconcileFunctionRequestPayload,
    IPPSPositionReconcileFunctionResponsePayload,
    IPPSPositionReconcileFunctionLogObjectPayload,
    IPPSPositionReconcileFunctionCallbackMessagePayload,
    IPPSPositionReconcileFunctionInvocationEventPayload
}
