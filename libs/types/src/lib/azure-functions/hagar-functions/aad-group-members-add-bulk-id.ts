import { AADGroupMemberAddIDFunctionRequestPayload } from "./aad-group-member-add-id";
import * as Cosmos from "../common";

interface AADGroupMembersAddBulkIDFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberAddIDFunctionRequestPayload[];
}

interface AADGroupMembersAddBulkIDFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMembersAddBulkIDFunctionResponsePayload;
}

interface AADGroupMembersAddBulkIDFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMembersAddBulkIDFunctionResponsePayload;
}

interface AADGroupMembersAddBulkIDFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMembersAddBulkIDFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMembersAddBulkIDFunctionInvocationEventPayload;
}

//interface AADGroupMembersAddBulkIDFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    //readonly groupID: string;
    //readonly memberIDs: string[];
//}

interface AADGroupMembersAddBulkIDFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMembersAddBulkIDFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMembersAddBulkIDFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMembersAddBulkIDFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMembersAddBulkIDFunctionRequest,
    AADGroupMembersAddBulkIDFunctionResponse,
    AADGroupMembersAddBulkIDFunctionLogObject,
    AADGroupMembersAddBulkIDFunctionCallbackMessage,
    AADGroupMembersAddBulkIDFunctionInvocationEvent,
    //AADGroupMembersAddBulkIDFunctionRequestPayload,
    AADGroupMembersAddBulkIDFunctionResponsePayload,
    AADGroupMembersAddBulkIDFunctionLogObjectPayload,
    AADGroupMembersAddBulkIDFunctionCallbackMessagePayload,
    AADGroupMembersAddBulkIDFunctionInvocationEventPayload
}
