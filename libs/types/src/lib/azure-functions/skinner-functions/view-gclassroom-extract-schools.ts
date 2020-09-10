import * as Cosmos from "../common";

interface ViewGclassroomExtractSchoolsFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomExtractSchoolsFunctionRequestPayload;
}

interface ViewGclassroomExtractSchoolsFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomExtractSchoolsFunctionResponsePayload;
}

interface ViewGclassroomExtractSchoolsFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomExtractSchoolsFunctionResponsePayload;
}

interface ViewGclassroomExtractSchoolsFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomExtractSchoolsFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomExtractSchoolsFunctionInvocationEventPayload;
}

interface ViewGclassroomExtractSchoolsFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomExtractSchoolsFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomExtractSchoolsFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomExtractSchoolsFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomExtractSchoolsFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomExtractSchoolsFunctionRequest,
    ViewGclassroomExtractSchoolsFunctionResponse,
    ViewGclassroomExtractSchoolsFunctionLogObject,
    ViewGclassroomExtractSchoolsFunctionCallbackMessage,
    ViewGclassroomExtractSchoolsFunctionInvocationEvent,
    ViewGclassroomExtractSchoolsFunctionRequestPayload,
    ViewGclassroomExtractSchoolsFunctionResponsePayload,
    ViewGclassroomExtractSchoolsFunctionLogObjectPayload,
    ViewGclassroomExtractSchoolsFunctionCallbackMessagePayload,
    ViewGclassroomExtractSchoolsFunctionInvocationEventPayload
}
