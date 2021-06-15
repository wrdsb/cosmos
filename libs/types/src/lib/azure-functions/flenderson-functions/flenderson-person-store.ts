import * as Cosmos from "../common";

interface FlendersonPersonStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: FlendersonPersonStoreFunctionRequestPayload;
}

interface FlendersonPersonStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPersonStoreFunctionResponsePayload;
}

interface FlendersonPersonStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPersonStoreFunctionResponsePayload;
}

interface FlendersonPersonStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPersonStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPersonStoreFunctionInvocationEventPayload;
}

interface FlendersonPersonStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface FlendersonPersonStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPersonStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPersonStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPersonStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPersonStoreFunctionRequest,
    FlendersonPersonStoreFunctionResponse,
    FlendersonPersonStoreFunctionLogObject,
    FlendersonPersonStoreFunctionCallbackMessage,
    FlendersonPersonStoreFunctionInvocationEvent,
    FlendersonPersonStoreFunctionRequestPayload,
    FlendersonPersonStoreFunctionResponsePayload,
    FlendersonPersonStoreFunctionLogObjectPayload,
    FlendersonPersonStoreFunctionCallbackMessagePayload,
    FlendersonPersonStoreFunctionInvocationEventPayload
}
