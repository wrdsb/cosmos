import * as Cosmos from "../common";

interface ViewIPPSPositionsProcessFunctionRequest {
    readonly payload: ViewIPPSPositionsProcessFunctionRequestPayload;
}

interface ViewIPPSPositionsProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSPositionsProcessFunctionResponsePayload;
}

interface ViewIPPSPositionsProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSPositionsProcessFunctionResponsePayload;
}

interface ViewIPPSPositionsProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSPositionsProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSPositionsProcessFunctionInvocationEventPayload;
}

interface ViewIPPSPositionsProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSPositionsProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSPositionsProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSPositionsProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSPositionsProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSPositionsProcessFunctionRequest,
    ViewIPPSPositionsProcessFunctionResponse,
    ViewIPPSPositionsProcessFunctionLogObject,
    ViewIPPSPositionsProcessFunctionCallbackMessage,
    ViewIPPSPositionsProcessFunctionInvocationEvent,
    ViewIPPSPositionsProcessFunctionRequestPayload,
    ViewIPPSPositionsProcessFunctionResponsePayload,
    ViewIPPSPositionsProcessFunctionLogObjectPayload,
    ViewIPPSPositionsProcessFunctionCallbackMessagePayload,
    ViewIPPSPositionsProcessFunctionInvocationEventPayload
}
