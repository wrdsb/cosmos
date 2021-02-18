import * as Cosmos from "../common";

interface IPPSJobsReconcileFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSJobsReconcileFunctionRequestPayload;
}

interface IPPSJobsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSJobsReconcileFunctionResponsePayload;
}

interface IPPSJobsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSJobsReconcileFunctionResponsePayload;
}

interface IPPSJobsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSJobsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSJobsReconcileFunctionInvocationEventPayload;
}

interface IPPSJobsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSJobsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSJobsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSJobsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSJobsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSJobsReconcileFunctionRequest,
    IPPSJobsReconcileFunctionResponse,
    IPPSJobsReconcileFunctionLogObject,
    IPPSJobsReconcileFunctionCallbackMessage,
    IPPSJobsReconcileFunctionInvocationEvent,
    IPPSJobsReconcileFunctionRequestPayload,
    IPPSJobsReconcileFunctionResponsePayload,
    IPPSJobsReconcileFunctionLogObjectPayload,
    IPPSJobsReconcileFunctionCallbackMessagePayload,
    IPPSJobsReconcileFunctionInvocationEventPayload
}
