import * as Cosmos from "../common";

interface ViewSkinnerAssignmentsProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewSkinnerAssignmentsProcessFunctionRequestPayload;
}

interface ViewSkinnerAssignmentsProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewSkinnerAssignmentsProcessFunctionResponsePayload;
}

interface ViewSkinnerAssignmentsProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewSkinnerAssignmentsProcessFunctionResponsePayload;
}

interface ViewSkinnerAssignmentsProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewSkinnerAssignmentsProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewSkinnerAssignmentsProcessFunctionInvocationEventPayload;
}

interface ViewSkinnerAssignmentsProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewSkinnerAssignmentsProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewSkinnerAssignmentsProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewSkinnerAssignmentsProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewSkinnerAssignmentsProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewSkinnerAssignmentsProcessFunctionRequest,
    ViewSkinnerAssignmentsProcessFunctionResponse,
    ViewSkinnerAssignmentsProcessFunctionLogObject,
    ViewSkinnerAssignmentsProcessFunctionCallbackMessage,
    ViewSkinnerAssignmentsProcessFunctionInvocationEvent,
    ViewSkinnerAssignmentsProcessFunctionRequestPayload,
    ViewSkinnerAssignmentsProcessFunctionResponsePayload,
    ViewSkinnerAssignmentsProcessFunctionLogObjectPayload,
    ViewSkinnerAssignmentsProcessFunctionCallbackMessagePayload,
    ViewSkinnerAssignmentsProcessFunctionInvocationEventPayload
}
