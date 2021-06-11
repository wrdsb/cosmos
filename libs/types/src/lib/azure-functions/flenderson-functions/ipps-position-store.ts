import * as Cosmos from "../common";

interface IPPSPositionStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSPositionStoreFunctionRequestPayload;
}

interface IPPSPositionStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPositionStoreFunctionResponsePayload;
}

interface IPPSPositionStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPositionStoreFunctionResponsePayload;
}

interface IPPSPositionStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPositionStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPositionStoreFunctionInvocationEventPayload;
}

interface IPPSPositionStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPositionStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPositionStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPositionStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPositionStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPositionStoreFunctionRequest,
    IPPSPositionStoreFunctionResponse,
    IPPSPositionStoreFunctionLogObject,
    IPPSPositionStoreFunctionCallbackMessage,
    IPPSPositionStoreFunctionInvocationEvent,
    IPPSPositionStoreFunctionRequestPayload,
    IPPSPositionStoreFunctionResponsePayload,
    IPPSPositionStoreFunctionLogObjectPayload,
    IPPSPositionStoreFunctionCallbackMessagePayload,
    IPPSPositionStoreFunctionInvocationEventPayload
}
