import * as Cosmos from "../common";

interface ViewATSAssetExtractAssetsFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetExtractAssetsFunctionRequestPayload;
}

interface ViewATSAssetExtractAssetsFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetExtractAssetsFunctionResponsePayload;
}

interface ViewATSAssetExtractAssetsFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetExtractAssetsFunctionResponsePayload;
}

interface ViewATSAssetExtractAssetsFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetExtractAssetsFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetExtractAssetsFunctionInvocationEventPayload;
}

interface ViewATSAssetExtractAssetsFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetExtractAssetsFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetExtractAssetsFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetExtractAssetsFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetExtractAssetsFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetExtractAssetsFunctionRequest,
    ViewATSAssetExtractAssetsFunctionResponse,
    ViewATSAssetExtractAssetsFunctionLogObject,
    ViewATSAssetExtractAssetsFunctionCallbackMessage,
    ViewATSAssetExtractAssetsFunctionInvocationEvent,
    ViewATSAssetExtractAssetsFunctionRequestPayload,
    ViewATSAssetExtractAssetsFunctionResponsePayload,
    ViewATSAssetExtractAssetsFunctionLogObjectPayload,
    ViewATSAssetExtractAssetsFunctionCallbackMessagePayload,
    ViewATSAssetExtractAssetsFunctionInvocationEventPayload
}
