import * as Cosmos from "../common";
import { ATSAssetClassType } from "@cosmos/types";

interface ATSAssetClassTypesReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ATSAssetClassTypesReconcileFunctionRequestPayload;
}

interface ATSAssetClassTypesReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetClassTypesReconcileFunctionResponsePayload;
}

interface ATSAssetClassTypesReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetClassTypesReconcileFunctionResponsePayload;
}

interface ATSAssetClassTypesReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetClassTypesReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetClassTypesReconcileFunctionInvocationEventPayload;
}

interface ATSAssetClassTypesReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ATSAssetClassTypesReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetClassTypesReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetClassTypesReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetClassTypesReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetClassTypesReconcileFunctionRequest,
    ATSAssetClassTypesReconcileFunctionResponse,
    ATSAssetClassTypesReconcileFunctionLogObject,
    ATSAssetClassTypesReconcileFunctionCallbackMessage,
    ATSAssetClassTypesReconcileFunctionInvocationEvent,
    ATSAssetClassTypesReconcileFunctionRequestPayload,
    ATSAssetClassTypesReconcileFunctionResponsePayload,
    ATSAssetClassTypesReconcileFunctionLogObjectPayload,
    ATSAssetClassTypesReconcileFunctionCallbackMessagePayload,
    ATSAssetClassTypesReconcileFunctionInvocationEventPayload
}
