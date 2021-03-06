import * as Cosmos from "../common";

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsStudentsABCCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsStudentsABCCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsStudentsABCCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly schoolCode: string;
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsStudentsABCCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsStudentsABCCalculateFunctionRequest,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionResponse,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionLogObject,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsStudentsABCCalculateFunctionInvocationEventPayload
}
