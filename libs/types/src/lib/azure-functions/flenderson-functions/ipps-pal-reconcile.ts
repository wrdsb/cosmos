import * as Cosmos from "../common";

interface IPPSPalReconcileFunctionRequest {
    readonly payload: IPPSPalReconcileFunctionRequestPayload;
}

interface IPPSPalReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPalReconcileFunctionResponsePayload;
}

interface IPPSPalReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPalReconcileFunctionResponsePayload;
}

interface IPPSPalReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPalReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPalReconcileFunctionInvocationEventPayload;
}

interface IPPSPalReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPalReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPalReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPalReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPalReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPalReconcileFunctionRequest,
    IPPSPalReconcileFunctionResponse,
    IPPSPalReconcileFunctionLogObject,
    IPPSPalReconcileFunctionCallbackMessage,
    IPPSPalReconcileFunctionInvocationEvent,
    IPPSPalReconcileFunctionRequestPayload,
    IPPSPalReconcileFunctionResponsePayload,
    IPPSPalReconcileFunctionLogObjectPayload,
    IPPSPalReconcileFunctionCallbackMessagePayload,
    IPPSPalReconcileFunctionInvocationEventPayload
}
