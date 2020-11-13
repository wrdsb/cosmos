import * as Cosmos from "../common";

interface ViewATSAssetClassTypeProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetClassTypeProcessFunctionRequestPayload;
}

interface ViewATSAssetClassTypeProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetClassTypeProcessFunctionResponsePayload;
}

interface ViewATSAssetClassTypeProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetClassTypeProcessFunctionResponsePayload;
}

interface ViewATSAssetClassTypeProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetClassTypeProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetClassTypeProcessFunctionInvocationEventPayload;
}

interface ViewATSAssetClassTypeProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetClassTypeProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetClassTypeProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetClassTypeProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetClassTypeProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetClassTypeProcessFunctionRequest,
    ViewATSAssetClassTypeProcessFunctionResponse,
    ViewATSAssetClassTypeProcessFunctionLogObject,
    ViewATSAssetClassTypeProcessFunctionCallbackMessage,
    ViewATSAssetClassTypeProcessFunctionInvocationEvent,
    ViewATSAssetClassTypeProcessFunctionRequestPayload,
    ViewATSAssetClassTypeProcessFunctionResponsePayload,
    ViewATSAssetClassTypeProcessFunctionLogObjectPayload,
    ViewATSAssetClassTypeProcessFunctionCallbackMessagePayload,
    ViewATSAssetClassTypeProcessFunctionInvocationEventPayload
}
