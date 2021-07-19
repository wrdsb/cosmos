import { HttpRequest } from "@azure/functions";
import * as Cosmos from "../common";
import { WALDIRJobType } from "@cosmos/types";
import { WALDIRUser, WPUser } from '@cosmos/types';

interface WALDIRCommandFunctionRequest extends HttpRequest {
    body: WALDIRCommandFunctionRequestBody;
}

interface WALDIRCommandFunctionRequestBody {
    readonly command: WALDIRCommand;
}

interface WALDIRCommand {
    readonly jobType: WALDIRCommandJobType;
    readonly operation: WALDIRCommandOperation;
    readonly payload: WALDIRCommandFunctionRequestPayload;
}

type WALDIRCommandJobType = WALDIRJobType;

type WALDIRCommandOperation = 
    'get' |
    'getAll' |
    'reconcile' |
    'create' |
    'patch' | 
    'replace' | 
    'delete' | 
    'materialize' |
    'invoke' |
    'send';

interface WALDIRCommandFunctionRequestPayload {
    readonly all?: boolean;

    readonly email?: string;
    readonly employeeID?: string;

    readonly waldirUser: WALDIRUser;
    readonly wpUser: WPUser;

    readonly indexName?: string;
}


interface WALDIRCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WALDIRCommandFunctionResponsePayload;
}

interface WALDIRCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WALDIRCommandFunctionResponsePayload;
}

interface WALDIRCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WALDIRCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WALDIRCommandFunctionInvocationEventPayload;
}


interface WALDIRCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WALDIRCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WALDIRCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WALDIRCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}


export {
    WALDIRCommandFunctionRequest,
    WALDIRCommandFunctionRequestBody,
    WALDIRCommand,
    WALDIRCommandJobType,
    WALDIRCommandOperation,
    WALDIRCommandFunctionRequestPayload,
    WALDIRCommandFunctionResponse,
    WALDIRCommandFunctionLogObject,
    WALDIRCommandFunctionCallbackMessage,
    WALDIRCommandFunctionInvocationEvent,
    WALDIRCommandFunctionResponsePayload,
    WALDIRCommandFunctionLogObjectPayload,
    WALDIRCommandFunctionCallbackMessagePayload,
    WALDIRCommandFunctionInvocationEventPayload
}
