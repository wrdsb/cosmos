import * as Cosmos from "../common";

interface AADGroupQueryFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.QueryFunctionOperation;
    readonly payload: AADGroupQueryFunctionRequestPayload;
}

interface AADGroupQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupQueryFunctionResponsePayload;
}

interface AADGroupQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupQueryFunctionResponsePayload;
}

interface AADGroupQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupQueryFunctionInvocationEventPayload;
}

interface AADGroupQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly id?: string;
    readonly displayName?: string;
    readonly mailNickname?: string;
    readonly onPremisesSamAccountName?: string;
}

interface AADGroupQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupQueryFunctionRequest,
    AADGroupQueryFunctionResponse,
    AADGroupQueryFunctionLogObject,
    AADGroupQueryFunctionCallbackMessage,
    AADGroupQueryFunctionInvocationEvent,
    AADGroupQueryFunctionRequestPayload,
    AADGroupQueryFunctionResponsePayload,
    AADGroupQueryFunctionLogObjectPayload,
    AADGroupQueryFunctionCallbackMessagePayload,
    AADGroupQueryFunctionInvocationEventPayload
}
