import * as Cosmos from "../common";

interface IPPSLocationStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSLocationStoreFunctionRequestPayload;
}

interface IPPSLocationStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSLocationStoreFunctionResponsePayload;
}

interface IPPSLocationStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSLocationStoreFunctionResponsePayload;
}

interface IPPSLocationStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSLocationStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSLocationStoreFunctionInvocationEventPayload;
}

interface IPPSLocationStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSLocationStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSLocationStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSLocationStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSLocationStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSLocationStoreFunctionRequest,
    IPPSLocationStoreFunctionResponse,
    IPPSLocationStoreFunctionLogObject,
    IPPSLocationStoreFunctionCallbackMessage,
    IPPSLocationStoreFunctionInvocationEvent,
    IPPSLocationStoreFunctionRequestPayload,
    IPPSLocationStoreFunctionResponsePayload,
    IPPSLocationStoreFunctionLogObjectPayload,
    IPPSLocationStoreFunctionCallbackMessagePayload,
    IPPSLocationStoreFunctionInvocationEventPayload
}
