import * as Cosmos from "../common";

interface GoogleGroupsMembershipsUnionsCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsUnionsCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsUnionsCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsUnionsCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsUnionsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsUnionsCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsUnionsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsUnionsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsUnionsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsUnionsCalculateFunctionRequest,
    GoogleGroupsMembershipsUnionsCalculateFunctionResponse,
    GoogleGroupsMembershipsUnionsCalculateFunctionLogObject,
    GoogleGroupsMembershipsUnionsCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsUnionsCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsUnionsCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsUnionsCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsUnionsCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsUnionsCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsUnionsCalculateFunctionInvocationEventPayload
}
