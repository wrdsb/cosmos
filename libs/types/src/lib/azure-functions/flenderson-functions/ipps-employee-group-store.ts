import * as Cosmos from "../common";

interface IPPSEmployeeGroupStoreFunctionRequest {
    readonly operation: IPPSEmployeeGroupStoreFunctionRequestOperation;
    readonly payload: IPPSEmployeeGroupStoreFunctionRequestPayload;
}

interface IPPSEmployeeGroupStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSEmployeeGroupStoreFunctionResponsePayload;
}

interface IPPSEmployeeGroupStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSEmployeeGroupStoreFunctionResponsePayload;
}

interface IPPSEmployeeGroupStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSEmployeeGroupStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSEmployeeGroupStoreFunctionInvocationEventPayload;
}

interface IPPSEmployeeGroupStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSEmployeeGroupStoreFunctionRequestOperation extends Cosmos.FunctionRequestPayload {
}

interface IPPSEmployeeGroupStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSEmployeeGroupStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSEmployeeGroupStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSEmployeeGroupStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSEmployeeGroupStoreFunctionRequest,
    IPPSEmployeeGroupStoreFunctionResponse,
    IPPSEmployeeGroupStoreFunctionLogObject,
    IPPSEmployeeGroupStoreFunctionCallbackMessage,
    IPPSEmployeeGroupStoreFunctionInvocationEvent,
    IPPSEmployeeGroupStoreFunctionRequestOperation,
    IPPSEmployeeGroupStoreFunctionRequestPayload,
    IPPSEmployeeGroupStoreFunctionResponsePayload,
    IPPSEmployeeGroupStoreFunctionLogObjectPayload,
    IPPSEmployeeGroupStoreFunctionCallbackMessagePayload,
    IPPSEmployeeGroupStoreFunctionInvocationEventPayload
}
