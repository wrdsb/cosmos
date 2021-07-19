import * as Cosmos from "../common";

interface WPUserCreateFunctionRequest {
    readonly payload: WPUserCreateFunctionRequestPayload;
}

interface WPUserCreateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserCreateFunctionResponsePayload;
}

interface WPUserCreateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserCreateFunctionResponsePayload;
}

interface WPUserCreateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserCreateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserCreateFunctionInvocationEventPayload;
}

interface WPUserCreateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WPUserCreateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserCreateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserCreateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserCreateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserCreateFunctionRequest,
    WPUserCreateFunctionResponse,
    WPUserCreateFunctionLogObject,
    WPUserCreateFunctionCallbackMessage,
    WPUserCreateFunctionInvocationEvent,
    WPUserCreateFunctionRequestPayload,
    WPUserCreateFunctionResponsePayload,
    WPUserCreateFunctionLogObjectPayload,
    WPUserCreateFunctionCallbackMessagePayload,
    WPUserCreateFunctionInvocationEventPayload
}
