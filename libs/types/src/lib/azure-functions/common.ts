type FunctionLogID = string;
type FunctionName = string;
type FunctionInvocationID = string;
type FunctionInvocationTime = string;
type FunctionInvocationTimestamp = string;
type FunctionCallbackType = 'Function.Invocation';
type FunctionInvocationStatus = string;

type FunctionInvocationEventSpecVersion = '0.3';
type FunctionInvocationEventDataContentType = 'application/json';
type FunctionEventType = string;
type FunctionTypeURL = string;
type FunctionEventID = string;
type FunctionSource = string;
type FunctionEventSource = string;

type Label = string;
type Tags = string[];

type LogStorageAccount = string;
type LogStorageContainer = string;

interface FunctionRequest {
    readonly payload: FunctionRequestPayload;
}

interface FunctionResponse {
    readonly payload: FunctionResponsePayload;
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

    type: FunctionEventType,
    typeVersion : "1.0.0",
    typeURL: FunctionTypeURL,

    id : FunctionEventID,
    time : FunctionInvocationTimestamp,
    source : FunctionSource,

    label: Label;
    tags: Tags;
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
    functionEventType: FunctionEventType,
    functionEventID: FunctionEventID,
    functionLogID: FunctionLogID,

    logStorageAccount: LogStorageAccount,
    logStorageContainer: LogStorageContainer,

    url: FunctionEventSource
}    

export {
    FunctionLogID,
    FunctionName,
    FunctionInvocationID,
    FunctionInvocationTime,
    FunctionInvocationTimestamp,
    FunctionCallbackType,
    FunctionInvocationStatus,
    FunctionInvocationEventSpecVersion,
    FunctionInvocationEventDataContentType,
    Label,
    Tags,

    FunctionRequest,
    FunctionResponse,
    FunctionLogObject,
    FunctionCallbackMessage,
    FunctionInvocationEvent,
    FunctionRequestPayload,
    FunctionResponsePayload,
    FunctionLogObjectPayload,
    FunctionCallbackMessagePayload,
    FunctionInvocationEventPayload
}