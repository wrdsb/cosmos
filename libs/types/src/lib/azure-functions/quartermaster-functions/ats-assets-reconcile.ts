import * as Cosmos from "../common";
import { ATSAsset } from "@cosmos/types";

interface ATSAssetsReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: ATSAssetsReconcileFunctionRequestPayload;
}

interface ATSAssetsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetsReconcileFunctionResponsePayload;
}

interface ATSAssetsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetsReconcileFunctionResponsePayload;
}

interface ATSAssetsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetsReconcileFunctionInvocationEventPayload;
}

interface ATSAssetsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ATSAssetsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetsReconcileFunctionRequest,
    ATSAssetsReconcileFunctionResponse,
    ATSAssetsReconcileFunctionLogObject,
    ATSAssetsReconcileFunctionCallbackMessage,
    ATSAssetsReconcileFunctionInvocationEvent,
    ATSAssetsReconcileFunctionRequestPayload,
    ATSAssetsReconcileFunctionResponsePayload,
    ATSAssetsReconcileFunctionLogObjectPayload,
    ATSAssetsReconcileFunctionCallbackMessagePayload,
    ATSAssetsReconcileFunctionInvocationEventPayload
}
