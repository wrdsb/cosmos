import { Group } from "@microsoft/microsoft-graph-types";
import * as Cosmos from "../common";

interface AADGroupDeleteFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupDeleteFunctionRequestPayload;
}

interface AADGroupDeleteFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupDeleteFunctionResponsePayload;
}

interface AADGroupDeleteFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupDeleteFunctionResponsePayload;
}

interface AADGroupDeleteFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupDeleteFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupDeleteFunctionInvocationEventPayload;
}

interface AADGroupDeleteFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groupID: string;
}

interface AADGroupDeleteFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
    readonly group: Group;
}

interface AADGroupDeleteFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupDeleteFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupDeleteFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupDeleteFunctionRequest,
    AADGroupDeleteFunctionResponse,
    AADGroupDeleteFunctionLogObject,
    AADGroupDeleteFunctionCallbackMessage,
    AADGroupDeleteFunctionInvocationEvent,
    AADGroupDeleteFunctionRequestPayload,
    AADGroupDeleteFunctionResponsePayload,
    AADGroupDeleteFunctionLogObjectPayload,
    AADGroupDeleteFunctionCallbackMessagePayload,
    AADGroupDeleteFunctionInvocationEventPayload
}
