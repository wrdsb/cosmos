import * as Cosmos from "../common";

interface AADUsersGetBulkFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADUsersGetBulkFunctionRequestPayload;
}

interface AADUsersGetBulkFunctionResponse extends Cosmos.FunctionResponse {}

interface AADUsersGetBulkFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADUsersGetBulkFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUsersGetBulkFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface AADUsersGetBulkFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly userIDs: string[];
}

interface AADUsersGetBulkFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADUsersGetBulkFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUsersGetBulkFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUsersGetBulkFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUsersGetBulkFunctionRequest,
    AADUsersGetBulkFunctionResponse,
    AADUsersGetBulkFunctionLogObject,
    AADUsersGetBulkFunctionCallbackMessage,
    AADUsersGetBulkFunctionInvocationEvent,
    AADUsersGetBulkFunctionRequestPayload,
    AADUsersGetBulkFunctionResponsePayload,
    AADUsersGetBulkFunctionLogObjectPayload,
    AADUsersGetBulkFunctionCallbackMessagePayload,
    AADUsersGetBulkFunctionInvocationEventPayload
}
