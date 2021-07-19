import * as Cosmos from "../common";

interface WALDIRUserStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: WALDIRUserStoreFunctionRequestPayload;
}

interface WALDIRUserStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRUserStoreFunctionResponsePayload;
}

interface WALDIRUserStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRUserStoreFunctionResponsePayload;
}

interface WALDIRUserStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRUserStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRUserStoreFunctionInvocationEventPayload;
}

interface WALDIRUserStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface WALDIRUserStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRUserStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRUserStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRUserStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WALDIRUserStoreFunctionRequest,
    WALDIRUserStoreFunctionResponse,
    WALDIRUserStoreFunctionLogObject,
    WALDIRUserStoreFunctionCallbackMessage,
    WALDIRUserStoreFunctionInvocationEvent,
    WALDIRUserStoreFunctionRequestPayload,
    WALDIRUserStoreFunctionResponsePayload,
    WALDIRUserStoreFunctionLogObjectPayload,
    WALDIRUserStoreFunctionCallbackMessagePayload,
    WALDIRUserStoreFunctionInvocationEventPayload
}
