import { Group } from "@microsoft/microsoft-graph-types";
import * as cosmos from "../common";

interface AADGroupCreateFunctionRequest extends cosmos.FunctionRequest {
    readonly payload: AADGroupCreateFunctionRequestPayload;
}

interface AADGroupCreateFunctionResponse extends cosmos.FunctionResponse {
    readonly payload: AADGroupCreateFunctionResponsePayload;
}

interface AADGroupCreateFunctionLogObject extends cosmos.FunctionLogObject {
    readonly payload: AADGroupCreateFunctionResponsePayload;
}

interface AADGroupCreateFunctionCallbackMessage extends cosmos.FunctionCallbackMessage {}

interface AADGroupCreateFunctionInvocationEvent extends cosmos.FunctionInvocationEvent {
    readonly data: AADGroupCreateFunctionInvocationEventPayload;
}

interface AADGroupCreateFunctionRequestPayload extends cosmos.FunctionRequestPayload {
    readonly group: Group;
}

interface AADGroupCreateFunctionResponsePayload extends cosmos.FunctionResponsePayload {
    readonly group: Group;
}

interface AADGroupCreateFunctionLogObjectPayload extends cosmos.FunctionLogObjectPayload {}

interface AADGroupCreateFunctionCallbackMessagePayload extends cosmos.FunctionCallbackMessagePayload {}

interface AADGroupCreateFunctionInvocationEventPayload extends cosmos.FunctionInvocationEventPayload {}

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
