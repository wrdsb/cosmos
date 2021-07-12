import * as Cosmos from "../common";

interface WPUserStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: WPUserStoreFunctionRequestPayload;
}

interface WPUserStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserStoreFunctionResponsePayload;
}

interface WPUserStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserStoreFunctionResponsePayload;
}

interface WPUserStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserStoreFunctionInvocationEventPayload;
}

interface WPUserStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WPUserStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserStoreFunctionRequest,
    WPUserStoreFunctionResponse,
    WPUserStoreFunctionLogObject,
    WPUserStoreFunctionCallbackMessage,
    WPUserStoreFunctionInvocationEvent,
    WPUserStoreFunctionRequestPayload,
    WPUserStoreFunctionResponsePayload,
    WPUserStoreFunctionLogObjectPayload,
    WPUserStoreFunctionCallbackMessagePayload,
    WPUserStoreFunctionInvocationEventPayload
}
