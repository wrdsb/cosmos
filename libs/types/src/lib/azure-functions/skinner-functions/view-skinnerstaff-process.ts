import * as Cosmos from "../common";

interface ViewSkinnerStaffProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewSkinnerStaffProcessFunctionRequestPayload;
}

interface ViewSkinnerStaffProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewSkinnerStaffProcessFunctionResponsePayload;
}

interface ViewSkinnerStaffProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewSkinnerStaffProcessFunctionResponsePayload;
}

interface ViewSkinnerStaffProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewSkinnerStaffProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewSkinnerStaffProcessFunctionInvocationEventPayload;
}

interface ViewSkinnerStaffProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewSkinnerStaffProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewSkinnerStaffProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewSkinnerStaffProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewSkinnerStaffProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewSkinnerStaffProcessFunctionRequest,
    ViewSkinnerStaffProcessFunctionResponse,
    ViewSkinnerStaffProcessFunctionLogObject,
    ViewSkinnerStaffProcessFunctionCallbackMessage,
    ViewSkinnerStaffProcessFunctionInvocationEvent,
    ViewSkinnerStaffProcessFunctionRequestPayload,
    ViewSkinnerStaffProcessFunctionResponsePayload,
    ViewSkinnerStaffProcessFunctionLogObjectPayload,
    ViewSkinnerStaffProcessFunctionCallbackMessagePayload,
    ViewSkinnerStaffProcessFunctionInvocationEventPayload
}
