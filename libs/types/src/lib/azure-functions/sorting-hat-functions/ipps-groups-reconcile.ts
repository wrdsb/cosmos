import * as Cosmos from "../common";

interface IPPSGroupsReconcileFunctionRequest extends Cosmos.FunctionRequest {
}

interface IPPSGroupsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSGroupsReconcileFunctionResponsePayload;
}

interface IPPSGroupsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSGroupsReconcileFunctionResponsePayload;
}

interface IPPSGroupsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSGroupsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface IPPSGroupsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSGroupsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSGroupsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSGroupsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSGroupsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSGroupsReconcileFunctionRequest,
    IPPSGroupsReconcileFunctionResponse,
    IPPSGroupsReconcileFunctionLogObject,
    IPPSGroupsReconcileFunctionCallbackMessage,
    IPPSGroupsReconcileFunctionInvocationEvent,
    IPPSGroupsReconcileFunctionRequestPayload,
    IPPSGroupsReconcileFunctionResponsePayload,
    IPPSGroupsReconcileFunctionLogObjectPayload,
    IPPSGroupsReconcileFunctionCallbackMessagePayload,
    IPPSGroupsReconcileFunctionInvocationEventPayload
}
