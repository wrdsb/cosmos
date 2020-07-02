import * as Cosmos from "../common";

interface AADGroupMembersListFunctionRequest extends Cosmos.FunctionRequest {}

interface AADGroupMembersListFunctionResponse extends Cosmos.FunctionResponse {}

interface AADGroupMembersListFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADGroupMembersListFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMembersListFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

// No payload required
interface AADGroupMembersListFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groupID: string;
}

interface AADGroupMembersListFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADGroupMembersListFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMembersListFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMembersListFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMembersListFunctionRequest,
    AADGroupMembersListFunctionResponse,
    AADGroupMembersListFunctionLogObject,
    AADGroupMembersListFunctionCallbackMessage,
    AADGroupMembersListFunctionInvocationEvent,
    AADGroupMembersListFunctionRequestPayload,
    AADGroupMembersListFunctionResponsePayload,
    AADGroupMembersListFunctionLogObjectPayload,
    AADGroupMembersListFunctionCallbackMessagePayload,
    AADGroupMembersListFunctionInvocationEventPayload
}
