import * as Cosmos from "../common";

interface FlendersonJobEnqueueFunctionRequest {
    readonly payload: FlendersonJobEnqueueFunctionRequestPayload;
}

interface FlendersonJobEnqueueFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonJobEnqueueFunctionResponsePayload;
}

interface FlendersonJobEnqueueFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonJobEnqueueFunctionResponsePayload;
}

interface FlendersonJobEnqueueFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonJobEnqueueFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonJobEnqueueFunctionInvocationEventPayload;
}

interface FlendersonJobEnqueueFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface FlendersonJobEnqueueFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonJobEnqueueFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonJobEnqueueFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonJobEnqueueFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonJobEnqueueFunctionRequest,
    FlendersonJobEnqueueFunctionResponse,
    FlendersonJobEnqueueFunctionLogObject,
    FlendersonJobEnqueueFunctionCallbackMessage,
    FlendersonJobEnqueueFunctionInvocationEvent,
    FlendersonJobEnqueueFunctionRequestPayload,
    FlendersonJobEnqueueFunctionResponsePayload,
    FlendersonJobEnqueueFunctionLogObjectPayload,
    FlendersonJobEnqueueFunctionCallbackMessagePayload,
    FlendersonJobEnqueueFunctionInvocationEventPayload
}
