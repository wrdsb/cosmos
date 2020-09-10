import * as Cosmos from "../common";

interface ViewGclassroomExtractStudentsFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomExtractStudentsFunctionRequestPayload;
}

interface ViewGclassroomExtractStudentsFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomExtractStudentsFunctionResponsePayload;
}

interface ViewGclassroomExtractStudentsFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomExtractStudentsFunctionResponsePayload;
}

interface ViewGclassroomExtractStudentsFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomExtractStudentsFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomExtractStudentsFunctionInvocationEventPayload;
}

interface ViewGclassroomExtractStudentsFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomExtractStudentsFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomExtractStudentsFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomExtractStudentsFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomExtractStudentsFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomExtractStudentsFunctionRequest,
    ViewGclassroomExtractStudentsFunctionResponse,
    ViewGclassroomExtractStudentsFunctionLogObject,
    ViewGclassroomExtractStudentsFunctionCallbackMessage,
    ViewGclassroomExtractStudentsFunctionInvocationEvent,
    ViewGclassroomExtractStudentsFunctionRequestPayload,
    ViewGclassroomExtractStudentsFunctionResponsePayload,
    ViewGclassroomExtractStudentsFunctionLogObjectPayload,
    ViewGclassroomExtractStudentsFunctionCallbackMessagePayload,
    ViewGclassroomExtractStudentsFunctionInvocationEventPayload
}
