import * as Cosmos from "../common";

interface MembershipsStudentsCalculateFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsStudentsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsStudentsCalculateFunctionResponsePayload;
}

interface MembershipsStudentsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsStudentsCalculateFunctionResponsePayload;
}

interface MembershipsStudentsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsStudentsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsStudentsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsStudentsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsStudentsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsStudentsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsStudentsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsStudentsCalculateFunctionRequest,
    MembershipsStudentsCalculateFunctionResponse,
    MembershipsStudentsCalculateFunctionLogObject,
    MembershipsStudentsCalculateFunctionCallbackMessage,
    MembershipsStudentsCalculateFunctionInvocationEvent,
    MembershipsStudentsCalculateFunctionRequestPayload,
    MembershipsStudentsCalculateFunctionResponsePayload,
    MembershipsStudentsCalculateFunctionLogObjectPayload,
    MembershipsStudentsCalculateFunctionCallbackMessagePayload,
    MembershipsStudentsCalculateFunctionInvocationEventPayload
}
