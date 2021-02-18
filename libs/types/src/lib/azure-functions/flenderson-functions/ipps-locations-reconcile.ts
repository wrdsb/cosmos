import * as Cosmos from "../common";

interface IPPSLocationsReconcileFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSLocationsReconcileFunctionRequestPayload;
}

interface IPPSLocationsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSLocationsReconcileFunctionResponsePayload;
}

interface IPPSLocationsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSLocationsReconcileFunctionResponsePayload;
}

interface IPPSLocationsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSLocationsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSLocationsReconcileFunctionInvocationEventPayload;
}

interface IPPSLocationsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSLocationsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSLocationsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSLocationsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSLocationsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSLocationsReconcileFunctionRequest,
    IPPSLocationsReconcileFunctionResponse,
    IPPSLocationsReconcileFunctionLogObject,
    IPPSLocationsReconcileFunctionCallbackMessage,
    IPPSLocationsReconcileFunctionInvocationEvent,
    IPPSLocationsReconcileFunctionRequestPayload,
    IPPSLocationsReconcileFunctionResponsePayload,
    IPPSLocationsReconcileFunctionLogObjectPayload,
    IPPSLocationsReconcileFunctionCallbackMessagePayload,
    IPPSLocationsReconcileFunctionInvocationEventPayload
}
