import * as Cosmos from "../common";

interface CodexWebsiteStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: CodexWebsiteStoreFunctionRequestPayload;
}

interface CodexWebsiteStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexWebsiteStoreFunctionResponsePayload;
}

interface CodexWebsiteStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexWebsiteStoreFunctionResponsePayload;
}

interface CodexWebsiteStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexWebsiteStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexWebsiteStoreFunctionInvocationEventPayload;
}

interface CodexWebsiteStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexWebsiteStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexWebsiteStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexWebsiteStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexWebsiteStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexWebsiteStoreFunctionRequest,
    CodexWebsiteStoreFunctionResponse,
    CodexWebsiteStoreFunctionLogObject,
    CodexWebsiteStoreFunctionCallbackMessage,
    CodexWebsiteStoreFunctionInvocationEvent,
    CodexWebsiteStoreFunctionRequestPayload,
    CodexWebsiteStoreFunctionResponsePayload,
    CodexWebsiteStoreFunctionLogObjectPayload,
    CodexWebsiteStoreFunctionCallbackMessagePayload,
    CodexWebsiteStoreFunctionInvocationEventPayload
}
