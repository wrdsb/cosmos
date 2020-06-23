import * as Cosmos from "../common";

interface AADGroupMemberRemoveFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberRemoveFunctionRequestPayload;
}

interface AADGroupMemberRemoveFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberRemoveFunctionResponsePayload;
}

interface AADGroupMemberRemoveFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberRemoveFunctionResponsePayload;
}

interface AADGroupMemberRemoveFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberRemoveFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberRemoveFunctionInvocationEventPayload;
}

interface AADGroupMemberRemoveFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberRemoveFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberRemoveFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberRemoveFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberRemoveFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberRemoveFunctionRequest,
    AADGroupMemberRemoveFunctionResponse,
    AADGroupMemberRemoveFunctionLogObject,
    AADGroupMemberRemoveFunctionCallbackMessage,
    AADGroupMemberRemoveFunctionInvocationEvent,
    AADGroupMemberRemoveFunctionRequestPayload,
    AADGroupMemberRemoveFunctionResponsePayload,
    AADGroupMemberRemoveFunctionLogObjectPayload,
    AADGroupMemberRemoveFunctionCallbackMessagePayload,
    AADGroupMemberRemoveFunctionInvocationEventPayload
}
