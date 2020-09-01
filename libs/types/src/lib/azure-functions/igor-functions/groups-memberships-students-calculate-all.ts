import * as Cosmos from "../common";

interface GroupMembershipsStudentsCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsStudentsCalculateAllFunctionRequestPayload;
}

interface GroupMembershipsStudentsCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsStudentsCalculateAllFunctionResponsePayload;
}

interface GroupMembershipsStudentsCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsStudentsCalculateAllFunctionResponsePayload;
}

interface GroupMembershipsStudentsCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsStudentsCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsStudentsCalculateAllFunctionInvocationEventPayload;
}

interface GroupMembershipsStudentsCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly schoolCode: string;
}

interface GroupMembershipsStudentsCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsStudentsCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsStudentsCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsStudentsCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsStudentsCalculateAllFunctionRequest,
    GroupMembershipsStudentsCalculateAllFunctionResponse,
    GroupMembershipsStudentsCalculateAllFunctionLogObject,
    GroupMembershipsStudentsCalculateAllFunctionCallbackMessage,
    GroupMembershipsStudentsCalculateAllFunctionInvocationEvent,
    GroupMembershipsStudentsCalculateAllFunctionRequestPayload,
    GroupMembershipsStudentsCalculateAllFunctionResponsePayload,
    GroupMembershipsStudentsCalculateAllFunctionLogObjectPayload,
    GroupMembershipsStudentsCalculateAllFunctionCallbackMessagePayload,
    GroupMembershipsStudentsCalculateAllFunctionInvocationEventPayload
}
