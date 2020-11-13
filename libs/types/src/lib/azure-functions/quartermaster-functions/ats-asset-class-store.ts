import * as Cosmos from "../common";
import { ATSAssetClass } from "@cosmos/types";

interface ATSAssetClassStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: ATSAssetClassStoreFunctionRequestPayload;
}

interface ATSAssetClassStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetClassStoreFunctionResponsePayload;
}

interface ATSAssetClassStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetClassStoreFunctionResponsePayload;
}

interface ATSAssetClassStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetClassStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetClassStoreFunctionInvocationEventPayload;
}

interface ATSAssetClassStoreFunctionRequestPayload extends ATSAssetClass {
}

interface ATSAssetClassStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetClassStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetClassStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetClassStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetClassStoreFunctionRequest,
    ATSAssetClassStoreFunctionResponse,
    ATSAssetClassStoreFunctionLogObject,
    ATSAssetClassStoreFunctionCallbackMessage,
    ATSAssetClassStoreFunctionInvocationEvent,
    ATSAssetClassStoreFunctionRequestPayload,
    ATSAssetClassStoreFunctionResponsePayload,
    ATSAssetClassStoreFunctionLogObjectPayload,
    ATSAssetClassStoreFunctionCallbackMessagePayload,
    ATSAssetClassStoreFunctionInvocationEventPayload
}
