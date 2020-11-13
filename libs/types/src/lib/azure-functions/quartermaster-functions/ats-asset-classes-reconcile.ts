import * as Cosmos from "../common";
import { ATSAssetClass } from "@cosmos/types";

interface ATSAssetClassesReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ATSAssetClassesReconcileFunctionRequestPayload;
}

interface ATSAssetClassesReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetClassesReconcileFunctionResponsePayload;
}

interface ATSAssetClassesReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetClassesReconcileFunctionResponsePayload;
}

interface ATSAssetClassesReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetClassesReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetClassesReconcileFunctionInvocationEventPayload;
}

interface ATSAssetClassesReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ATSAssetClassesReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetClassesReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetClassesReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetClassesReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetClassesReconcileFunctionRequest,
    ATSAssetClassesReconcileFunctionResponse,
    ATSAssetClassesReconcileFunctionLogObject,
    ATSAssetClassesReconcileFunctionCallbackMessage,
    ATSAssetClassesReconcileFunctionInvocationEvent,
    ATSAssetClassesReconcileFunctionRequestPayload,
    ATSAssetClassesReconcileFunctionResponsePayload,
    ATSAssetClassesReconcileFunctionLogObjectPayload,
    ATSAssetClassesReconcileFunctionCallbackMessagePayload,
    ATSAssetClassesReconcileFunctionInvocationEventPayload
}
