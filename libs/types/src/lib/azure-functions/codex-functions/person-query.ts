import * as Cosmos from "../common";

interface CodexPersonQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexPersonQueryFunctionRequestPayload;
}

interface CodexPersonQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexPersonQueryFunctionResponsePayload;
}

interface CodexPersonQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexPersonQueryFunctionResponsePayload;
}

interface CodexPersonQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexPersonQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexPersonQueryFunctionInvocationEventPayload;
}

interface CodexPersonQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexPersonQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexPersonQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexPersonQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexPersonQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexPersonQueryFunctionRequest,
    CodexPersonQueryFunctionResponse,
    CodexPersonQueryFunctionLogObject,
    CodexPersonQueryFunctionCallbackMessage,
    CodexPersonQueryFunctionInvocationEvent,
    CodexPersonQueryFunctionRequestPayload,
    CodexPersonQueryFunctionResponsePayload,
    CodexPersonQueryFunctionLogObjectPayload,
    CodexPersonQueryFunctionCallbackMessagePayload,
    CodexPersonQueryFunctionInvocationEventPayload
}
