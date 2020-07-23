import * as Cosmos from "../common";

interface MembershipsAllStaffCalculateFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsAllStaffCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsAllStaffCalculateFunctionResponsePayload;
}

interface MembershipsAllStaffCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsAllStaffCalculateFunctionResponsePayload;
}

interface MembershipsAllStaffCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsAllStaffCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsAllStaffCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsAllStaffCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsAllStaffCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsAllStaffCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsAllStaffCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsAllStaffCalculateFunctionRequest,
    MembershipsAllStaffCalculateFunctionResponse,
    MembershipsAllStaffCalculateFunctionLogObject,
    MembershipsAllStaffCalculateFunctionCallbackMessage,
    MembershipsAllStaffCalculateFunctionInvocationEvent,
    MembershipsAllStaffCalculateFunctionRequestPayload,
    MembershipsAllStaffCalculateFunctionResponsePayload,
    MembershipsAllStaffCalculateFunctionLogObjectPayload,
    MembershipsAllStaffCalculateFunctionCallbackMessagePayload,
    MembershipsAllStaffCalculateFunctionInvocationEventPayload
}
