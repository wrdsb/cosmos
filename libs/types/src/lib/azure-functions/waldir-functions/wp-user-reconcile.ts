import * as Cosmos from "../common";

interface WPUserReconcileFunctionRequest {
    readonly payload: WPUserReconcileFunctionRequestPayload;
}

interface WPUserReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserReconcileFunctionResponsePayload;
}

interface WPUserReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserReconcileFunctionResponsePayload;
}

interface WPUserReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserReconcileFunctionInvocationEventPayload;
}

interface WPUserReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WPUserReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserReconcileFunctionRequest,
    WPUserReconcileFunctionResponse,
    WPUserReconcileFunctionLogObject,
    WPUserReconcileFunctionCallbackMessage,
    WPUserReconcileFunctionInvocationEvent,
    WPUserReconcileFunctionRequestPayload,
    WPUserReconcileFunctionResponsePayload,
    WPUserReconcileFunctionLogObjectPayload,
    WPUserReconcileFunctionCallbackMessagePayload,
    WPUserReconcileFunctionInvocationEventPayload
}
