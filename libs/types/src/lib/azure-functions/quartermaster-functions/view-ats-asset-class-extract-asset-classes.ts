import * as Cosmos from "../common";

interface ViewATSAssetClassExtractAssetClassesFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewATSAssetClassExtractAssetClassesFunctionRequestPayload;
}

interface ViewATSAssetClassExtractAssetClassesFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewATSAssetClassExtractAssetClassesFunctionResponsePayload;
}

interface ViewATSAssetClassExtractAssetClassesFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewATSAssetClassExtractAssetClassesFunctionResponsePayload;
}

interface ViewATSAssetClassExtractAssetClassesFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewATSAssetClassExtractAssetClassesFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewATSAssetClassExtractAssetClassesFunctionInvocationEventPayload;
}

interface ViewATSAssetClassExtractAssetClassesFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewATSAssetClassExtractAssetClassesFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewATSAssetClassExtractAssetClassesFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewATSAssetClassExtractAssetClassesFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewATSAssetClassExtractAssetClassesFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewATSAssetClassExtractAssetClassesFunctionRequest,
    ViewATSAssetClassExtractAssetClassesFunctionResponse,
    ViewATSAssetClassExtractAssetClassesFunctionLogObject,
    ViewATSAssetClassExtractAssetClassesFunctionCallbackMessage,
    ViewATSAssetClassExtractAssetClassesFunctionInvocationEvent,
    ViewATSAssetClassExtractAssetClassesFunctionRequestPayload,
    ViewATSAssetClassExtractAssetClassesFunctionResponsePayload,
    ViewATSAssetClassExtractAssetClassesFunctionLogObjectPayload,
    ViewATSAssetClassExtractAssetClassesFunctionCallbackMessagePayload,
    ViewATSAssetClassExtractAssetClassesFunctionInvocationEventPayload
}