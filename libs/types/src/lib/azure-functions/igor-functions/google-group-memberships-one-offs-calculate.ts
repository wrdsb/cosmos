import * as Cosmos from "../common";

interface GoogleGroupsMembershipsOneOffsCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsOneOffsCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsOneOffsCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsOneOffsCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsOneOffsCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsOneOffsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsOneOffsCalculateFunctionRequest,
    GoogleGroupsMembershipsOneOffsCalculateFunctionResponse,
    GoogleGroupsMembershipsOneOffsCalculateFunctionLogObject,
    GoogleGroupsMembershipsOneOffsCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsOneOffsCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsOneOffsCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsOneOffsCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsOneOffsCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsOneOffsCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsOneOffsCalculateFunctionInvocationEventPayload
}
