import * as Cosmos from "../common";

interface CodexPersonStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: CodexPersonStoreFunctionRequestPayload;
}

interface CodexPersonStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexPersonStoreFunctionResponsePayload;
}

interface CodexPersonStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexPersonStoreFunctionResponsePayload;
}

interface CodexPersonStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexPersonStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexPersonStoreFunctionInvocationEventPayload;
}

interface CodexPersonStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexPersonStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexPersonStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexPersonStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexPersonStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexPersonStoreFunctionRequest,
    CodexPersonStoreFunctionResponse,
    CodexPersonStoreFunctionLogObject,
    CodexPersonStoreFunctionCallbackMessage,
    CodexPersonStoreFunctionInvocationEvent,
    CodexPersonStoreFunctionRequestPayload,
    CodexPersonStoreFunctionResponsePayload,
    CodexPersonStoreFunctionLogObjectPayload,
    CodexPersonStoreFunctionCallbackMessagePayload,
    CodexPersonStoreFunctionInvocationEventPayload
}
