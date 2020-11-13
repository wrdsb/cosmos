import * as Cosmos from "../common";

interface ViewATSAssetTypeExtractAssetTypesFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetTypeExtractAssetTypesFunctionRequestPayload;
}

interface ViewATSAssetTypeExtractAssetTypesFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetTypeExtractAssetTypesFunctionResponsePayload;
}

interface ViewATSAssetTypeExtractAssetTypesFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetTypeExtractAssetTypesFunctionResponsePayload;
}

interface ViewATSAssetTypeExtractAssetTypesFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetTypeExtractAssetTypesFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetTypeExtractAssetTypesFunctionInvocationEventPayload;
}

interface ViewATSAssetTypeExtractAssetTypesFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetTypeExtractAssetTypesFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetTypeExtractAssetTypesFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetTypeExtractAssetTypesFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetTypeExtractAssetTypesFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetTypeExtractAssetTypesFunctionRequest,
    ViewATSAssetTypeExtractAssetTypesFunctionResponse,
    ViewATSAssetTypeExtractAssetTypesFunctionLogObject,
    ViewATSAssetTypeExtractAssetTypesFunctionCallbackMessage,
    ViewATSAssetTypeExtractAssetTypesFunctionInvocationEvent,
    ViewATSAssetTypeExtractAssetTypesFunctionRequestPayload,
    ViewATSAssetTypeExtractAssetTypesFunctionResponsePayload,
    ViewATSAssetTypeExtractAssetTypesFunctionLogObjectPayload,
    ViewATSAssetTypeExtractAssetTypesFunctionCallbackMessagePayload,
    ViewATSAssetTypeExtractAssetTypesFunctionInvocationEventPayload
}
