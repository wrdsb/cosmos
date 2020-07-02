import * as Cosmos from "../common";

interface AADUserGetFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADUserGetFunctionRequestPayload;
}

interface AADUserGetFunctionResponse extends Cosmos.FunctionResponse {}

interface AADUserGetFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADUserGetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUserGetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface AADUserGetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly userID: string;
}

interface AADUserGetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADUserGetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUserGetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUserGetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUserGetFunctionRequest,
    AADUserGetFunctionResponse,
    AADUserGetFunctionLogObject,
    AADUserGetFunctionCallbackMessage,
    AADUserGetFunctionInvocationEvent,
    AADUserGetFunctionRequestPayload,
    AADUserGetFunctionResponsePayload,
    AADUserGetFunctionLogObjectPayload,
    AADUserGetFunctionCallbackMessagePayload,
    AADUserGetFunctionInvocationEventPayload
}
