import * as Cosmos from "../common";

interface AADGroupMemberGetFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberGetFunctionRequestPayload;
}

interface AADGroupMemberGetFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberGetFunctionResponsePayload;
}

interface AADGroupMemberGetFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberGetFunctionResponsePayload;
}

interface AADGroupMemberGetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberGetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberGetFunctionInvocationEventPayload;
}

interface AADGroupMemberGetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupMemberGetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberGetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberGetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberGetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberGetFunctionRequest,
    AADGroupMemberGetFunctionResponse,
    AADGroupMemberGetFunctionLogObject,
    AADGroupMemberGetFunctionCallbackMessage,
    AADGroupMemberGetFunctionInvocationEvent,
    AADGroupMemberGetFunctionRequestPayload,
    AADGroupMemberGetFunctionResponsePayload,
    AADGroupMemberGetFunctionLogObjectPayload,
    AADGroupMemberGetFunctionCallbackMessagePayload,
    AADGroupMemberGetFunctionInvocationEventPayload
}
