import * as Cosmos from "../common";

interface CodexPingFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexPingFunctionRequestPayload;
}

interface CodexPingFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexPingFunctionResponsePayload;
}

interface CodexPingFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexPingFunctionResponsePayload;
}

interface CodexPingFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexPingFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexPingFunctionInvocationEventPayload;
}

interface CodexPingFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexPingFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexPingFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexPingFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexPingFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexPingFunctionRequest,
    CodexPingFunctionResponse,
    CodexPingFunctionLogObject,
    CodexPingFunctionCallbackMessage,
    CodexPingFunctionInvocationEvent,
    CodexPingFunctionRequestPayload,
    CodexPingFunctionResponsePayload,
    CodexPingFunctionLogObjectPayload,
    CodexPingFunctionCallbackMessagePayload,
    CodexPingFunctionInvocationEventPayload
}
