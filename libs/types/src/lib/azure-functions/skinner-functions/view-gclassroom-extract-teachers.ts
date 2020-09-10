import * as Cosmos from "../common";

interface ViewGclassroomExtractTeachersFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomExtractTeachersFunctionRequestPayload;
}

interface ViewGclassroomExtractTeachersFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomExtractTeachersFunctionResponsePayload;
}

interface ViewGclassroomExtractTeachersFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomExtractTeachersFunctionResponsePayload;
}

interface ViewGclassroomExtractTeachersFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomExtractTeachersFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomExtractTeachersFunctionInvocationEventPayload;
}

interface ViewGclassroomExtractTeachersFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomExtractTeachersFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomExtractTeachersFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomExtractTeachersFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomExtractTeachersFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomExtractTeachersFunctionRequest,
    ViewGclassroomExtractTeachersFunctionResponse,
    ViewGclassroomExtractTeachersFunctionLogObject,
    ViewGclassroomExtractTeachersFunctionCallbackMessage,
    ViewGclassroomExtractTeachersFunctionInvocationEvent,
    ViewGclassroomExtractTeachersFunctionRequestPayload,
    ViewGclassroomExtractTeachersFunctionResponsePayload,
    ViewGclassroomExtractTeachersFunctionLogObjectPayload,
    ViewGclassroomExtractTeachersFunctionCallbackMessagePayload,
    ViewGclassroomExtractTeachersFunctionInvocationEventPayload
}
