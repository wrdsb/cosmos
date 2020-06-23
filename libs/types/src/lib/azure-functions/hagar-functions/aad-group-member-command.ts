import * as Cosmos from "../common";

interface AADGroupMemberCommandFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CommandFunctionOperation;
    readonly payload: AADGroupMemberCommandFunctionRequestPayload;
}

interface AADGroupMemberCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberCommandFunctionResponsePayload;
}

interface AADGroupMemberCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberCommandFunctionResponsePayload;
}

interface AADGroupMemberCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberCommandFunctionInvocationEventPayload;
}

interface AADGroupMemberCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberCommandFunctionRequest,
    AADGroupMemberCommandFunctionResponse,
    AADGroupMemberCommandFunctionLogObject,
    AADGroupMemberCommandFunctionCallbackMessage,
    AADGroupMemberCommandFunctionInvocationEvent,
    AADGroupMemberCommandFunctionRequestPayload,
    AADGroupMemberCommandFunctionResponsePayload,
    AADGroupMemberCommandFunctionLogObjectPayload,
    AADGroupMemberCommandFunctionCallbackMessagePayload,
    AADGroupMemberCommandFunctionInvocationEventPayload
}
