import * as Cosmos from "./common";

interface SearchFunctionRequest extends Cosmos.FunctionRequest {
    payload: SearchFunctionRequestPayload;
}

interface SearchFunctionResponse {
    readonly header: SearchFunctionResponseHeader;
    readonly payload: SearchFunctionResponsePayload;
}

interface SearchFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly header: SearchFunctionResponseHeader;
    readonly payload: SearchFunctionResponsePayload;
}

interface SearchFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface SearchFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {}

interface SearchFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    search?: string;
    includeTotalCount?: boolean;
    filter?: string;
    facets?: string[];
    orderby?: string[];
    skip?: number;
    top?: number;
    select?: string[];
    searchFields?: string[];
}

interface SearchFunctionResponseHeader {
    readonly status: number;
    readonly message: string;
    readonly chatter: string;
    readonly timestamp: string;
    readonly authenticated?: boolean;
    readonly authorized?: boolean;
    readonly userName?: string;
    readonly userEmail?: string;
    readonly userRoles?: string;
}

interface SearchFunctionResponsePayload {
    readonly count?: number;
    readonly facets?: any;
    readonly documents?: any[];
}

interface SearchFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface SearchFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface SearchFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    SearchFunctionRequest,
    SearchFunctionResponse,
    SearchFunctionLogObject,
    SearchFunctionCallbackMessage,
    SearchFunctionInvocationEvent,
    SearchFunctionRequestPayload,
    SearchFunctionResponseHeader,
    SearchFunctionResponsePayload,
    SearchFunctionLogObjectPayload,
    SearchFunctionCallbackMessagePayload,
    SearchFunctionInvocationEventPayload
}
