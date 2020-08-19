import * as Cosmos from "../common";

interface CodexSchoolStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: CodexSchoolStoreFunctionRequestPayload;
}

interface CodexSchoolStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexSchoolStoreFunctionResponsePayload;
}

interface CodexSchoolStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexSchoolStoreFunctionResponsePayload;
}

interface CodexSchoolStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexSchoolStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexSchoolStoreFunctionInvocationEventPayload;
}

interface CodexSchoolStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexSchoolStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexSchoolStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexSchoolStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexSchoolStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexSchoolStoreFunctionRequest,
    CodexSchoolStoreFunctionResponse,
    CodexSchoolStoreFunctionLogObject,
    CodexSchoolStoreFunctionCallbackMessage,
    CodexSchoolStoreFunctionInvocationEvent,
    CodexSchoolStoreFunctionRequestPayload,
    CodexSchoolStoreFunctionResponsePayload,
    CodexSchoolStoreFunctionLogObjectPayload,
    CodexSchoolStoreFunctionCallbackMessagePayload,
    CodexSchoolStoreFunctionInvocationEventPayload
}
