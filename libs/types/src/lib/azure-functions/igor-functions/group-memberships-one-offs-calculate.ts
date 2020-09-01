import * as Cosmos from "../common";

interface GroupMembershipsOneOffsCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsOneOffsCalculateFunctionRequestPayload;
}

interface GroupMembershipsOneOffsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsOneOffsCalculateFunctionResponsePayload;
}

interface GroupMembershipsOneOffsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsOneOffsCalculateFunctionResponsePayload;
}

interface GroupMembershipsOneOffsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsOneOffsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsOneOffsCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsOneOffsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GroupMembershipsOneOffsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsOneOffsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsOneOffsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsOneOffsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsOneOffsCalculateFunctionRequest,
    GroupMembershipsOneOffsCalculateFunctionResponse,
    GroupMembershipsOneOffsCalculateFunctionLogObject,
    GroupMembershipsOneOffsCalculateFunctionCallbackMessage,
    GroupMembershipsOneOffsCalculateFunctionInvocationEvent,
    GroupMembershipsOneOffsCalculateFunctionRequestPayload,
    GroupMembershipsOneOffsCalculateFunctionResponsePayload,
    GroupMembershipsOneOffsCalculateFunctionLogObjectPayload,
    GroupMembershipsOneOffsCalculateFunctionCallbackMessagePayload,
    GroupMembershipsOneOffsCalculateFunctionInvocationEventPayload
}
