import * as Cosmos from "../common";

interface ViewGclassroomExtractEnrolmentsFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomExtractEnrolmentsFunctionRequestPayload;
}

interface ViewGclassroomExtractEnrolmentsFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomExtractEnrolmentsFunctionResponsePayload;
}

interface ViewGclassroomExtractEnrolmentsFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomExtractEnrolmentsFunctionResponsePayload;
}

interface ViewGclassroomExtractEnrolmentsFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomExtractEnrolmentsFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomExtractEnrolmentsFunctionInvocationEventPayload;
}

interface ViewGclassroomExtractEnrolmentsFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomExtractEnrolmentsFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomExtractEnrolmentsFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomExtractEnrolmentsFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomExtractEnrolmentsFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomExtractEnrolmentsFunctionRequest,
    ViewGclassroomExtractEnrolmentsFunctionResponse,
    ViewGclassroomExtractEnrolmentsFunctionLogObject,
    ViewGclassroomExtractEnrolmentsFunctionCallbackMessage,
    ViewGclassroomExtractEnrolmentsFunctionInvocationEvent,
    ViewGclassroomExtractEnrolmentsFunctionRequestPayload,
    ViewGclassroomExtractEnrolmentsFunctionResponsePayload,
    ViewGclassroomExtractEnrolmentsFunctionLogObjectPayload,
    ViewGclassroomExtractEnrolmentsFunctionCallbackMessagePayload,
    ViewGclassroomExtractEnrolmentsFunctionInvocationEventPayload
}
