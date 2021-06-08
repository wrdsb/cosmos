import * as Cosmos from "../common";

interface IPPSDirectoryReconcileFunctionRequest {
    readonly payload: IPPSDirectoryReconcileFunctionRequestPayload;
}

interface IPPSDirectoryReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSDirectoryReconcileFunctionResponsePayload;
}

interface IPPSDirectoryReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSDirectoryReconcileFunctionResponsePayload;
}

interface IPPSDirectoryReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSDirectoryReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSDirectoryReconcileFunctionInvocationEventPayload;
}

interface IPPSDirectoryReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSDirectoryReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSDirectoryReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSDirectoryReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSDirectoryReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSDirectoryReconcileFunctionRequest,
    IPPSDirectoryReconcileFunctionResponse,
    IPPSDirectoryReconcileFunctionLogObject,
    IPPSDirectoryReconcileFunctionCallbackMessage,
    IPPSDirectoryReconcileFunctionInvocationEvent,
    IPPSDirectoryReconcileFunctionRequestPayload,
    IPPSDirectoryReconcileFunctionResponsePayload,
    IPPSDirectoryReconcileFunctionLogObjectPayload,
    IPPSDirectoryReconcileFunctionCallbackMessagePayload,
    IPPSDirectoryReconcileFunctionInvocationEventPayload
}
