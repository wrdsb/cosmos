import * as Cosmos from "../common";

interface GoogleGroupsMembershipsABCCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsABCCalculateAllFunctionRequestPayload;
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsABCCalculateAllFunctionResponsePayload;
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsABCCalculateAllFunctionResponsePayload;
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsABCCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsABCCalculateAllFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsABCCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsABCCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsABCCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsABCCalculateAllFunctionRequest,
    GoogleGroupsMembershipsABCCalculateAllFunctionResponse,
    GoogleGroupsMembershipsABCCalculateAllFunctionLogObject,
    GoogleGroupsMembershipsABCCalculateAllFunctionCallbackMessage,
    GoogleGroupsMembershipsABCCalculateAllFunctionInvocationEvent,
    GoogleGroupsMembershipsABCCalculateAllFunctionRequestPayload,
    GoogleGroupsMembershipsABCCalculateAllFunctionResponsePayload,
    GoogleGroupsMembershipsABCCalculateAllFunctionLogObjectPayload,
    GoogleGroupsMembershipsABCCalculateAllFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsABCCalculateAllFunctionInvocationEventPayload
}
