import * as Cosmos from "../common";
import { CodexSearchIndex } from "@cosmos/types";

interface SearchIndexerInvokeFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: SearchIndexerInvokeFunctionRequestPayload;
}

interface SearchIndexerInvokeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: SearchIndexerInvokeFunctionResponsePayload;
}

interface SearchIndexerInvokeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: SearchIndexerInvokeFunctionResponsePayload;
}

interface SearchIndexerInvokeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface SearchIndexerInvokeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: SearchIndexerInvokeFunctionInvocationEventPayload;
}

interface SearchIndexerInvokeFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly indexName: CodexSearchIndex;
}

interface SearchIndexerInvokeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface SearchIndexerInvokeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface SearchIndexerInvokeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface SearchIndexerInvokeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    SearchIndexerInvokeFunctionRequest,
    SearchIndexerInvokeFunctionResponse,
    SearchIndexerInvokeFunctionLogObject,
    SearchIndexerInvokeFunctionCallbackMessage,
    SearchIndexerInvokeFunctionInvocationEvent,
    SearchIndexerInvokeFunctionRequestPayload,
    SearchIndexerInvokeFunctionResponsePayload,
    SearchIndexerInvokeFunctionLogObjectPayload,
    SearchIndexerInvokeFunctionCallbackMessagePayload,
    SearchIndexerInvokeFunctionInvocationEventPayload
}
