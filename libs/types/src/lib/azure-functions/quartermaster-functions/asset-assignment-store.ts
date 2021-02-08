import * as Cosmos from "../common";

interface AssetAssignmentStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: AssetAssignmentStoreFunctionRequestPayload;
}

interface AssetAssignmentStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetAssignmentStoreFunctionResponsePayload;
}

interface AssetAssignmentStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetAssignmentStoreFunctionResponsePayload;
}

interface AssetAssignmentStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetAssignmentStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetAssignmentStoreFunctionInvocationEventPayload;
}

interface AssetAssignmentStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AssetAssignmentStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetAssignmentStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetAssignmentStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetAssignmentStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetAssignmentStoreFunctionRequest,
    AssetAssignmentStoreFunctionResponse,
    AssetAssignmentStoreFunctionLogObject,
    AssetAssignmentStoreFunctionCallbackMessage,
    AssetAssignmentStoreFunctionInvocationEvent,
    AssetAssignmentStoreFunctionRequestPayload,
    AssetAssignmentStoreFunctionResponsePayload,
    AssetAssignmentStoreFunctionLogObjectPayload,
    AssetAssignmentStoreFunctionCallbackMessagePayload,
    AssetAssignmentStoreFunctionInvocationEventPayload
}
