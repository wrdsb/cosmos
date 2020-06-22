import * as Cosmos from "../common";

interface AADGroupGetFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupGetFunctionRequestPayload;
}

interface AADGroupGetFunctionResponse extends Cosmos.FunctionResponse {}

interface AADGroupGetFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADGroupGetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupGetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface AADGroupGetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groupID: string;
}

interface AADGroupGetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADGroupGetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupGetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupGetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupGetFunctionRequest,
    AADGroupGetFunctionResponse,
    AADGroupGetFunctionLogObject,
    AADGroupGetFunctionCallbackMessage,
    AADGroupGetFunctionInvocationEvent,
    AADGroupGetFunctionRequestPayload,
    AADGroupGetFunctionResponsePayload,
    AADGroupGetFunctionLogObjectPayload,
    AADGroupGetFunctionCallbackMessagePayload,
    AADGroupGetFunctionInvocationEventPayload
}
