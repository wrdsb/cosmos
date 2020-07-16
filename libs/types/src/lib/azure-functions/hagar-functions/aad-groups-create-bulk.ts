import { Group } from "@microsoft/microsoft-graph-types";
import * as Cosmos from "../common";

interface AADGroupsCreateBulkFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupsCreateBulkFunctionRequestPayload;
}

interface AADGroupsCreateBulkFunctionResponse extends Cosmos.FunctionResponse {}

interface AADGroupsCreateBulkFunctionLogObject extends Cosmos.FunctionLogObject {}

interface AADGroupsCreateBulkFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupsCreateBulkFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface AADGroupsCreateBulkFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groups: Group[];
}

interface AADGroupsCreateBulkFunctionResponsePayload extends Cosmos.FunctionResponsePayload {}

interface AADGroupsCreateBulkFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupsCreateBulkFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupsCreateBulkFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupsCreateBulkFunctionRequest,
    AADGroupsCreateBulkFunctionResponse,
    AADGroupsCreateBulkFunctionLogObject,
    AADGroupsCreateBulkFunctionCallbackMessage,
    AADGroupsCreateBulkFunctionInvocationEvent,
    AADGroupsCreateBulkFunctionRequestPayload,
    AADGroupsCreateBulkFunctionResponsePayload,
    AADGroupsCreateBulkFunctionLogObjectPayload,
    AADGroupsCreateBulkFunctionCallbackMessagePayload,
    AADGroupsCreateBulkFunctionInvocationEventPayload
}
