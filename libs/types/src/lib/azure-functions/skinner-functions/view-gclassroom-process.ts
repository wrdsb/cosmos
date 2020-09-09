import * as Cosmos from "../common";

interface ViewGclassroomProcessFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ViewGclassroomProcessFunctionRequestPayload;
}

interface ViewGclassroomProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewGclassroomProcessFunctionResponsePayload;
}

interface ViewGclassroomProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewGclassroomProcessFunctionResponsePayload;
}

interface ViewGclassroomProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewGclassroomProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewGclassroomProcessFunctionInvocationEventPayload;
}

interface ViewGclassroomProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewGclassroomProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewGclassroomProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewGclassroomProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewGclassroomProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewGclassroomProcessFunctionRequest,
    ViewGclassroomProcessFunctionResponse,
    ViewGclassroomProcessFunctionLogObject,
    ViewGclassroomProcessFunctionCallbackMessage,
    ViewGclassroomProcessFunctionInvocationEvent,
    ViewGclassroomProcessFunctionRequestPayload,
    ViewGclassroomProcessFunctionResponsePayload,
    ViewGclassroomProcessFunctionLogObjectPayload,
    ViewGclassroomProcessFunctionCallbackMessagePayload,
    ViewGclassroomProcessFunctionInvocationEventPayload
}
