import * as Cosmos from "./common";

interface PingFunctionRequest extends Cosmos.FunctionRequest {
}

interface PingFunctionResponse {
    readonly header: PingFunctionResponseHeader;
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

interface PingFunctionResponseHeader {
    readonly status?: number;
    readonly message?: string;
    readonly chatter?: string;
    readonly timestamp?: string;
    readonly authenticated?: boolean;
    readonly authorized?: boolean;
    readonly userName?: string;
    readonly userEmail?: string;
    readonly userRoles?: string[];
}

interface PingFunctionResponsePayload {
    readonly status?: number;
    readonly message?: string;
    readonly chatter?: string;
    readonly timestamp?: string;
    readonly invocationEvent?: Cosmos.FunctionInvocationEvent;
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
