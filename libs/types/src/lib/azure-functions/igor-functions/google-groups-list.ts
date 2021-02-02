import * as Cosmos from "../common";

interface GoogleGroupsListFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsListFunctionRequestPayload;
}

interface GoogleGroupsListFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsListFunctionResponsePayload;
}

interface GoogleGroupsListFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsListFunctionResponsePayload;
}

interface GoogleGroupsListFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsListFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsListFunctionInvocationEventPayload;
}

interface GoogleGroupsListFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsListFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsListFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsListFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsListFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsListFunctionRequest,
    GoogleGroupsListFunctionResponse,
    GoogleGroupsListFunctionLogObject,
    GoogleGroupsListFunctionCallbackMessage,
    GoogleGroupsListFunctionInvocationEvent,
    GoogleGroupsListFunctionRequestPayload,
    GoogleGroupsListFunctionResponsePayload,
    GoogleGroupsListFunctionLogObjectPayload,
    GoogleGroupsListFunctionCallbackMessagePayload,
    GoogleGroupsListFunctionInvocationEventPayload
}
