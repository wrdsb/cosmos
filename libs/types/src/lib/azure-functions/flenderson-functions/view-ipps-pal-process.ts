import * as Cosmos from "../common";

interface ViewIPPSPalProcessFunctionRequest {
    readonly payload: ViewIPPSPalProcessFunctionRequestPayload;
}

interface ViewIPPSPalProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSPalProcessFunctionResponsePayload;
}

interface ViewIPPSPalProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSPalProcessFunctionResponsePayload;
}

interface ViewIPPSPalProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSPalProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSPalProcessFunctionInvocationEventPayload;
}

interface ViewIPPSPalProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSPalProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSPalProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSPalProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSPalProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSPalProcessFunctionRequest,
    ViewIPPSPalProcessFunctionResponse,
    ViewIPPSPalProcessFunctionLogObject,
    ViewIPPSPalProcessFunctionCallbackMessage,
    ViewIPPSPalProcessFunctionInvocationEvent,
    ViewIPPSPalProcessFunctionRequestPayload,
    ViewIPPSPalProcessFunctionResponsePayload,
    ViewIPPSPalProcessFunctionLogObjectPayload,
    ViewIPPSPalProcessFunctionCallbackMessagePayload,
    ViewIPPSPalProcessFunctionInvocationEventPayload
}
