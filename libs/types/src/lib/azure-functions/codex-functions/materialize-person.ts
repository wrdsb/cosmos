import * as Cosmos from "../common";

interface CodexMaterializePersonFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexMaterializePersonFunctionRequestPayload;
}

interface CodexMaterializePersonFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexMaterializePersonFunctionResponsePayload;
}

interface CodexMaterializePersonFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexMaterializePersonFunctionResponsePayload;
}

interface CodexMaterializePersonFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexMaterializePersonFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexMaterializePersonFunctionInvocationEventPayload;
}

interface CodexMaterializePersonFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexMaterializePersonFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexMaterializePersonFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexMaterializePersonFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexMaterializePersonFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexMaterializePersonFunctionRequest,
    CodexMaterializePersonFunctionResponse,
    CodexMaterializePersonFunctionLogObject,
    CodexMaterializePersonFunctionCallbackMessage,
    CodexMaterializePersonFunctionInvocationEvent,
    CodexMaterializePersonFunctionRequestPayload,
    CodexMaterializePersonFunctionResponsePayload,
    CodexMaterializePersonFunctionLogObjectPayload,
    CodexMaterializePersonFunctionCallbackMessagePayload,
    CodexMaterializePersonFunctionInvocationEventPayload
}
