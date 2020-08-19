import * as Cosmos from "../common";

interface CodexSearchFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexSearchFunctionRequestPayload;
}

interface CodexSearchFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexSearchFunctionResponsePayload;
}

interface CodexSearchFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexSearchFunctionResponsePayload;
}

interface CodexSearchFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexSearchFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexSearchFunctionInvocationEventPayload;
}

interface CodexSearchFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexSearchFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexSearchFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexSearchFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexSearchFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexSearchFunctionRequest,
    CodexSearchFunctionResponse,
    CodexSearchFunctionLogObject,
    CodexSearchFunctionCallbackMessage,
    CodexSearchFunctionInvocationEvent,
    CodexSearchFunctionRequestPayload,
    CodexSearchFunctionResponsePayload,
    CodexSearchFunctionLogObjectPayload,
    CodexSearchFunctionCallbackMessagePayload,
    CodexSearchFunctionInvocationEventPayload
}
