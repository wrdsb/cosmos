import * as Cosmos from "../common";

interface IPPSPersonReconcileFunctionRequest {
    readonly payload: IPPSPersonReconcileFunctionRequestPayload;
}

interface IPPSPersonReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPersonReconcileFunctionResponsePayload;
}

interface IPPSPersonReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPersonReconcileFunctionResponsePayload;
}

interface IPPSPersonReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPersonReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPersonReconcileFunctionInvocationEventPayload;
}

interface IPPSPersonReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPersonReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPersonReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPersonReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPersonReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPersonReconcileFunctionRequest,
    IPPSPersonReconcileFunctionResponse,
    IPPSPersonReconcileFunctionLogObject,
    IPPSPersonReconcileFunctionCallbackMessage,
    IPPSPersonReconcileFunctionInvocationEvent,
    IPPSPersonReconcileFunctionRequestPayload,
    IPPSPersonReconcileFunctionResponsePayload,
    IPPSPersonReconcileFunctionLogObjectPayload,
    IPPSPersonReconcileFunctionCallbackMessagePayload,
    IPPSPersonReconcileFunctionInvocationEventPayload
}
