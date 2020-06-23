import * as Cosmos from "../common";

interface AADGroupMemberAddFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberAddFunctionRequestPayload;
}

interface AADGroupMemberAddFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberAddFunctionResponsePayload;
}

interface AADGroupMemberAddFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberAddFunctionResponsePayload;
}

interface AADGroupMemberAddFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberAddFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberAddFunctionInvocationEventPayload;
}

interface AADGroupMemberAddFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberAddFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberAddFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberAddFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberAddFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberAddFunctionRequest,
    AADGroupMemberAddFunctionResponse,
    AADGroupMemberAddFunctionLogObject,
    AADGroupMemberAddFunctionCallbackMessage,
    AADGroupMemberAddFunctionInvocationEvent,
    AADGroupMemberAddFunctionRequestPayload,
    AADGroupMemberAddFunctionResponsePayload,
    AADGroupMemberAddFunctionLogObjectPayload,
    AADGroupMemberAddFunctionCallbackMessagePayload,
    AADGroupMemberAddFunctionInvocationEventPayload
}
