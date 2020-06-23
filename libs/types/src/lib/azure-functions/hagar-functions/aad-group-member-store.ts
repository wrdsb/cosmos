import * as Cosmos from "../common";

interface AADGroupMemberStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: AADGroupMemberStoreFunctionRequestPayload;
}

interface AADGroupMemberStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberStoreFunctionResponsePayload;
}

interface AADGroupMemberStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberStoreFunctionResponsePayload;
}

interface AADGroupMemberStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberStoreFunctionInvocationEventPayload;
}

interface AADGroupMemberStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberStoreFunctionRequest,
    AADGroupMemberStoreFunctionResponse,
    AADGroupMemberStoreFunctionLogObject,
    AADGroupMemberStoreFunctionCallbackMessage,
    AADGroupMemberStoreFunctionInvocationEvent,
    AADGroupMemberStoreFunctionRequestPayload,
    AADGroupMemberStoreFunctionResponsePayload,
    AADGroupMemberStoreFunctionLogObjectPayload,
    AADGroupMemberStoreFunctionCallbackMessagePayload,
    AADGroupMemberStoreFunctionInvocationEventPayload
}
