import * as Cosmos from "../common";

interface GroupMembershipsRolesCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsRolesCalculateFunctionRequestPayload;
}

interface GroupMembershipsRolesCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsRolesCalculateFunctionResponsePayload;
}

interface GroupMembershipsRolesCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsRolesCalculateFunctionResponsePayload;
}

interface GroupMembershipsRolesCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsRolesCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsRolesCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsRolesCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GroupMembershipsRolesCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsRolesCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsRolesCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsRolesCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsRolesCalculateFunctionRequest,
    GroupMembershipsRolesCalculateFunctionResponse,
    GroupMembershipsRolesCalculateFunctionLogObject,
    GroupMembershipsRolesCalculateFunctionCallbackMessage,
    GroupMembershipsRolesCalculateFunctionInvocationEvent,
    GroupMembershipsRolesCalculateFunctionRequestPayload,
    GroupMembershipsRolesCalculateFunctionResponsePayload,
    GroupMembershipsRolesCalculateFunctionLogObjectPayload,
    GroupMembershipsRolesCalculateFunctionCallbackMessagePayload,
    GroupMembershipsRolesCalculateFunctionInvocationEventPayload
}
