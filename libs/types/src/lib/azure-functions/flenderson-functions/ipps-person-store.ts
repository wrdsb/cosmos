import * as Cosmos from "../common";

interface IPPSPersonStoreFunctionRequest {
    readonly operation: IPPSPersonStoreFunctionRequestOperation;
    readonly payload: IPPSPersonStoreFunctionRequestPayload;
}

interface IPPSPersonStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPersonStoreFunctionResponsePayload;
}

interface IPPSPersonStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPersonStoreFunctionResponsePayload;
}

interface IPPSPersonStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPersonStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPersonStoreFunctionInvocationEventPayload;
}

interface IPPSPersonStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPersonStoreFunctionRequestOperation extends Cosmos.FunctionRequestPayload {
}

interface IPPSPersonStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPersonStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPersonStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPersonStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPersonStoreFunctionRequest,
    IPPSPersonStoreFunctionResponse,
    IPPSPersonStoreFunctionLogObject,
    IPPSPersonStoreFunctionCallbackMessage,
    IPPSPersonStoreFunctionInvocationEvent,
    IPPSPersonStoreFunctionRequestOperation,
    IPPSPersonStoreFunctionRequestPayload,
    IPPSPersonStoreFunctionResponsePayload,
    IPPSPersonStoreFunctionLogObjectPayload,
    IPPSPersonStoreFunctionCallbackMessagePayload,
    IPPSPersonStoreFunctionInvocationEventPayload
}
