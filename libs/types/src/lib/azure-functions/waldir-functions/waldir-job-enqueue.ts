import * as Cosmos from "../common";
import { WALDIRCommand } from "@cosmos/types";

interface WALDIRJobEnqueueFunctionRequest {
    // TODO: add fields for tracing, observability, and notifications/callbacks
    readonly command: WALDIRCommand;
};

interface WALDIRJobEnqueueFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRJobEnqueueFunctionResponsePayload;
}

interface WALDIRJobEnqueueFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRJobEnqueueFunctionResponsePayload;
}

interface WALDIRJobEnqueueFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRJobEnqueueFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRJobEnqueueFunctionInvocationEventPayload;
}

interface WALDIRJobEnqueueFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRJobEnqueueFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRJobEnqueueFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRJobEnqueueFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WALDIRJobEnqueueFunctionRequest,
    WALDIRJobEnqueueFunctionResponse,
    WALDIRJobEnqueueFunctionLogObject,
    WALDIRJobEnqueueFunctionCallbackMessage,
    WALDIRJobEnqueueFunctionInvocationEvent,
    WALDIRJobEnqueueFunctionResponsePayload,
    WALDIRJobEnqueueFunctionLogObjectPayload,
    WALDIRJobEnqueueFunctionCallbackMessagePayload,
    WALDIRJobEnqueueFunctionInvocationEventPayload
}
