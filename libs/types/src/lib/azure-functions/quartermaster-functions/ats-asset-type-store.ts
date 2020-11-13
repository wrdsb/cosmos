import * as Cosmos from "../common";
import { ATSAssetType } from "@cosmos/types";

interface ATSAssetTypeStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: ATSAssetTypeStoreFunctionRequestPayload;
}

interface ATSAssetTypeStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetTypeStoreFunctionResponsePayload;
}

interface ATSAssetTypeStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetTypeStoreFunctionResponsePayload;
}

interface ATSAssetTypeStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetTypeStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetTypeStoreFunctionInvocationEventPayload;
}

interface ATSAssetTypeStoreFunctionRequestPayload extends ATSAssetType {
}

interface ATSAssetTypeStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetTypeStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetTypeStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetTypeStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetTypeStoreFunctionRequest,
    ATSAssetTypeStoreFunctionResponse,
    ATSAssetTypeStoreFunctionLogObject,
    ATSAssetTypeStoreFunctionCallbackMessage,
    ATSAssetTypeStoreFunctionInvocationEvent,
    ATSAssetTypeStoreFunctionRequestPayload,
    ATSAssetTypeStoreFunctionResponsePayload,
    ATSAssetTypeStoreFunctionLogObjectPayload,
    ATSAssetTypeStoreFunctionCallbackMessagePayload,
    ATSAssetTypeStoreFunctionInvocationEventPayload
}
