type emailAddress = string;

interface UsersProvisionMultipleFunctionRequest {
    readonly payload: UsersProvisionMultipleFunctionRequestPayload;
}

interface UsersProvisionMultipleFunctionResponse {}
interface UsersProvisionMultipleFunctionLogObject {}
interface UsersProvisionMultipleFunctionCallbackMessage {}
interface UsersProvisionMultipleFunctionInvocationEvent {}

type UsersProvisionMultipleFunctionRequestPayload = emailAddress[];

interface UsersProvisionMultipleFunctionResponsePayload {}
interface UsersProvisionMultipleFunctionLogObjectPayload {}
interface UsersProvisionMultipleFunctionCallbackMessagePayload {}
interface UsersProvisionMultipleFunctionInvocationEventPayload {}

export {
    UsersProvisionMultipleFunctionRequest,
    UsersProvisionMultipleFunctionResponse,
    UsersProvisionMultipleFunctionLogObject,
    UsersProvisionMultipleFunctionCallbackMessage,
    UsersProvisionMultipleFunctionInvocationEvent,
    UsersProvisionMultipleFunctionRequestPayload,
    UsersProvisionMultipleFunctionResponsePayload,
    UsersProvisionMultipleFunctionLogObjectPayload,
    UsersProvisionMultipleFunctionCallbackMessagePayload,
    UsersProvisionMultipleFunctionInvocationEventPayload
}