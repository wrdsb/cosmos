import * as Cosmos from "../common";

interface MembershipsABCCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: MembershipsABCCalculateFunctionRequestPayload
}

interface MembershipsABCCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsABCCalculateFunctionResponsePayload;
}

interface MembershipsABCCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsABCCalculateFunctionResponsePayload;
}

interface MembershipsABCCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsABCCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsABCCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly school_code: string;
}

interface MembershipsABCCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsABCCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsABCCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsABCCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsABCCalculateFunctionRequest,
    MembershipsABCCalculateFunctionResponse,
    MembershipsABCCalculateFunctionLogObject,
    MembershipsABCCalculateFunctionCallbackMessage,
    MembershipsABCCalculateFunctionInvocationEvent,
    MembershipsABCCalculateFunctionRequestPayload,
    MembershipsABCCalculateFunctionResponsePayload,
    MembershipsABCCalculateFunctionLogObjectPayload,
    MembershipsABCCalculateFunctionCallbackMessagePayload,
    MembershipsABCCalculateFunctionInvocationEventPayload
}
