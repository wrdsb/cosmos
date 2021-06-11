import * as Cosmos from "../common";

interface IPPSEmployeeGroupReconcileFunctionRequest {
    readonly payload: IPPSEmployeeGroupReconcileFunctionRequestPayload;
}

interface IPPSEmployeeGroupReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSEmployeeGroupReconcileFunctionResponsePayload;
}

interface IPPSEmployeeGroupReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSEmployeeGroupReconcileFunctionResponsePayload;
}

interface IPPSEmployeeGroupReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSEmployeeGroupReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSEmployeeGroupReconcileFunctionInvocationEventPayload;
}

interface IPPSEmployeeGroupReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSEmployeeGroupReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSEmployeeGroupReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSEmployeeGroupReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSEmployeeGroupReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSEmployeeGroupReconcileFunctionRequest,
    IPPSEmployeeGroupReconcileFunctionResponse,
    IPPSEmployeeGroupReconcileFunctionLogObject,
    IPPSEmployeeGroupReconcileFunctionCallbackMessage,
    IPPSEmployeeGroupReconcileFunctionInvocationEvent,
    IPPSEmployeeGroupReconcileFunctionRequestPayload,
    IPPSEmployeeGroupReconcileFunctionResponsePayload,
    IPPSEmployeeGroupReconcileFunctionLogObjectPayload,
    IPPSEmployeeGroupReconcileFunctionCallbackMessagePayload,
    IPPSEmployeeGroupReconcileFunctionInvocationEventPayload
}
