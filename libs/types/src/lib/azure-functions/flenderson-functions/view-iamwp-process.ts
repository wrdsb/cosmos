import * as Cosmos from "../common";

interface ViewIAMWPProcessFunctionRequest {
    readonly payload: ViewIAMWPProcessFunctionRequestPayload;
}

interface ViewIAMWPProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIAMWPProcessFunctionResponsePayload;
}

interface ViewIAMWPProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIAMWPProcessFunctionResponsePayload;
}

interface ViewIAMWPProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIAMWPProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIAMWPProcessFunctionInvocationEventPayload;
}

interface ViewIAMWPProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIAMWPProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIAMWPProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIAMWPProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIAMWPProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIAMWPProcessFunctionRequest,
    ViewIAMWPProcessFunctionResponse,
    ViewIAMWPProcessFunctionLogObject,
    ViewIAMWPProcessFunctionCallbackMessage,
    ViewIAMWPProcessFunctionInvocationEvent,
    ViewIAMWPProcessFunctionRequestPayload,
    ViewIAMWPProcessFunctionResponsePayload,
    ViewIAMWPProcessFunctionLogObjectPayload,
    ViewIAMWPProcessFunctionCallbackMessagePayload,
    ViewIAMWPProcessFunctionInvocationEventPayload
}
