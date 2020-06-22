interface GroupUnshareFunctionRequest {
    readonly payload: GroupUnshareFunctionRequestPayload;
}

interface GroupUnshareFunctionResponse {}
interface GroupUnshareFunctionLogObject {}
interface GroupUnshareFunctionCallbackMessage {}
interface GroupUnshareFunctionInvocationEvent {}

interface GroupUnshareFunctionRequestPayload {
    readonly group_id: string;
    readonly user_id: string;
}

interface GroupUnshareFunctionResponsePayload {}
interface GroupUnshareFunctionLogObjectPayload {}
interface GroupUnshareFunctionCallbackMessagePayload {}
interface GroupUnshareFunctionInvocationEventPayload {}

export {
    GroupUnshareFunctionRequest,
    GroupUnshareFunctionResponse,
    GroupUnshareFunctionLogObject,
    GroupUnshareFunctionCallbackMessage,
    GroupUnshareFunctionInvocationEvent,
    GroupUnshareFunctionRequestPayload,
    GroupUnshareFunctionResponsePayload,
    GroupUnshareFunctionLogObjectPayload,
    GroupUnshareFunctionCallbackMessagePayload,
    GroupUnshareFunctionInvocationEventPayload
}