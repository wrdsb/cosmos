import * as Cosmos from "../common";

interface AADUserStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: AADUserStoreFunctionRequestPayload;
}

interface AADUserStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADUserStoreFunctionResponsePayload;
}

interface AADUserStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADUserStoreFunctionResponsePayload;
}

interface AADUserStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADUserStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADUserStoreFunctionInvocationEventPayload;
}

interface AADUserStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AADUserStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADUserStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADUserStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADUserStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADUserStoreFunctionRequest,
    AADUserStoreFunctionResponse,
    AADUserStoreFunctionLogObject,
    AADUserStoreFunctionCallbackMessage,
    AADUserStoreFunctionInvocationEvent,
    AADUserStoreFunctionRequestPayload,
    AADUserStoreFunctionResponsePayload,
    AADUserStoreFunctionLogObjectPayload,
    AADUserStoreFunctionCallbackMessagePayload,
    AADUserStoreFunctionInvocationEventPayload
}
