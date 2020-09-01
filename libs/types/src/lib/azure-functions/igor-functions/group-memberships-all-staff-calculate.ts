import * as Cosmos from "../common";

interface GroupMembershipsAllStaffCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsAllStaffCalculateFunctionRequestPayload;
}

interface GroupMembershipsAllStaffCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsAllStaffCalculateFunctionResponsePayload;
}

interface GroupMembershipsAllStaffCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsAllStaffCalculateFunctionResponsePayload;
}

interface GroupMembershipsAllStaffCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsAllStaffCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsAllStaffCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsAllStaffCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GroupMembershipsAllStaffCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsAllStaffCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsAllStaffCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsAllStaffCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsAllStaffCalculateFunctionRequest,
    GroupMembershipsAllStaffCalculateFunctionResponse,
    GroupMembershipsAllStaffCalculateFunctionLogObject,
    GroupMembershipsAllStaffCalculateFunctionCallbackMessage,
    GroupMembershipsAllStaffCalculateFunctionInvocationEvent,
    GroupMembershipsAllStaffCalculateFunctionRequestPayload,
    GroupMembershipsAllStaffCalculateFunctionResponsePayload,
    GroupMembershipsAllStaffCalculateFunctionLogObjectPayload,
    GroupMembershipsAllStaffCalculateFunctionCallbackMessagePayload,
    GroupMembershipsAllStaffCalculateFunctionInvocationEventPayload
}
