import * as Cosmos from "../common";

interface IPPSJobStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSJobStoreFunctionRequestPayload;
}

interface IPPSJobStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSJobStoreFunctionResponsePayload;
}

interface IPPSJobStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSJobStoreFunctionResponsePayload;
}

interface IPPSJobStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSJobStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSJobStoreFunctionInvocationEventPayload;
}

interface IPPSJobStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSJobStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSJobStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSJobStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSJobStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSJobStoreFunctionRequest,
    IPPSJobStoreFunctionResponse,
    IPPSJobStoreFunctionLogObject,
    IPPSJobStoreFunctionCallbackMessage,
    IPPSJobStoreFunctionInvocationEvent,
    IPPSJobStoreFunctionRequestPayload,
    IPPSJobStoreFunctionResponsePayload,
    IPPSJobStoreFunctionLogObjectPayload,
    IPPSJobStoreFunctionCallbackMessagePayload,
    IPPSJobStoreFunctionInvocationEventPayload
}
