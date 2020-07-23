import * as Cosmos from "./common";

interface PingFunctionRequest extends Cosmos.FunctionRequest {
}

interface PingFunctionResponse extends Cosmos.FunctionResponse {
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

interface PingFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
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
