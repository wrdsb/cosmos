import * as Cosmos from "../common";

interface AADUserCommandFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CommandFunctionOperation;
    readonly payload: AADUserCommandFunctionRequestPayload;
}

interface AADUserCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADUserCommandFunctionResponsePayload;
}

interface AADUserCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADUserCommandFunctionResponsePayload;
}

interface AADUserCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUserCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADUserCommandFunctionInvocationEventPayload;
}

interface AADUserCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADUserCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADUserCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUserCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUserCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUserCommandFunctionRequest,
    AADUserCommandFunctionResponse,
    AADUserCommandFunctionLogObject,
    AADUserCommandFunctionCallbackMessage,
    AADUserCommandFunctionInvocationEvent,
    AADUserCommandFunctionRequestPayload,
    AADUserCommandFunctionResponsePayload,
    AADUserCommandFunctionLogObjectPayload,
    AADUserCommandFunctionCallbackMessagePayload,
    AADUserCommandFunctionInvocationEventPayload
}
