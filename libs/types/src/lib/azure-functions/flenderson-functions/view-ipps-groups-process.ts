import * as Cosmos from "../common";

interface ViewIPPSGroupsProcessFunctionRequest {
    readonly payload: ViewIPPSGroupsProcessFunctionRequestPayload;
}

interface ViewIPPSGroupsProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSGroupsProcessFunctionResponsePayload;
}

interface ViewIPPSGroupsProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSGroupsProcessFunctionResponsePayload;
}

interface ViewIPPSGroupsProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSGroupsProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSGroupsProcessFunctionInvocationEventPayload;
}

interface ViewIPPSGroupsProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSGroupsProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSGroupsProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSGroupsProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSGroupsProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSGroupsProcessFunctionRequest,
    ViewIPPSGroupsProcessFunctionResponse,
    ViewIPPSGroupsProcessFunctionLogObject,
    ViewIPPSGroupsProcessFunctionCallbackMessage,
    ViewIPPSGroupsProcessFunctionInvocationEvent,
    ViewIPPSGroupsProcessFunctionRequestPayload,
    ViewIPPSGroupsProcessFunctionResponsePayload,
    ViewIPPSGroupsProcessFunctionLogObjectPayload,
    ViewIPPSGroupsProcessFunctionCallbackMessagePayload,
    ViewIPPSGroupsProcessFunctionInvocationEventPayload
}
