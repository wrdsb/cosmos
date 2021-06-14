import * as Cosmos from "../common";

interface FlendersonPersonMaterializeFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: FlendersonPersonMaterializeFunctionRequestPayload;
}

interface FlendersonPersonMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPersonMaterializeFunctionResponsePayload;
}

interface FlendersonPersonMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPersonMaterializeFunctionResponsePayload;
}

interface FlendersonPersonMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPersonMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPersonMaterializeFunctionInvocationEventPayload;
}

interface FlendersonPersonMaterializeFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly email: string;
    readonly employeeID: string;
}

interface FlendersonPersonMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPersonMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPersonMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPersonMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPersonMaterializeFunctionRequest,
    FlendersonPersonMaterializeFunctionResponse,
    FlendersonPersonMaterializeFunctionLogObject,
    FlendersonPersonMaterializeFunctionCallbackMessage,
    FlendersonPersonMaterializeFunctionInvocationEvent,
    FlendersonPersonMaterializeFunctionRequestPayload,
    FlendersonPersonMaterializeFunctionResponsePayload,
    FlendersonPersonMaterializeFunctionLogObjectPayload,
    FlendersonPersonMaterializeFunctionCallbackMessagePayload,
    FlendersonPersonMaterializeFunctionInvocationEventPayload
}
