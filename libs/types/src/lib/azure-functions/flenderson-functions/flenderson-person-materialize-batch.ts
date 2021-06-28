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

interface FlendersonPersonMaterializeBatchFunctionRequestPayload {
    readonly all: boolean;
    readonly employeeID?: string;
    readonly email?: string;
    readonly ippsEmployeeGroupCode?: string;
    readonly ippsJobCode?: string;
    readonly ippsLocationCode?: string;
    readonly ippsPositionID?: string;
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
