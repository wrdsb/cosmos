import * as Cosmos from "../common";

interface MembershipsABCCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsABCCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsABCCalculateAllFunctionResponsePayload;
}

interface MembershipsABCCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsABCCalculateAllFunctionResponsePayload;
}

interface MembershipsABCCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsABCCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsABCCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsABCCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsABCCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsABCCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsABCCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsABCCalculateAllFunctionRequest,
    MembershipsABCCalculateAllFunctionResponse,
    MembershipsABCCalculateAllFunctionLogObject,
    MembershipsABCCalculateAllFunctionCallbackMessage,
    MembershipsABCCalculateAllFunctionInvocationEvent,
    MembershipsABCCalculateAllFunctionRequestPayload,
    MembershipsABCCalculateAllFunctionResponsePayload,
    MembershipsABCCalculateAllFunctionLogObjectPayload,
    MembershipsABCCalculateAllFunctionCallbackMessagePayload,
    MembershipsABCCalculateAllFunctionInvocationEventPayload
}
