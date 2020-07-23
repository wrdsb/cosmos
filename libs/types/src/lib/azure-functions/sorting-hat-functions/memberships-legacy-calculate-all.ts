import * as Cosmos from "../common";

interface MembershipsLegacyCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsLegacyCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsLegacyCalculateAllFunctionResponsePayload;
}

interface MembershipsLegacyCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsLegacyCalculateAllFunctionResponsePayload;
}

interface MembershipsLegacyCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsLegacyCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsLegacyCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsLegacyCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsLegacyCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsLegacyCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsLegacyCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsLegacyCalculateAllFunctionRequest,
    MembershipsLegacyCalculateAllFunctionResponse,
    MembershipsLegacyCalculateAllFunctionLogObject,
    MembershipsLegacyCalculateAllFunctionCallbackMessage,
    MembershipsLegacyCalculateAllFunctionInvocationEvent,
    MembershipsLegacyCalculateAllFunctionRequestPayload,
    MembershipsLegacyCalculateAllFunctionResponsePayload,
    MembershipsLegacyCalculateAllFunctionLogObjectPayload,
    MembershipsLegacyCalculateAllFunctionCallbackMessagePayload,
    MembershipsLegacyCalculateAllFunctionInvocationEventPayload
}
