import * as Cosmos from "../common";

interface GroupMembershipsABCCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsABCCalculateFunctionRequestPayload;
}

interface GroupMembershipsABCCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsABCCalculateFunctionResponsePayload;
}

interface GroupMembershipsABCCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsABCCalculateFunctionResponsePayload;
}

interface GroupMembershipsABCCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsABCCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsABCCalculateFunctionInvocationEventPayload;
}

interface GroupMembershipsABCCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly schoolCode: string;
}

interface GroupMembershipsABCCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsABCCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsABCCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsABCCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsABCCalculateFunctionRequest,
    GroupMembershipsABCCalculateFunctionResponse,
    GroupMembershipsABCCalculateFunctionLogObject,
    GroupMembershipsABCCalculateFunctionCallbackMessage,
    GroupMembershipsABCCalculateFunctionInvocationEvent,
    GroupMembershipsABCCalculateFunctionRequestPayload,
    GroupMembershipsABCCalculateFunctionResponsePayload,
    GroupMembershipsABCCalculateFunctionLogObjectPayload,
    GroupMembershipsABCCalculateFunctionCallbackMessagePayload,
    GroupMembershipsABCCalculateFunctionInvocationEventPayload
}
