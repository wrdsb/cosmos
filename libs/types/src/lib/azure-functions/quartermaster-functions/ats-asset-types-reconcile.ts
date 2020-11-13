import * as Cosmos from "../common";
import { ATSAssetType } from "@cosmos/types";

interface ATSAssetTypesReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ATSAssetTypesReconcileFunctionRequestPayload;
}

interface ATSAssetTypesReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetTypesReconcileFunctionResponsePayload;
}

interface ATSAssetTypesReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetTypesReconcileFunctionResponsePayload;
}

interface ATSAssetTypesReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetTypesReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetTypesReconcileFunctionInvocationEventPayload;
}

interface ATSAssetTypesReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ATSAssetTypesReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetTypesReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetTypesReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetTypesReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetTypesReconcileFunctionRequest,
    ATSAssetTypesReconcileFunctionResponse,
    ATSAssetTypesReconcileFunctionLogObject,
    ATSAssetTypesReconcileFunctionCallbackMessage,
    ATSAssetTypesReconcileFunctionInvocationEvent,
    ATSAssetTypesReconcileFunctionRequestPayload,
    ATSAssetTypesReconcileFunctionResponsePayload,
    ATSAssetTypesReconcileFunctionLogObjectPayload,
    ATSAssetTypesReconcileFunctionCallbackMessagePayload,
    ATSAssetTypesReconcileFunctionInvocationEventPayload
}
