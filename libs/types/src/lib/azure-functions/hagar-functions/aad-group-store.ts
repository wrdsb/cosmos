import * as Cosmos from "../common";

interface AADGroupStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupStoreFunctionRequestPayload;
}

interface AADGroupStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupStoreFunctionResponsePayload;
}

interface AADGroupStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupStoreFunctionResponsePayload;
}

interface AADGroupStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupStoreFunctionInvocationEventPayload;
}

interface AADGroupStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupStoreFunctionRequest,
    AADGroupStoreFunctionResponse,
    AADGroupStoreFunctionLogObject,
    AADGroupStoreFunctionCallbackMessage,
    AADGroupStoreFunctionInvocationEvent,
    AADGroupStoreFunctionRequestPayload,
    AADGroupStoreFunctionResponsePayload,
    AADGroupStoreFunctionLogObjectPayload,
    AADGroupStoreFunctionCallbackMessagePayload,
    AADGroupStoreFunctionInvocationEventPayload
}
