import { AADGroupMemberAddEmailFunctionRequestPayload } from "./aad-group-member-add-email";
import * as Cosmos from "../common";

interface AADGroupMembersAddBulkEmailFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberAddEmailFunctionRequestPayload[];
}

interface AADGroupMembersAddBulkEmailFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMembersAddBulkEmailFunctionResponsePayload;
}

interface AADGroupMembersAddBulkEmailFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMembersAddBulkEmailFunctionResponsePayload;
}

interface AADGroupMembersAddBulkEmailFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMembersAddBulkEmailFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMembersAddBulkEmailFunctionInvocationEventPayload;
}

//interface AADGroupMembersAddBulkEmailFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    //readonly groupID: string;
    //readonly memberEmails: string[];
//}

interface AADGroupMembersAddBulkEmailFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMembersAddBulkEmailFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMembersAddBulkEmailFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMembersAddBulkEmailFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMembersAddBulkEmailFunctionRequest,
    AADGroupMembersAddBulkEmailFunctionResponse,
    AADGroupMembersAddBulkEmailFunctionLogObject,
    AADGroupMembersAddBulkEmailFunctionCallbackMessage,
    AADGroupMembersAddBulkEmailFunctionInvocationEvent,
    //AADGroupMembersAddBulkEmailFunctionRequestPayload,
    AADGroupMembersAddBulkEmailFunctionResponsePayload,
    AADGroupMembersAddBulkEmailFunctionLogObjectPayload,
    AADGroupMembersAddBulkEmailFunctionCallbackMessagePayload,
    AADGroupMembersAddBulkEmailFunctionInvocationEventPayload
}
