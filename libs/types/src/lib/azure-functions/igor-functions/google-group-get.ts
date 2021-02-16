import * as Cosmos from "../common";

interface GoogleGroupGetFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupGetFunctionRequestPayload;
}

interface GoogleGroupGetFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupGetFunctionResponsePayload;
}

interface GoogleGroupGetFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupGetFunctionResponsePayload;
}

interface GoogleGroupGetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupGetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupGetFunctionInvocationEventPayload;
}

interface GoogleGroupGetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly group: string;
}

interface GoogleGroupGetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupGetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupGetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupGetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupGetFunctionRequest,
    GoogleGroupGetFunctionResponse,
    GoogleGroupGetFunctionLogObject,
    GoogleGroupGetFunctionCallbackMessage,
    GoogleGroupGetFunctionInvocationEvent,
    GoogleGroupGetFunctionRequestPayload,
    GoogleGroupGetFunctionResponsePayload,
    GoogleGroupGetFunctionLogObjectPayload,
    GoogleGroupGetFunctionCallbackMessagePayload,
    GoogleGroupGetFunctionInvocationEventPayload
}
