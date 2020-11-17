import * as Cosmos from "../common";

interface ViewATSAssetProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetProcessFunctionRequestPayload;
}

interface ViewATSAssetProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetProcessFunctionResponsePayload;
}

interface ViewATSAssetProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetProcessFunctionResponsePayload;
}

interface ViewATSAssetProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetProcessFunctionInvocationEventPayload;
}

interface ViewATSAssetProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetProcessFunctionRequest,
    ViewATSAssetProcessFunctionResponse,
    ViewATSAssetProcessFunctionLogObject,
    ViewATSAssetProcessFunctionCallbackMessage,
    ViewATSAssetProcessFunctionInvocationEvent,
    ViewATSAssetProcessFunctionRequestPayload,
    ViewATSAssetProcessFunctionResponsePayload,
    ViewATSAssetProcessFunctionLogObjectPayload,
    ViewATSAssetProcessFunctionCallbackMessagePayload,
    ViewATSAssetProcessFunctionInvocationEventPayload
}
