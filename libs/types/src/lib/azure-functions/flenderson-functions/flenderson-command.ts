import { HttpRequest } from "@azure/functions";
import * as Cosmos from "../common";
import { FlendersonJobType } from "@cosmos/types";
import { IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPerson, IPPSPosition, FlendersonPerson, FlendersonPosition } from '@cosmos/types';

interface FlendersonCommandFunctionRequest extends HttpRequest {
    body: FlendersonCommandFunctionRequestBody;
}

interface FlendersonCommandFunctionRequestBody {
    readonly command: FlendersonCommand;
}

interface FlendersonCommand {
    readonly jobType: FlendersonCommandJobType;
    readonly operation: FlendersonCommandOperation;
    readonly payload: FlendersonCommandFunctionRequestPayload;
}

type FlendersonCommandJobType = FlendersonJobType;

type FlendersonCommandOperation = 
    'process' |
    'reconcile' |
    'create' |
    'patch' | 
    'replace' | 
    'delete' | 
    'materialize' |
    'invoke';

interface FlendersonCommandFunctionRequestPayload {
    readonly eamil?: string;
    readonly employeeID?: string;
    
    readonly ippsDirectory?: IPPSDirectory;
    readonly ippsEmployeeGroup?: IPPSEmployeeGroup;
    readonly ippsJob?: IPPSJob;
    readonly ippsLocation?: IPPSLocation;
    readonly ippsPal?: IPPSPal;
    readonly ippsPerson?: IPPSPerson;
    readonly ippsPosition?: IPPSPosition;
    readonly flendersonPerson?: FlendersonPerson;
    readonly flendersonPosition?: FlendersonPosition;

    readonly indexName?: string;
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
    FlendersonCommand,
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
