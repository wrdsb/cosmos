import * as Cosmos from "../common";

interface ViewSkinnerStaffExtractStaffFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewSkinnerStaffExtractStaffFunctionRequestPayload;
}

interface ViewSkinnerStaffExtractStaffFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewSkinnerStaffExtractStaffFunctionResponsePayload;
}

interface ViewSkinnerStaffExtractStaffFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewSkinnerStaffExtractStaffFunctionResponsePayload;
}

interface ViewSkinnerStaffExtractStaffFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewSkinnerStaffExtractStaffFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewSkinnerStaffExtractStaffFunctionInvocationEventPayload;
}

interface ViewSkinnerStaffExtractStaffFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewSkinnerStaffExtractStaffFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewSkinnerStaffExtractStaffFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewSkinnerStaffExtractStaffFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewSkinnerStaffExtractStaffFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewSkinnerStaffExtractStaffFunctionRequest,
    ViewSkinnerStaffExtractStaffFunctionResponse,
    ViewSkinnerStaffExtractStaffFunctionLogObject,
    ViewSkinnerStaffExtractStaffFunctionCallbackMessage,
    ViewSkinnerStaffExtractStaffFunctionInvocationEvent,
    ViewSkinnerStaffExtractStaffFunctionRequestPayload,
    ViewSkinnerStaffExtractStaffFunctionResponsePayload,
    ViewSkinnerStaffExtractStaffFunctionLogObjectPayload,
    ViewSkinnerStaffExtractStaffFunctionCallbackMessagePayload,
    ViewSkinnerStaffExtractStaffFunctionInvocationEventPayload
}
