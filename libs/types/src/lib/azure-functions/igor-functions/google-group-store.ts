import * as Cosmos from "../common";

interface GoogleGroupStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: GoogleGroupStoreFunctionRequestPayload;
}

interface GoogleGroupStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupStoreFunctionResponsePayload;
}

interface GoogleGroupStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupStoreFunctionResponsePayload;
}

interface GoogleGroupStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupStoreFunctionInvocationEventPayload;
}

interface GoogleGroupStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupStoreFunctionRequest,
    GoogleGroupStoreFunctionResponse,
    GoogleGroupStoreFunctionLogObject,
    GoogleGroupStoreFunctionCallbackMessage,
    GoogleGroupStoreFunctionInvocationEvent,
    GoogleGroupStoreFunctionRequestPayload,
    GoogleGroupStoreFunctionResponsePayload,
    GoogleGroupStoreFunctionLogObjectPayload,
    GoogleGroupStoreFunctionCallbackMessagePayload,
    GoogleGroupStoreFunctionInvocationEventPayload
}
