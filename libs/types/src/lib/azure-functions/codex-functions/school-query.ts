import * as Cosmos from "../common";

interface CodexSchoolQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexSchoolQueryFunctionRequestPayload;
}

interface CodexSchoolQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexSchoolQueryFunctionResponsePayload;
}

interface CodexSchoolQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexSchoolQueryFunctionResponsePayload;
}

interface CodexSchoolQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexSchoolQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexSchoolQueryFunctionInvocationEventPayload;
}

interface CodexSchoolQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexSchoolQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexSchoolQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexSchoolQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexSchoolQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexSchoolQueryFunctionRequest,
    CodexSchoolQueryFunctionResponse,
    CodexSchoolQueryFunctionLogObject,
    CodexSchoolQueryFunctionCallbackMessage,
    CodexSchoolQueryFunctionInvocationEvent,
    CodexSchoolQueryFunctionRequestPayload,
    CodexSchoolQueryFunctionResponsePayload,
    CodexSchoolQueryFunctionLogObjectPayload,
    CodexSchoolQueryFunctionCallbackMessagePayload,
    CodexSchoolQueryFunctionInvocationEventPayload
}
