import * as Cosmos from "../common";

interface AADGroupCommandFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CommandFunctionOperation;
    readonly payload: AADGroupCommandFunctionRequestPayload;
}

interface AADGroupCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupCommandFunctionResponsePayload;
}

interface AADGroupCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupCommandFunctionResponsePayload;
}

interface AADGroupCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupCommandFunctionInvocationEventPayload;
}

interface AADGroupCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADGroupCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupCommandFunctionRequest,
    AADGroupCommandFunctionResponse,
    AADGroupCommandFunctionLogObject,
    AADGroupCommandFunctionCallbackMessage,
    AADGroupCommandFunctionInvocationEvent,
    AADGroupCommandFunctionRequestPayload,
    AADGroupCommandFunctionResponsePayload,
    AADGroupCommandFunctionLogObjectPayload,
    AADGroupCommandFunctionCallbackMessagePayload,
    AADGroupCommandFunctionInvocationEventPayload
}
