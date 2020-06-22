import { Group } from "../teamViewerTypes";

interface GroupCreateFunctionRequest {
    readonly payload: GroupCreateFunctionRequestPayload;
}

interface GroupCreateFunctionResponse {}
interface GroupCreateFunctionLogObject {}
interface GroupCreateFunctionCallbackMessage {}
interface GroupCreateFunctionInvocationEvent {}

interface GroupCreateFunctionRequestPayload {
    readonly group: Group;
}

interface GroupCreateFunctionResponsePayload {}
interface GroupCreateFunctionLogObjectPayload {}
interface GroupCreateFunctionCallbackMessagePayload {}
interface GroupCreateFunctionInvocationEventPayload {}

export {
    GroupCreateFunctionRequest,
    GroupCreateFunctionResponse,
    GroupCreateFunctionLogObject,
    GroupCreateFunctionCallbackMessage,
    GroupCreateFunctionInvocationEvent,
    GroupCreateFunctionRequestPayload,
    GroupCreateFunctionResponsePayload,
    GroupCreateFunctionLogObjectPayload,
    GroupCreateFunctionCallbackMessagePayload,
    GroupCreateFunctionInvocationEventPayload
}