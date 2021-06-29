import * as Cosmos from "../common";

interface FlendersonPositionMaterializeBatchFunctionRequest {
    readonly payload: FlendersonPositionMaterializeBatchFunctionRequestPayload;
}

interface FlendersonPositionMaterializeBatchFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPositionMaterializeBatchFunctionResponsePayload;
}

interface FlendersonPositionMaterializeBatchFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPositionMaterializeBatchFunctionResponsePayload;
}

interface FlendersonPositionMaterializeBatchFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPositionMaterializeBatchFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPositionMaterializeBatchFunctionInvocationEventPayload;
}

interface FlendersonPositionMaterializeBatchFunctionRequestPayload {
    readonly all: boolean;
    readonly employeeID?: string;
    readonly email?: string;
    readonly ippsEmployeeGroupCode?: string;
    readonly ippsJobCode?: string;
    readonly ippsLocationCode?: string;
    readonly ippsPositionID?: string;
}

interface FlendersonPositionMaterializeBatchFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPositionMaterializeBatchFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPositionMaterializeBatchFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPositionMaterializeBatchFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPositionMaterializeBatchFunctionRequest,
    FlendersonPositionMaterializeBatchFunctionResponse,
    FlendersonPositionMaterializeBatchFunctionLogObject,
    FlendersonPositionMaterializeBatchFunctionCallbackMessage,
    FlendersonPositionMaterializeBatchFunctionInvocationEvent,
    FlendersonPositionMaterializeBatchFunctionRequestPayload,
    FlendersonPositionMaterializeBatchFunctionResponsePayload,
    FlendersonPositionMaterializeBatchFunctionLogObjectPayload,
    FlendersonPositionMaterializeBatchFunctionCallbackMessagePayload,
    FlendersonPositionMaterializeBatchFunctionInvocationEventPayload
}
