import * as Cosmos from "../common";
import { GoogleGroup } from "@cosmos/types";

interface GoogleGroupMaterializeFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupMaterializeFunctionRequestPayload;
}

interface GoogleGroupMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupMaterializeFunctionResponsePayload;
}

interface GoogleGroupMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupMaterializeFunctionResponsePayload;
}

interface GoogleGroupMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupMaterializeFunctionInvocationEventPayload;
}

interface GoogleGroupMaterializeFunctionRequestPayload extends Cosmos.FunctionResponsePayload {
    readonly email: string;
}

interface GoogleGroupMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
    readonly status: string
    readonly group: GoogleGroup;
}

interface GoogleGroupMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupMaterializeFunctionRequest,
    GoogleGroupMaterializeFunctionResponse,
    GoogleGroupMaterializeFunctionLogObject,
    GoogleGroupMaterializeFunctionCallbackMessage,
    GoogleGroupMaterializeFunctionInvocationEvent,
    GoogleGroupMaterializeFunctionRequestPayload,
    GoogleGroupMaterializeFunctionResponsePayload,
    GoogleGroupMaterializeFunctionLogObjectPayload,
    GoogleGroupMaterializeFunctionCallbackMessagePayload,
    GoogleGroupMaterializeFunctionInvocationEventPayload
}
