import * as Cosmos from "../common";

interface GroupMembershipsStudentsCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsStudentsCalculateFunctionRequestPayload;
}

interface GroupMembershipsStudentsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsStudentsCalculateFunctionResponsePayload;
}

interface GroupMembershipsStudentsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsStudentsCalculateFunctionResponsePayload;
}

interface GroupMembershipsStudentsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsStudentsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsStudentsCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsStudentsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly schoolCode: string;
}

interface GroupMembershipsStudentsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsStudentsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsStudentsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsStudentsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsStudentsCalculateFunctionRequest,
    GroupMembershipsStudentsCalculateFunctionResponse,
    GroupMembershipsStudentsCalculateFunctionLogObject,
    GroupMembershipsStudentsCalculateFunctionCallbackMessage,
    GroupMembershipsStudentsCalculateFunctionInvocationEvent,
    GroupMembershipsStudentsCalculateFunctionRequestPayload,
    GroupMembershipsStudentsCalculateFunctionResponsePayload,
    GroupMembershipsStudentsCalculateFunctionLogObjectPayload,
    GroupMembershipsStudentsCalculateFunctionCallbackMessagePayload,
    GroupMembershipsStudentsCalculateFunctionInvocationEventPayload
}
