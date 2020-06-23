import * as Cosmos from "../common";

interface AADUserQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADUserQueryFunctionRequestPayload;
}

interface AADUserQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADUserQueryFunctionResponsePayload;
}

interface AADUserQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADUserQueryFunctionResponsePayload;
}

interface AADUserQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUserQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADUserQueryFunctionInvocationEventPayload;
}

interface AADUserQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADUserQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADUserQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUserQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUserQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUserQueryFunctionRequest,
    AADUserQueryFunctionResponse,
    AADUserQueryFunctionLogObject,
    AADUserQueryFunctionCallbackMessage,
    AADUserQueryFunctionInvocationEvent,
    AADUserQueryFunctionRequestPayload,
    AADUserQueryFunctionResponsePayload,
    AADUserQueryFunctionLogObjectPayload,
    AADUserQueryFunctionCallbackMessagePayload,
    AADUserQueryFunctionInvocationEventPayload
}
