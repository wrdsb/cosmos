import * as Cosmos from "../common";

interface ViewATSAssetClassProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetClassProcessFunctionRequestPayload;
}

interface ViewATSAssetClassProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetClassProcessFunctionResponsePayload;
}

interface ViewATSAssetClassProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetClassProcessFunctionResponsePayload;
}

interface ViewATSAssetClassProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetClassProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetClassProcessFunctionInvocationEventPayload;
}

interface ViewATSAssetClassProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetClassProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetClassProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetClassProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetClassProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetClassProcessFunctionRequest,
    ViewATSAssetClassProcessFunctionResponse,
    ViewATSAssetClassProcessFunctionLogObject,
    ViewATSAssetClassProcessFunctionCallbackMessage,
    ViewATSAssetClassProcessFunctionInvocationEvent,
    ViewATSAssetClassProcessFunctionRequestPayload,
    ViewATSAssetClassProcessFunctionResponsePayload,
    ViewATSAssetClassProcessFunctionLogObjectPayload,
    ViewATSAssetClassProcessFunctionCallbackMessagePayload,
    ViewATSAssetClassProcessFunctionInvocationEventPayload
}
