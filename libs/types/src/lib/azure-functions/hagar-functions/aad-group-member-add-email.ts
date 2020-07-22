import * as Cosmos from "../common";

interface AADGroupMemberAddEmailFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberAddEmailFunctionRequestPayload;
}

interface AADGroupMemberAddEmailFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberAddEmailFunctionResponsePayload;
}

interface AADGroupMemberAddEmailFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberAddEmailFunctionResponsePayload;
}

interface AADGroupMemberAddEmailFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberAddEmailFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberAddEmailFunctionInvocationEventPayload;
}

interface AADGroupMemberAddEmailFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groupID: string;
    readonly memberEmails: string[];
}

interface AADGroupMemberAddEmailFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberAddEmailFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberAddEmailFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberAddEmailFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberAddEmailFunctionRequest,
    AADGroupMemberAddEmailFunctionResponse,
    AADGroupMemberAddEmailFunctionLogObject,
    AADGroupMemberAddEmailFunctionCallbackMessage,
    AADGroupMemberAddEmailFunctionInvocationEvent,
    AADGroupMemberAddEmailFunctionRequestPayload,
    AADGroupMemberAddEmailFunctionResponsePayload,
    AADGroupMemberAddEmailFunctionLogObjectPayload,
    AADGroupMemberAddEmailFunctionCallbackMessagePayload,
    AADGroupMemberAddEmailFunctionInvocationEventPayload
}
