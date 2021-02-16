import * as Cosmos from "../common";

interface GoogleGroupsGetAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsGetAllFunctionRequestPayload;
}

interface GoogleGroupsGetAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsGetAllFunctionResponsePayload;
}

interface GoogleGroupsGetAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsGetAllFunctionResponsePayload;
}

interface GoogleGroupsGetAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsGetAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsGetAllFunctionInvocationEventPayload;
}

interface GoogleGroupsGetAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsGetAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsGetAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsGetAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsGetAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsGetAllFunctionRequest,
    GoogleGroupsGetAllFunctionResponse,
    GoogleGroupsGetAllFunctionLogObject,
    GoogleGroupsGetAllFunctionCallbackMessage,
    GoogleGroupsGetAllFunctionInvocationEvent,
    GoogleGroupsGetAllFunctionRequestPayload,
    GoogleGroupsGetAllFunctionResponsePayload,
    GoogleGroupsGetAllFunctionLogObjectPayload,
    GoogleGroupsGetAllFunctionCallbackMessagePayload,
    GoogleGroupsGetAllFunctionInvocationEventPayload
}
