import * as Cosmos from "../common";

interface AADGroupMemberQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberQueryFunctionRequestPayload;
}

interface AADGroupMemberQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberQueryFunctionResponsePayload;
}

interface AADGroupMemberQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberQueryFunctionResponsePayload;
}

interface AADGroupMemberQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberQueryFunctionInvocationEventPayload;
}

interface AADGroupMemberQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberQueryFunctionRequest,
    AADGroupMemberQueryFunctionResponse,
    AADGroupMemberQueryFunctionLogObject,
    AADGroupMemberQueryFunctionCallbackMessage,
    AADGroupMemberQueryFunctionInvocationEvent,
    AADGroupMemberQueryFunctionRequestPayload,
    AADGroupMemberQueryFunctionResponsePayload,
    AADGroupMemberQueryFunctionLogObjectPayload,
    AADGroupMemberQueryFunctionCallbackMessagePayload,
    AADGroupMemberQueryFunctionInvocationEventPayload
}
