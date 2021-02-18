import * as Cosmos from "../common";

interface IPPSEmployeeGroupsReconcileFunctionRequest {
    readonly payload: IPPSEmployeeGroupsReconcileFunctionRequestPayload;
}

interface IPPSEmployeeGroupsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSEmployeeGroupsReconcileFunctionResponsePayload;
}

interface IPPSEmployeeGroupsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSEmployeeGroupsReconcileFunctionResponsePayload;
}

interface IPPSEmployeeGroupsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSEmployeeGroupsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSEmployeeGroupsReconcileFunctionInvocationEventPayload;
}

interface IPPSEmployeeGroupsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSEmployeeGroupsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSEmployeeGroupsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSEmployeeGroupsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSEmployeeGroupsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSEmployeeGroupsReconcileFunctionRequest,
    IPPSEmployeeGroupsReconcileFunctionResponse,
    IPPSEmployeeGroupsReconcileFunctionLogObject,
    IPPSEmployeeGroupsReconcileFunctionCallbackMessage,
    IPPSEmployeeGroupsReconcileFunctionInvocationEvent,
    IPPSEmployeeGroupsReconcileFunctionRequestPayload,
    IPPSEmployeeGroupsReconcileFunctionResponsePayload,
    IPPSEmployeeGroupsReconcileFunctionLogObjectPayload,
    IPPSEmployeeGroupsReconcileFunctionCallbackMessagePayload,
    IPPSEmployeeGroupsReconcileFunctionInvocationEventPayload
}
