import * as Cosmos from "../common";

interface IPPSPalStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSPalStoreFunctionRequestPayload;
}

interface IPPSPalStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPalStoreFunctionResponsePayload;
}

interface IPPSPalStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPalStoreFunctionResponsePayload;
}

interface IPPSPalStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPalStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPalStoreFunctionInvocationEventPayload;
}

interface IPPSPalStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPalStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPalStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPalStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPalStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPalStoreFunctionRequest,
    IPPSPalStoreFunctionResponse,
    IPPSPalStoreFunctionLogObject,
    IPPSPalStoreFunctionCallbackMessage,
    IPPSPalStoreFunctionInvocationEvent,
    IPPSPalStoreFunctionRequestPayload,
    IPPSPalStoreFunctionResponsePayload,
    IPPSPalStoreFunctionLogObjectPayload,
    IPPSPalStoreFunctionCallbackMessagePayload,
    IPPSPalStoreFunctionInvocationEventPayload
}
