import * as Cosmos from "../common";
import { ATSAsset } from "@cosmos/types";

interface ATSAssetStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: ATSAssetStoreFunctionRequestPayload;
}

interface ATSAssetStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetStoreFunctionResponsePayload;
}

interface ATSAssetStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetStoreFunctionResponsePayload;
}

interface ATSAssetStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetStoreFunctionInvocationEventPayload;
}

interface ATSAssetStoreFunctionRequestPayload extends ATSAsset {
}

interface ATSAssetStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetStoreFunctionRequest,
    ATSAssetStoreFunctionResponse,
    ATSAssetStoreFunctionLogObject,
    ATSAssetStoreFunctionCallbackMessage,
    ATSAssetStoreFunctionInvocationEvent,
    ATSAssetStoreFunctionRequestPayload,
    ATSAssetStoreFunctionResponsePayload,
    ATSAssetStoreFunctionLogObjectPayload,
    ATSAssetStoreFunctionCallbackMessagePayload,
    ATSAssetStoreFunctionInvocationEventPayload
}
