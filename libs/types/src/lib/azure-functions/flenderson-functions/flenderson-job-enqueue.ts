import * as Cosmos from "../common";
import { FlendersonCommand } from "@cosmos/types";

interface FlendersonJobEnqueueFunctionRequest {
    // TODO: add fields for tracing, observability, and notifications/callbacks
    readonly command: FlendersonCommand;
};

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
    FlendersonJobEnqueueFunctionResponsePayload,
    FlendersonJobEnqueueFunctionLogObjectPayload,
    FlendersonJobEnqueueFunctionCallbackMessagePayload,
    FlendersonJobEnqueueFunctionInvocationEventPayload
}
