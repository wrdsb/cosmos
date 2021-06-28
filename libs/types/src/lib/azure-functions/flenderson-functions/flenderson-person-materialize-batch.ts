import * as Cosmos from "../common";

interface FlendersonPersonMaterializeBatchFunctionRequest {
    readonly payload: FlendersonPersonMaterializeBatchFunctionRequestPayload;
}

interface FlendersonPersonMaterializeBatchFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPersonMaterializeBatchFunctionResponsePayload;
}

interface FlendersonPersonMaterializeBatchFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPersonMaterializeBatchFunctionResponsePayload;
}

interface FlendersonPersonMaterializeBatchFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPersonMaterializeBatchFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPersonMaterializeBatchFunctionInvocationEventPayload;
}

interface FlendersonPersonMaterializeBatchFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly all: boolean;
    readonly employeeGroupCode?: string;
    readonly jobCode?: string;
    readonly locationCode?: string;
    readonly positionID?: string;
}

interface FlendersonPersonMaterializeBatchFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPersonMaterializeBatchFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPersonMaterializeBatchFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPersonMaterializeBatchFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPersonMaterializeBatchFunctionRequest,
    FlendersonPersonMaterializeBatchFunctionResponse,
    FlendersonPersonMaterializeBatchFunctionLogObject,
    FlendersonPersonMaterializeBatchFunctionCallbackMessage,
    FlendersonPersonMaterializeBatchFunctionInvocationEvent,
    FlendersonPersonMaterializeBatchFunctionRequestPayload,
    FlendersonPersonMaterializeBatchFunctionResponsePayload,
    FlendersonPersonMaterializeBatchFunctionLogObjectPayload,
    FlendersonPersonMaterializeBatchFunctionCallbackMessagePayload,
    FlendersonPersonMaterializeBatchFunctionInvocationEventPayload
}
