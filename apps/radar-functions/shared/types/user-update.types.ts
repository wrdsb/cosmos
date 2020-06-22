import { User } from "../teamViewerTypes";

interface UserUpdateFunctionRequest {
    readonly payload: UserUpdateFunctionRequestPayload;
}

interface UserUpdateFunctionResponse {}
interface UserUpdateFunctionLogObject {}
interface UserUpdateFunctionCallbackMessage {}
interface UserUpdateFunctionInvocationEvent {}

interface UserUpdateFunctionRequestPayload {
    readonly user: User;
}

interface UserUpdateFunctionResponsePayload {}
interface UserUpdateFunctionLogObjectPayload {}
interface UserUpdateFunctionCallbackMessagePayload {}
interface UserUpdateFunctionInvocationEventPayload {}

export {
    UserUpdateFunctionRequest,
    UserUpdateFunctionResponse,
    UserUpdateFunctionLogObject,
    UserUpdateFunctionCallbackMessage,
    UserUpdateFunctionInvocationEvent,
    UserUpdateFunctionRequestPayload,
    UserUpdateFunctionResponsePayload,
    UserUpdateFunctionLogObjectPayload,
    UserUpdateFunctionCallbackMessagePayload,
    UserUpdateFunctionInvocationEventPayload
}