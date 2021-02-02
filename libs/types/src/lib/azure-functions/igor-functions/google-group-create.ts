import * as Cosmos from "../common";

interface GoogleGroupCreateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupCreateFunctionRequestPayload;
}

interface GoogleGroupCreateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupCreateFunctionResponsePayload;
}

interface GoogleGroupCreateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupCreateFunctionResponsePayload;
}

interface GoogleGroupCreateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupCreateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupCreateFunctionInvocationEventPayload;
}

interface GoogleGroupCreateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupCreateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupCreateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupCreateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupCreateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupCreateFunctionRequest,
    GoogleGroupCreateFunctionResponse,
    GoogleGroupCreateFunctionLogObject,
    GoogleGroupCreateFunctionCallbackMessage,
    GoogleGroupCreateFunctionInvocationEvent,
    GoogleGroupCreateFunctionRequestPayload,
    GoogleGroupCreateFunctionResponsePayload,
    GoogleGroupCreateFunctionLogObjectPayload,
    GoogleGroupCreateFunctionCallbackMessagePayload,
    GoogleGroupCreateFunctionInvocationEventPayload
}
