import * as Cosmos from "../common";

interface GroupMembershipsABCCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GroupMembershipsABCCalculateAllFunctionRequestPayload;
}

interface GroupMembershipsABCCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GroupMembershipsABCCalculateAllFunctionResponsePayload;
}

interface GroupMembershipsABCCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GroupMembershipsABCCalculateAllFunctionResponsePayload;
}

interface GroupMembershipsABCCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupMembershipsABCCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GroupMembershipsABCCalculateAllFunctionInvocationEventPayload;
}

interface GroupMembershipsABCCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GroupMembershipsABCCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GroupMembershipsABCCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupMembershipsABCCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupMembershipsABCCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupMembershipsABCCalculateAllFunctionRequest,
    GroupMembershipsABCCalculateAllFunctionResponse,
    GroupMembershipsABCCalculateAllFunctionLogObject,
    GroupMembershipsABCCalculateAllFunctionCallbackMessage,
    GroupMembershipsABCCalculateAllFunctionInvocationEvent,
    GroupMembershipsABCCalculateAllFunctionRequestPayload,
    GroupMembershipsABCCalculateAllFunctionResponsePayload,
    GroupMembershipsABCCalculateAllFunctionLogObjectPayload,
    GroupMembershipsABCCalculateAllFunctionCallbackMessagePayload,
    GroupMembershipsABCCalculateAllFunctionInvocationEventPayload
}
