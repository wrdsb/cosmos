import { Group } from "@microsoft/microsoft-graph-types";
import * as Cosmos from "../common";

interface AADGroupCreateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupCreateFunctionRequestPayload;
}

interface AADGroupCreateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupCreateFunctionResponsePayload;
}

interface AADGroupCreateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupCreateFunctionResponsePayload;
}

interface AADGroupCreateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupCreateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupCreateFunctionInvocationEventPayload;
}

interface AADGroupCreateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly group: Group;
}

interface AADGroupCreateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
    readonly group: Group;
}

interface AADGroupCreateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupCreateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupCreateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupCreateFunctionRequest,
    AADGroupCreateFunctionResponse,
    AADGroupCreateFunctionLogObject,
    AADGroupCreateFunctionCallbackMessage,
    AADGroupCreateFunctionInvocationEvent,
    AADGroupCreateFunctionRequestPayload,
    AADGroupCreateFunctionResponsePayload,
    AADGroupCreateFunctionLogObjectPayload,
    AADGroupCreateFunctionCallbackMessagePayload,
    AADGroupCreateFunctionInvocationEventPayload
}
