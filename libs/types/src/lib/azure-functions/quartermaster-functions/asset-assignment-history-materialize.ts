import * as Cosmos from "../common";

interface AssetAssignmentHistoryMaterializeFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AssetAssignmentHistoryMaterializeFunctionRequestPayload;
}

interface AssetAssignmentHistoryMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetAssignmentHistoryMaterializeFunctionResponsePayload;
}

interface AssetAssignmentHistoryMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetAssignmentHistoryMaterializeFunctionResponsePayload;
}

interface AssetAssignmentHistoryMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetAssignmentHistoryMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetAssignmentHistoryMaterializeFunctionInvocationEventPayload;
}

interface AssetAssignmentHistoryMaterializeFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly assetID: string;
}

interface AssetAssignmentHistoryMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetAssignmentHistoryMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetAssignmentHistoryMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetAssignmentHistoryMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetAssignmentHistoryMaterializeFunctionRequest,
    AssetAssignmentHistoryMaterializeFunctionResponse,
    AssetAssignmentHistoryMaterializeFunctionLogObject,
    AssetAssignmentHistoryMaterializeFunctionCallbackMessage,
    AssetAssignmentHistoryMaterializeFunctionInvocationEvent,
    AssetAssignmentHistoryMaterializeFunctionRequestPayload,
    AssetAssignmentHistoryMaterializeFunctionResponsePayload,
    AssetAssignmentHistoryMaterializeFunctionLogObjectPayload,
    AssetAssignmentHistoryMaterializeFunctionCallbackMessagePayload,
    AssetAssignmentHistoryMaterializeFunctionInvocationEventPayload
}
