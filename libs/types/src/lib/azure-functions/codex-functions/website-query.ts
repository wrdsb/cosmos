import * as Cosmos from "../common";

interface CodexWebsiteQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexWebsiteQueryFunctionRequestPayload;
}

interface CodexWebsiteQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexWebsiteQueryFunctionResponsePayload;
}

interface CodexWebsiteQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexWebsiteQueryFunctionResponsePayload;
}

interface CodexWebsiteQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexWebsiteQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexWebsiteQueryFunctionInvocationEventPayload;
}

interface CodexWebsiteQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexWebsiteQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexWebsiteQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexWebsiteQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexWebsiteQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexWebsiteQueryFunctionRequest,
    CodexWebsiteQueryFunctionResponse,
    CodexWebsiteQueryFunctionLogObject,
    CodexWebsiteQueryFunctionCallbackMessage,
    CodexWebsiteQueryFunctionInvocationEvent,
    CodexWebsiteQueryFunctionRequestPayload,
    CodexWebsiteQueryFunctionResponsePayload,
    CodexWebsiteQueryFunctionLogObjectPayload,
    CodexWebsiteQueryFunctionCallbackMessagePayload,
    CodexWebsiteQueryFunctionInvocationEventPayload
}
