import * as Cosmos from "../common";

interface ViewAllProcessFunctionRequest {
    readonly payload: ViewAllProcessFunctionRequestPayload;
}

interface ViewAllProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewAllProcessFunctionResponsePayload;
}

interface ViewAllProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewAllProcessFunctionResponsePayload;
}

interface ViewAllProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewAllProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewAllProcessFunctionInvocationEventPayload;
}

interface ViewAllProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewAllProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewAllProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewAllProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewAllProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewAllProcessFunctionRequest,
    ViewAllProcessFunctionResponse,
    ViewAllProcessFunctionLogObject,
    ViewAllProcessFunctionCallbackMessage,
    ViewAllProcessFunctionInvocationEvent,
    ViewAllProcessFunctionRequestPayload,
    ViewAllProcessFunctionResponsePayload,
    ViewAllProcessFunctionLogObjectPayload,
    ViewAllProcessFunctionCallbackMessagePayload,
    ViewAllProcessFunctionInvocationEventPayload
}
