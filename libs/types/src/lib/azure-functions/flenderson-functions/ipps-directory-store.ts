import * as Cosmos from "../common";

interface IPPSDirectoryStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSDirectoryStoreFunctionRequestPayload;
}

interface IPPSDirectoryStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSDirectoryStoreFunctionResponsePayload;
}

interface IPPSDirectoryStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSDirectoryStoreFunctionResponsePayload;
}

interface IPPSDirectoryStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSDirectoryStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSDirectoryStoreFunctionInvocationEventPayload;
}

interface IPPSDirectoryStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSDirectoryStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSDirectoryStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSDirectoryStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSDirectoryStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSDirectoryStoreFunctionRequest,
    IPPSDirectoryStoreFunctionResponse,
    IPPSDirectoryStoreFunctionLogObject,
    IPPSDirectoryStoreFunctionCallbackMessage,
    IPPSDirectoryStoreFunctionInvocationEvent,
    IPPSDirectoryStoreFunctionRequestPayload,
    IPPSDirectoryStoreFunctionResponsePayload,
    IPPSDirectoryStoreFunctionLogObjectPayload,
    IPPSDirectoryStoreFunctionCallbackMessagePayload,
    IPPSDirectoryStoreFunctionInvocationEventPayload
}
