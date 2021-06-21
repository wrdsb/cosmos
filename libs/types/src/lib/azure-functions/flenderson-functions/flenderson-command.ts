import { HttpRequest } from "@azure/functions";
import * as Cosmos from "../common";
import { FlendersonJobType } from "@cosmos/types";
import { IPPSPosition } from "@cosmos/types";

interface FlendersonCommandFunctionRequest extends HttpRequest {
    body: FlendersonCommandFunctionRequestBody;
}

interface FlendersonCommandFunctionRequestBody extends Cosmos.FunctionRequestPayload {
    readonly jobType: FlendersonCommandJobType;
    readonly operation: FlendersonCommandOperation;
    readonly payload: FlendersonCommandFunctionRequestPayload;
}

type FlendersonCommandJobType = FlendersonJobType;

type FlendersonCommandOperation = 
    'create' |
    'patch' | 
    'replace' | 
    'delete' | 
    'materialize';

interface FlendersonCommandFunctionRequestPayload {
    readonly ippsPosition?: IPPSPosition;
    readonly eamil?: string;
    readonly employeeID?: string;
}


interface FlendersonCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonCommandFunctionResponsePayload;
}

interface FlendersonCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonCommandFunctionResponsePayload;
}

interface FlendersonCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonCommandFunctionInvocationEventPayload;
}


interface FlendersonCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}


export {
    FlendersonCommandFunctionRequest,
    FlendersonCommandFunctionRequestBody,
    FlendersonCommandJobType,
    FlendersonCommandOperation,
    FlendersonCommandFunctionRequestPayload,
    FlendersonCommandFunctionResponse,
    FlendersonCommandFunctionLogObject,
    FlendersonCommandFunctionCallbackMessage,
    FlendersonCommandFunctionInvocationEvent,
    FlendersonCommandFunctionResponsePayload,
    FlendersonCommandFunctionLogObjectPayload,
    FlendersonCommandFunctionCallbackMessagePayload,
    FlendersonCommandFunctionInvocationEventPayload
}
