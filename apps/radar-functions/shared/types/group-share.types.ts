interface GroupShareFunctionRequest {
    readonly payload: GroupShareFunctionRequestPayload;
}

interface GroupShareFunctionResponse {}
interface GroupShareFunctionLogObject {}
interface GroupShareFunctionCallbackMessage {}
interface GroupShareFunctionInvocationEvent {}

interface GroupShareFunctionRequestPayload {
    readonly group_id: string;
    readonly user_id: string;
}

interface GroupShareFunctionResponsePayload {}
interface GroupShareFunctionLogObjectPayload {}
interface GroupShareFunctionCallbackMessagePayload {}
interface GroupShareFunctionInvocationEventPayload {}

export {
    GroupShareFunctionRequest,
    GroupShareFunctionResponse,
    GroupShareFunctionLogObject,
    GroupShareFunctionCallbackMessage,
    GroupShareFunctionInvocationEvent,
    GroupShareFunctionRequestPayload,
    GroupShareFunctionResponsePayload,
    GroupShareFunctionLogObjectPayload,
    GroupShareFunctionCallbackMessagePayload,
    GroupShareFunctionInvocationEventPayload
}