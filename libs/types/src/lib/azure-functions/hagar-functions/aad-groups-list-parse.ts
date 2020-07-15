import * as Cosmos from "../common";

interface AADGroupsListParseFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: AADGroupsListParseFunctionRequestOperation;
}

interface AADGroupsListParseFunctionResponse extends Cosmos.FunctionResponse {}

interface AADGroupsListParseFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADGroupsListParseFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupsListParseFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

type AADGroupsListParseFunctionRequestOperation =
    'actual-current-object-aad-id' |
    'actual-current-object-hagar-id' |
    'actual-current-object-mailNickname'
;

interface AADGroupsListParseFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADGroupsListParseFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupsListParseFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupsListParseFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupsListParseFunctionRequest,
    AADGroupsListParseFunctionResponse,
    AADGroupsListParseFunctionLogObject,
    AADGroupsListParseFunctionCallbackMessage,
    AADGroupsListParseFunctionInvocationEvent,
    AADGroupsListParseFunctionRequestOperation,
    AADGroupsListParseFunctionResponsePayload,
    AADGroupsListParseFunctionLogObjectPayload,
    AADGroupsListParseFunctionCallbackMessagePayload,
    AADGroupsListParseFunctionInvocationEventPayload
}
