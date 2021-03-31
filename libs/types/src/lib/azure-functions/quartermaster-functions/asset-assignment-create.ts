import * as Cosmos from "../common";

interface AssetAssignmentCreateFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CreateFunctionOperation;
    readonly payload: AssetAssignmentCreateFunctionRequestPayload;
}

interface AssetAssignmentCreateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetAssignmentCreateFunctionResponsePayload;
}

interface AssetAssignmentCreateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetAssignmentCreateFunctionResponsePayload;
}

interface AssetAssignmentCreateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetAssignmentCreateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetAssignmentCreateFunctionInvocationEventPayload;
}

interface AssetAssignmentCreateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AssetAssignmentCreateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetAssignmentCreateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetAssignmentCreateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetAssignmentCreateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetAssignmentCreateFunctionRequest,
    AssetAssignmentCreateFunctionResponse,
    AssetAssignmentCreateFunctionLogObject,
    AssetAssignmentCreateFunctionCallbackMessage,
    AssetAssignmentCreateFunctionInvocationEvent,
    AssetAssignmentCreateFunctionRequestPayload,
    AssetAssignmentCreateFunctionResponsePayload,
    AssetAssignmentCreateFunctionLogObjectPayload,
    AssetAssignmentCreateFunctionCallbackMessagePayload,
    AssetAssignmentCreateFunctionInvocationEventPayload
}
