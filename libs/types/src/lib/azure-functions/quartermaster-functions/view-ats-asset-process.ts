import * as Cosmos from "../common";

interface ViewATSAssetFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetFunctionRequestPayload;
}

interface ViewATSAssetFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetFunctionResponsePayload;
}

interface ViewATSAssetFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetFunctionResponsePayload;
}

interface ViewATSAssetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetFunctionInvocationEventPayload;
}

interface ViewATSAssetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetFunctionRequest,
    ViewATSAssetFunctionResponse,
    ViewATSAssetFunctionLogObject,
    ViewATSAssetFunctionCallbackMessage,
    ViewATSAssetFunctionInvocationEvent,
    ViewATSAssetFunctionRequestPayload,
    ViewATSAssetFunctionResponsePayload,
    ViewATSAssetFunctionLogObjectPayload,
    ViewATSAssetFunctionCallbackMessagePayload,
    ViewATSAssetFunctionInvocationEventPayload
}
