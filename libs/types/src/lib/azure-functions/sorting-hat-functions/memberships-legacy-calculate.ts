import * as Cosmos from "../common";

interface MembershipsLegacyCalculateFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsLegacyCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsLegacyCalculateFunctionResponsePayload;
}

interface MembershipsLegacyCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsLegacyCalculateFunctionResponsePayload;
}

interface MembershipsLegacyCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsLegacyCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsLegacyCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsLegacyCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsLegacyCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsLegacyCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsLegacyCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsLegacyCalculateFunctionRequest,
    MembershipsLegacyCalculateFunctionResponse,
    MembershipsLegacyCalculateFunctionLogObject,
    MembershipsLegacyCalculateFunctionCallbackMessage,
    MembershipsLegacyCalculateFunctionInvocationEvent,
    MembershipsLegacyCalculateFunctionRequestPayload,
    MembershipsLegacyCalculateFunctionResponsePayload,
    MembershipsLegacyCalculateFunctionLogObjectPayload,
    MembershipsLegacyCalculateFunctionCallbackMessagePayload,
    MembershipsLegacyCalculateFunctionInvocationEventPayload
}
