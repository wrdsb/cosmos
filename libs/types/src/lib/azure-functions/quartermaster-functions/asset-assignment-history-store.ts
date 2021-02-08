import * as Cosmos from "../common";

interface AssetAssignmentHistoryStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: AssetAssignmentHistoryStoreFunctionRequestPayload;
}

interface AssetAssignmentHistoryStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetAssignmentHistoryStoreFunctionResponsePayload;
}

interface AssetAssignmentHistoryStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetAssignmentHistoryStoreFunctionResponsePayload;
}

interface AssetAssignmentHistoryStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetAssignmentHistoryStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetAssignmentHistoryStoreFunctionInvocationEventPayload;
}

interface AssetAssignmentHistoryStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AssetAssignmentHistoryStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetAssignmentHistoryStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetAssignmentHistoryStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetAssignmentHistoryStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetAssignmentHistoryStoreFunctionRequest,
    AssetAssignmentHistoryStoreFunctionResponse,
    AssetAssignmentHistoryStoreFunctionLogObject,
    AssetAssignmentHistoryStoreFunctionCallbackMessage,
    AssetAssignmentHistoryStoreFunctionInvocationEvent,
    AssetAssignmentHistoryStoreFunctionRequestPayload,
    AssetAssignmentHistoryStoreFunctionResponsePayload,
    AssetAssignmentHistoryStoreFunctionLogObjectPayload,
    AssetAssignmentHistoryStoreFunctionCallbackMessagePayload,
    AssetAssignmentHistoryStoreFunctionInvocationEventPayload
}
