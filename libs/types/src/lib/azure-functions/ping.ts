import * as Cosmos from "./common";

interface PingFunctionRequest extends Cosmos.FunctionRequest {
}

interface PingFunctionResponse {
    readonly payload: PingFunctionResponsePayload;
}

interface PingFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PingFunctionResponsePayload;
}

interface PingFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PingFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PingFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PingFunctionResponsePayload {
    readonly message: string;
    readonly chatter: string;
    readonly status: number;
    readonly timestamp: string;
    readonly invocationEvent: Cosmos.FunctionInvocationEvent;
}

interface PingFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PingFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PingFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PingFunctionRequest,
    PingFunctionResponse,
    PingFunctionLogObject,
    PingFunctionCallbackMessage,
    PingFunctionInvocationEvent,
    PingFunctionRequestPayload,
    PingFunctionResponsePayload,
    PingFunctionLogObjectPayload,
    PingFunctionCallbackMessagePayload,
    PingFunctionInvocationEventPayload
}
