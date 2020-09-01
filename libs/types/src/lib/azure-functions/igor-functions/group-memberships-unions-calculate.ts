import * as Cosmos from "../common";

interface GroupMembershipsUnionsCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsUnionsCalculateFunctionRequestPayload;
}

interface GroupMembershipsUnionsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsUnionsCalculateFunctionResponsePayload;
}

interface GroupMembershipsUnionsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsUnionsCalculateFunctionResponsePayload;
}

interface GroupMembershipsUnionsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsUnionsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsUnionsCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsUnionsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GroupMembershipsUnionsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsUnionsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsUnionsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsUnionsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsUnionsCalculateFunctionRequest,
    GroupMembershipsUnionsCalculateFunctionResponse,
    GroupMembershipsUnionsCalculateFunctionLogObject,
    GroupMembershipsUnionsCalculateFunctionCallbackMessage,
    GroupMembershipsUnionsCalculateFunctionInvocationEvent,
    GroupMembershipsUnionsCalculateFunctionRequestPayload,
    GroupMembershipsUnionsCalculateFunctionResponsePayload,
    GroupMembershipsUnionsCalculateFunctionLogObjectPayload,
    GroupMembershipsUnionsCalculateFunctionCallbackMessagePayload,
    GroupMembershipsUnionsCalculateFunctionInvocationEventPayload
}
