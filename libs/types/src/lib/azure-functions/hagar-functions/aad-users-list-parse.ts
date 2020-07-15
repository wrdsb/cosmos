import * as Cosmos from "../common";

interface AADUsersListParseFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: AADUsersListParseFunctionRequestOperation;
}

interface AADUsersListParseFunctionResponse extends Cosmos.FunctionResponse {}

interface AADUsersListParseFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADUsersListParseFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUsersListParseFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

type AADUsersListParseFunctionRequestOperation =
  'actual-current-object-aad-id' |
  'actual-current-object-hagar-id' |
  'actual-current-object-userPrincipalName' |
  'actual-current-object-staff-aad-id' |
  'actual-current-object-staff-hagar-id' |
  'actual-current-object-staff-userPrincipalName' |
  'actual-current-object-students-aad-id' |
  'actual-current-object-students-hagar-id' |
  'actual-current-object-students-userPrincipalName'
;

interface AADUsersListParseFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADUsersListParseFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUsersListParseFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUsersListParseFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUsersListParseFunctionRequest,
    AADUsersListParseFunctionResponse,
    AADUsersListParseFunctionLogObject,
    AADUsersListParseFunctionCallbackMessage,
    AADUsersListParseFunctionInvocationEvent,
    AADUsersListParseFunctionRequestOperation,
    AADUsersListParseFunctionResponsePayload,
    AADUsersListParseFunctionLogObjectPayload,
    AADUsersListParseFunctionCallbackMessagePayload,
    AADUsersListParseFunctionInvocationEventPayload
}
