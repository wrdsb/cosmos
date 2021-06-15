import * as Cosmos from "../common";
import { IPPSPosition } from "@cosmos/types";

interface FlendersonPositionMaterializeFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: FlendersonPositionMaterializeFunctionRequestPayload;
}

interface FlendersonPositionMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: FlendersonPositionMaterializeFunctionResponsePayload;
}

interface FlendersonPositionMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: FlendersonPositionMaterializeFunctionResponsePayload;
}

interface FlendersonPositionMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface FlendersonPositionMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: FlendersonPositionMaterializeFunctionInvocationEventPayload;
}

interface FlendersonPositionMaterializeFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly ippsPosition: IPPSPosition;
}

interface FlendersonPositionMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface FlendersonPositionMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface FlendersonPositionMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface FlendersonPositionMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    FlendersonPositionMaterializeFunctionRequest,
    FlendersonPositionMaterializeFunctionResponse,
    FlendersonPositionMaterializeFunctionLogObject,
    FlendersonPositionMaterializeFunctionCallbackMessage,
    FlendersonPositionMaterializeFunctionInvocationEvent,
    FlendersonPositionMaterializeFunctionRequestPayload,
    FlendersonPositionMaterializeFunctionResponsePayload,
    FlendersonPositionMaterializeFunctionLogObjectPayload,
    FlendersonPositionMaterializeFunctionCallbackMessagePayload,
    FlendersonPositionMaterializeFunctionInvocationEventPayload
}
