import * as Cosmos from "../common";

interface ViewATSAssetTypeProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetTypeProcessFunctionRequestPayload;
}

interface ViewATSAssetTypeProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetTypeProcessFunctionResponsePayload;
}

interface ViewATSAssetTypeProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetTypeProcessFunctionResponsePayload;
}

interface ViewATSAssetTypeProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetTypeProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetTypeProcessFunctionInvocationEventPayload;
}

interface ViewATSAssetTypeProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetTypeProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetTypeProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetTypeProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetTypeProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetTypeProcessFunctionRequest,
    ViewATSAssetTypeProcessFunctionResponse,
    ViewATSAssetTypeProcessFunctionLogObject,
    ViewATSAssetTypeProcessFunctionCallbackMessage,
    ViewATSAssetTypeProcessFunctionInvocationEvent,
    ViewATSAssetTypeProcessFunctionRequestPayload,
    ViewATSAssetTypeProcessFunctionResponsePayload,
    ViewATSAssetTypeProcessFunctionLogObjectPayload,
    ViewATSAssetTypeProcessFunctionCallbackMessagePayload,
    ViewATSAssetTypeProcessFunctionInvocationEventPayload
}
