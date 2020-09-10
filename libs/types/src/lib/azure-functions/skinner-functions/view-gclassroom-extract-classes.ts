import * as Cosmos from "../common";

interface ViewGclassroomExtractClassesFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomExtractClassesFunctionRequestPayload;
}

interface ViewGclassroomExtractClassesFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomExtractClassesFunctionResponsePayload;
}

interface ViewGclassroomExtractClassesFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomExtractClassesFunctionResponsePayload;
}

interface ViewGclassroomExtractClassesFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomExtractClassesFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomExtractClassesFunctionInvocationEventPayload;
}

interface ViewGclassroomExtractClassesFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomExtractClassesFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomExtractClassesFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomExtractClassesFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomExtractClassesFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomExtractClassesFunctionRequest,
    ViewGclassroomExtractClassesFunctionResponse,
    ViewGclassroomExtractClassesFunctionLogObject,
    ViewGclassroomExtractClassesFunctionCallbackMessage,
    ViewGclassroomExtractClassesFunctionInvocationEvent,
    ViewGclassroomExtractClassesFunctionRequestPayload,
    ViewGclassroomExtractClassesFunctionResponsePayload,
    ViewGclassroomExtractClassesFunctionLogObjectPayload,
    ViewGclassroomExtractClassesFunctionCallbackMessagePayload,
    ViewGclassroomExtractClassesFunctionInvocationEventPayload
}
