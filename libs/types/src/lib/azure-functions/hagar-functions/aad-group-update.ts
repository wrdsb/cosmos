import { Group } from "@microsoft/microsoft-graph-types";

interface AADGroupUpdateFunctionRequest {
    readonly payload: AADGroupUpdateFunctionRequestPayload;
}

interface AADGroupUpdateFunctionResponse {}
interface AADGroupUpdateFunctionLogObject {}
interface AADGroupUpdateFunctionCallbackMessage {}
interface AADGroupUpdateFunctionInvocationEvent {}

interface AADGroupUpdateFunctionRequestPayload {
    readonly group: Group;
}

interface AADGroupUpdateFunctionResponsePayload {}
interface AADGroupUpdateFunctionLogObjectPayload {}
interface AADGroupUpdateFunctionCallbackMessagePayload {}
interface AADGroupUpdateFunctionInvocationEventPayload {}    

export {
    AADGroupUpdateFunctionRequest,
    AADGroupUpdateFunctionResponse,
    AADGroupUpdateFunctionLogObject,
    AADGroupUpdateFunctionCallbackMessage,
    AADGroupUpdateFunctionInvocationEvent,
    AADGroupUpdateFunctionRequestPayload,
    AADGroupUpdateFunctionResponsePayload,
    AADGroupUpdateFunctionLogObjectPayload,
    AADGroupUpdateFunctionCallbackMessagePayload,
    AADGroupUpdateFunctionInvocationEventPayload
}
