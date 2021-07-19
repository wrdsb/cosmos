import * as Cosmos from "../common";

interface WPUserDeleteFunctionRequest {
    readonly payload: WPUserDeleteFunctionRequestPayload;
}

interface WPUserDeleteFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserDeleteFunctionResponsePayload;
}

interface WPUserDeleteFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserDeleteFunctionResponsePayload;
}

interface WPUserDeleteFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserDeleteFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserDeleteFunctionInvocationEventPayload;
}

interface WPUserDeleteFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WPUserDeleteFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserDeleteFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserDeleteFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserDeleteFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserDeleteFunctionRequest,
    WPUserDeleteFunctionResponse,
    WPUserDeleteFunctionLogObject,
    WPUserDeleteFunctionCallbackMessage,
    WPUserDeleteFunctionInvocationEvent,
    WPUserDeleteFunctionRequestPayload,
    WPUserDeleteFunctionResponsePayload,
    WPUserDeleteFunctionLogObjectPayload,
    WPUserDeleteFunctionCallbackMessagePayload,
    WPUserDeleteFunctionInvocationEventPayload
}
