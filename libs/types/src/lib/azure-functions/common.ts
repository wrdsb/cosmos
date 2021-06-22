type QueryFunctionOperation = 'list' | 'find';
type CommandFunctionOperation = 'create' | 'patch' | 'replace' | 'delete' | 'materialize';
type CreateFunctionOperation = 'create';
type StoreFunctionOperation = 'patch' | 'replace' | 'delete' | 'materialize';
type StoreFunctionEvent = 'create' | 'update' | 'delete';

type FunctionCallbackType = 'Function.Invocation';

type FunctionLogID = string;
type FunctionName = string;
type FunctionInvocationID = string;
type FunctionInvocationTime = string;
type FunctionInvocationTimestamp = string;
type FunctionInvocationStatus = string;

type FunctionInvocationEventSpecVersion = '0.3';
type FunctionInvocationEventDataContentType = 'application/json';

type FunctionInvocationEventType = string;
type FunctionInvocationEventTypeURL = string;
type FunctionInvocationEventTypeVersion = string;

type FunctionInvocationEventID = string;
type FunctionInvocationEventTimestamp = FunctionInvocationTimestamp;
type FunctionInvocationEventSource = string;

type FunctionInvocationEventLabel = string;
type FunctionInvocationEventTags = string[];

type LogStorageAccount = string;
type LogStorageContainer = string;

interface FunctionRequest {
    readonly operation?: QueryFunctionOperation | CommandFunctionOperation | StoreFunctionOperation;
    readonly payload: FunctionRequestPayload;
}

interface FunctionResponse {
    readonly payload: FunctionResponsePayload;
}

interface FunctionInvocation {
    functionInvocationID: string;
    functionInvocationTimestamp: string;

    functionApp: string;
    functionName: string;
    functionDataType: string;
    functionDataOperation: string;

    jobType?: string;

    eventLabel: string;

    logPayload?: any;
}

interface FunctionLogObject {
    id: FunctionLogID;
    function_name: FunctionName;
    invocation_id: FunctionInvocationID;
    timestamp: FunctionInvocationTimestamp;
    payload: FunctionLogObjectPayload;
}

interface FunctionCallbackMessage {
    id: FunctionLogID;
    callback_type: FunctionCallbackType;
    function_name: FunctionName;
    invocation_id: FunctionInvocationID;
    timestamp: FunctionInvocationTimestamp;
    status: FunctionInvocationStatus;
}

interface FunctionInvocationEvent {
    specversion: FunctionInvocationEventSpecVersion;
    datacontenttype: FunctionInvocationEventDataContentType;

    type: FunctionInvocationEventType,
    typeURL: FunctionInvocationEventTypeURL,
    typeVersion : FunctionInvocationEventTypeVersion,

    id : FunctionInvocationEventID,
    time : FunctionInvocationEventTimestamp,
    source : FunctionInvocationEventSource,

    label: FunctionInvocationEventLabel;
    tags: FunctionInvocationEventTags;
}

interface FunctionRequestPayload {
}

interface FunctionResponsePayload {
    readonly status: string;
}

interface FunctionLogObjectPayload {}

interface FunctionCallbackMessagePayload {}

interface FunctionInvocationEventPayload {
    functionInvocationID: FunctionInvocationID,
    functionInvocationTime: FunctionInvocationTime,
    functionInvocationTimestamp: FunctionInvocationTimestamp,

    functionName: FunctionName,
    functionInvocationEventType: FunctionInvocationEventType,
    functionInvocationEventID: FunctionInvocationEventID,
    functionLogID: FunctionLogID,

    logStorageAccount: LogStorageAccount,
    logStorageContainer: LogStorageContainer,

    url: FunctionInvocationEventSource
}

export {
    QueryFunctionOperation,
    CommandFunctionOperation,
    CreateFunctionOperation,
    StoreFunctionOperation,
    StoreFunctionEvent,

    FunctionLogID,
    FunctionName,
    FunctionInvocationID,
    FunctionInvocationTime,
    FunctionInvocationTimestamp,
    FunctionCallbackType,
    FunctionInvocationStatus,
    FunctionInvocationEventSpecVersion,
    FunctionInvocationEventDataContentType,
    FunctionInvocationEventLabel,
    FunctionInvocationEventTags,

    FunctionRequest,
    FunctionResponse,
    FunctionInvocation,
    FunctionLogObject,
    FunctionCallbackMessage,
    FunctionInvocationEvent,
    FunctionRequestPayload,
    FunctionResponsePayload,
    FunctionLogObjectPayload,
    FunctionCallbackMessagePayload,
    FunctionInvocationEventPayload
}