import { HttpRequest } from "@azure/functions";
import * as Cosmos from "../common";
import { WALDIRJobType } from "@cosmos/types";
import { IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPerson, IPPSPosition, WALDIRPerson, WALDIRPosition } from '@cosmos/types';

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
    'process' |
    'reconcile' |
    'create' |
    'patch' | 
    'replace' | 
    'delete' | 
    'materialize' |
    'invoke';

interface WALDIRCommandFunctionRequestPayload {
    readonly all?: boolean;

    readonly email?: string;
    readonly employeeID?: string;

    readonly ippsEmployeeGroupCode?: string;
    readonly ippsJobCode?: string;
    readonly ippsLocationCode?: string;
    readonly ippsPositionID?: string;
    
    readonly ippsDirectory?: IPPSDirectory;
    readonly ippsEmployeeGroup?: IPPSEmployeeGroup;
    readonly ippsJob?: IPPSJob;
    readonly ippsLocation?: IPPSLocation;
    readonly ippsPal?: IPPSPal;
    readonly ippsPerson?: IPPSPerson;
    readonly ippsPosition?: IPPSPosition;
    readonly WALDIRPerson?: WALDIRPerson;
    readonly WALDIRPosition?: WALDIRPosition;

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
