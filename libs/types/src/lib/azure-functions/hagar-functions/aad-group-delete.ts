interface AADGroupDeleteFunctionRequest {
    readonly payload: AADGroupDeleteFunctionRequestPayload;
}

interface AADGroupDeleteFunctionResponse {}
interface AADGroupDeleteFunctionLogObject {}
interface AADGroupDeleteFunctionCallbackMessage {}
interface AADGroupDeleteFunctionInvocationEvent {}

interface AADGroupDeleteFunctionRequestPayload {
    readonly groupID: string;
}

interface AADGroupDeleteFunctionResponsePayload {}
interface AADGroupDeleteFunctionLogObjectPayload {}
interface AADGroupDeleteFunctionCallbackMessagePayload {}
interface AADGroupDeleteFunctionInvocationEventPayload {}    

export {
    AADGroupDeleteFunctionRequest,
    AADGroupDeleteFunctionResponse,
    AADGroupDeleteFunctionLogObject,
    AADGroupDeleteFunctionCallbackMessage,
    AADGroupDeleteFunctionInvocationEvent,
    AADGroupDeleteFunctionRequestPayload,
    AADGroupDeleteFunctionResponsePayload,
    AADGroupDeleteFunctionLogObjectPayload,
    AADGroupDeleteFunctionCallbackMessagePayload,
    AADGroupDeleteFunctionInvocationEventPayload
}
