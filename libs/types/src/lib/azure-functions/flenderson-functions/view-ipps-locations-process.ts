import * as Cosmos from "../common";

interface ViewIPPSLocationsProcessFunctionRequest {
    readonly payload: ViewIPPSLocationsProcessFunctionRequestPayload;
}

interface ViewIPPSLocationsProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSLocationsProcessFunctionResponsePayload;
}

interface ViewIPPSLocationsProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSLocationsProcessFunctionResponsePayload;
}

interface ViewIPPSLocationsProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSLocationsProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSLocationsProcessFunctionInvocationEventPayload;
}

interface ViewIPPSLocationsProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSLocationsProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSLocationsProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSLocationsProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSLocationsProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSLocationsProcessFunctionRequest,
    ViewIPPSLocationsProcessFunctionResponse,
    ViewIPPSLocationsProcessFunctionLogObject,
    ViewIPPSLocationsProcessFunctionCallbackMessage,
    ViewIPPSLocationsProcessFunctionInvocationEvent,
    ViewIPPSLocationsProcessFunctionRequestPayload,
    ViewIPPSLocationsProcessFunctionResponsePayload,
    ViewIPPSLocationsProcessFunctionLogObjectPayload,
    ViewIPPSLocationsProcessFunctionCallbackMessagePayload,
    ViewIPPSLocationsProcessFunctionInvocationEventPayload
}
