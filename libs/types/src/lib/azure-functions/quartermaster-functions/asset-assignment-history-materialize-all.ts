import * as Cosmos from "../common";

interface AssetAssignmentHistoryMaterializeAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AssetAssignmentHistoryMaterializeAllFunctionRequestPayload;
}

interface AssetAssignmentHistoryMaterializeAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetAssignmentHistoryMaterializeAllFunctionResponsePayload;
}

interface AssetAssignmentHistoryMaterializeAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetAssignmentHistoryMaterializeAllFunctionResponsePayload;
}

interface AssetAssignmentHistoryMaterializeAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetAssignmentHistoryMaterializeAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetAssignmentHistoryMaterializeAllFunctionInvocationEventPayload;
}

interface AssetAssignmentHistoryMaterializeAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly assetID: string;
}

interface AssetAssignmentHistoryMaterializeAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetAssignmentHistoryMaterializeAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetAssignmentHistoryMaterializeAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetAssignmentHistoryMaterializeAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetAssignmentHistoryMaterializeAllFunctionRequest,
    AssetAssignmentHistoryMaterializeAllFunctionResponse,
    AssetAssignmentHistoryMaterializeAllFunctionLogObject,
    AssetAssignmentHistoryMaterializeAllFunctionCallbackMessage,
    AssetAssignmentHistoryMaterializeAllFunctionInvocationEvent,
    AssetAssignmentHistoryMaterializeAllFunctionRequestPayload,
    AssetAssignmentHistoryMaterializeAllFunctionResponsePayload,
    AssetAssignmentHistoryMaterializeAllFunctionLogObjectPayload,
    AssetAssignmentHistoryMaterializeAllFunctionCallbackMessagePayload,
    AssetAssignmentHistoryMaterializeAllFunctionInvocationEventPayload
}
