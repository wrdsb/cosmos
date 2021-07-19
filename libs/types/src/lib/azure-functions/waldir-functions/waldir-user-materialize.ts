import { WALDIRUser } from "@cosmos/types";
import * as Cosmos from "../common";

interface WALDIRUserMaterializeFunctionRequest {
    readonly payload: WALDIRUserMaterializeFunctionRequestPayload;
}

interface WALDIRUserMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRUserMaterializeFunctionResponsePayload;
}

interface WALDIRUserMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRUserMaterializeFunctionResponsePayload;
}

interface WALDIRUserMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRUserMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRUserMaterializeFunctionInvocationEventPayload;
}

interface WALDIRUserMaterializeFunctionRequestPayload {
    readonly waldirUser?: WALDIRUser;
}

interface WALDIRUserMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRUserMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRUserMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRUserMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WALDIRUserMaterializeFunctionRequest,
    WALDIRUserMaterializeFunctionResponse,
    WALDIRUserMaterializeFunctionLogObject,
    WALDIRUserMaterializeFunctionCallbackMessage,
    WALDIRUserMaterializeFunctionInvocationEvent,
    WALDIRUserMaterializeFunctionRequestPayload,
    WALDIRUserMaterializeFunctionResponsePayload,
    WALDIRUserMaterializeFunctionLogObjectPayload,
    WALDIRUserMaterializeFunctionCallbackMessagePayload,
    WALDIRUserMaterializeFunctionInvocationEventPayload
}
