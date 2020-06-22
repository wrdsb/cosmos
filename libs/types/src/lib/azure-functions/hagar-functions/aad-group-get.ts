interface AADGroupGetFunctionRequest {
    readonly payload: AADGroupGetFunctionRequestPayload;
}

interface AADGroupGetFunctionResponse {}
interface AADGroupGetFunctionLogObject {}
interface AADGroupGetFunctionCallbackMessage {}
interface AADGroupGetFunctionInvocationEvent {}

interface AADGroupGetFunctionRequestPayload {
    readonly groupID: string;
}

interface AADGroupGetFunctionResponsePayload {}
interface AADGroupGetFunctionLogObjectPayload {}
interface AADGroupGetFunctionCallbackMessagePayload {}
interface AADGroupGetFunctionInvocationEventPayload {}    

export {
    AADGroupGetFunctionRequest,
    AADGroupGetFunctionResponse,
    AADGroupGetFunctionLogObject,
    AADGroupGetFunctionCallbackMessage,
    AADGroupGetFunctionInvocationEvent,
    AADGroupGetFunctionRequestPayload,
    AADGroupGetFunctionResponsePayload,
    AADGroupGetFunctionLogObjectPayload,
    AADGroupGetFunctionCallbackMessagePayload,
    AADGroupGetFunctionInvocationEventPayload
}
