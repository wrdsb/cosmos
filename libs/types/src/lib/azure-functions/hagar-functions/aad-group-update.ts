import { Group } from "@microsoft/microsoft-graph-types";
import * as Cosmos from "../common";

interface AADGroupUpdateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupUpdateFunctionRequestPayload;
}

interface AADGroupUpdateFunctionResponse extends Cosmos.FunctionResponse {}

interface AADGroupUpdateFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADGroupUpdateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupUpdateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface AADGroupUpdateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly group: Group;
}

interface AADGroupUpdateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADGroupUpdateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupUpdateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupUpdateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEvent {}

export {
    AADGroupUpdateFunctionRequest,
    AADGroupUpdateFunctionResponse,
    AADGroupUpdateFunctionLogObject,
    AADGroupUpdateFunctionCallbackMessage,
    AADGroupUpdateFunctionInvocationEvent,
    AADGroupUpdateFunctionRequestPayload,
    AADGroupUpdateFunctionResponsePayload,
    AADGroupUpdateFunctionLogObjectPayload,
    AADGroupUpdateFunctionCallbackMessagePayload,
    AADGroupUpdateFunctionInvocationEventPayload
}
