import * as Cosmos from "../common";

interface AADUsersListFunctionRequest extends Cosmos.FunctionRequest {}

interface AADUsersListFunctionResponse extends Cosmos.FunctionResponse {}

interface AADUsersListFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADUsersListFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUsersListFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

// No payload required
interface AADUsersListFunctionRequestPayload extends Cosmos.FunctionRequestPayload {}

interface AADUsersListFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADUsersListFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUsersListFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUsersListFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUsersListFunctionRequest,
    AADUsersListFunctionResponse,
    AADUsersListFunctionLogObject,
    AADUsersListFunctionCallbackMessage,
    AADUsersListFunctionInvocationEvent,
    AADUsersListFunctionRequestPayload,
    AADUsersListFunctionResponsePayload,
    AADUsersListFunctionLogObjectPayload,
    AADUsersListFunctionCallbackMessagePayload,
    AADUsersListFunctionInvocationEventPayload
}
