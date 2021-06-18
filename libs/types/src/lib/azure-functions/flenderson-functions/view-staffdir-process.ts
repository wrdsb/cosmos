import * as Cosmos from "../common";

interface ViewStaffDirProcessFunctionRequest {
    readonly payload: ViewStaffDirProcessFunctionRequestPayload;
}

interface ViewStaffDirProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewStaffDirProcessFunctionResponsePayload;
}

interface ViewStaffDirProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewStaffDirProcessFunctionResponsePayload;
}

interface ViewStaffDirProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewStaffDirProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewStaffDirProcessFunctionInvocationEventPayload;
}

interface ViewStaffDirProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewStaffDirProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewStaffDirProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewStaffDirProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewStaffDirProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewStaffDirProcessFunctionRequest,
    ViewStaffDirProcessFunctionResponse,
    ViewStaffDirProcessFunctionLogObject,
    ViewStaffDirProcessFunctionCallbackMessage,
    ViewStaffDirProcessFunctionInvocationEvent,
    ViewStaffDirProcessFunctionRequestPayload,
    ViewStaffDirProcessFunctionResponsePayload,
    ViewStaffDirProcessFunctionLogObjectPayload,
    ViewStaffDirProcessFunctionCallbackMessagePayload,
    ViewStaffDirProcessFunctionInvocationEventPayload
}
