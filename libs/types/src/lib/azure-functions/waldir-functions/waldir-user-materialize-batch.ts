import { WPUser, WALDIRUser } from "@cosmos/types";
import * as Cosmos from "../common";

interface WALDIRUserMaterializeBatchFunctionRequest {
    readonly payload: WALDIRUserMaterializeBatchFunctionRequestPayload;
}

interface WALDIRUserMaterializeBatchFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRUserMaterializeBatchFunctionResponsePayload;
}

interface WALDIRUserMaterializeBatchFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRUserMaterializeBatchFunctionResponsePayload;
}

interface WALDIRUserMaterializeBatchFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRUserMaterializeBatchFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRUserMaterializeBatchFunctionInvocationEventPayload;
}

interface WALDIRUserMaterializeBatchFunctionRequestPayload {
    readonly all: boolean;
    readonly employeeID?: string;
    readonly email?: string;
    readonly waldirUser?: WALDIRUser;
    readonly wpUser?: WPUser;
}

interface WALDIRUserMaterializeBatchFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRUserMaterializeBatchFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRUserMaterializeBatchFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRUserMaterializeBatchFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WALDIRUserMaterializeBatchFunctionRequest,
    WALDIRUserMaterializeBatchFunctionResponse,
    WALDIRUserMaterializeBatchFunctionLogObject,
    WALDIRUserMaterializeBatchFunctionCallbackMessage,
    WALDIRUserMaterializeBatchFunctionInvocationEvent,
    WALDIRUserMaterializeBatchFunctionRequestPayload,
    WALDIRUserMaterializeBatchFunctionResponsePayload,
    WALDIRUserMaterializeBatchFunctionLogObjectPayload,
    WALDIRUserMaterializeBatchFunctionCallbackMessagePayload,
    WALDIRUserMaterializeBatchFunctionInvocationEventPayload
}
