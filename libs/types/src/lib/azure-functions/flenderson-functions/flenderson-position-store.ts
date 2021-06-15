import * as Cosmos from "../common";

interface FlendersonPositionStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: FlendersonPositionStoreFunctionRequestPayload;
}

interface FlendersonPositionStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPositionStoreFunctionResponsePayload;
}

interface FlendersonPositionStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPositionStoreFunctionResponsePayload;
}

interface FlendersonPositionStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPositionStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPositionStoreFunctionInvocationEventPayload;
}

interface FlendersonPositionStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface FlendersonPositionStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPositionStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPositionStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPositionStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPositionStoreFunctionRequest,
    FlendersonPositionStoreFunctionResponse,
    FlendersonPositionStoreFunctionLogObject,
    FlendersonPositionStoreFunctionCallbackMessage,
    FlendersonPositionStoreFunctionInvocationEvent,
    FlendersonPositionStoreFunctionRequestPayload,
    FlendersonPositionStoreFunctionResponsePayload,
    FlendersonPositionStoreFunctionLogObjectPayload,
    FlendersonPositionStoreFunctionCallbackMessagePayload,
    FlendersonPositionStoreFunctionInvocationEventPayload
}
