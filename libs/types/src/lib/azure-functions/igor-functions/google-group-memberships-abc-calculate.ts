import * as Cosmos from "../common";

interface GoogleGroupsMembershipsABCCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsABCCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsABCCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsABCCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsABCCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsABCCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsABCCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsABCCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsABCCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsABCCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly schoolCode: string;
}

interface GoogleGroupsMembershipsABCCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsABCCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsABCCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsABCCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsABCCalculateFunctionRequest,
    GoogleGroupsMembershipsABCCalculateFunctionResponse,
    GoogleGroupsMembershipsABCCalculateFunctionLogObject,
    GoogleGroupsMembershipsABCCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsABCCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsABCCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsABCCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsABCCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsABCCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsABCCalculateFunctionInvocationEventPayload
}
