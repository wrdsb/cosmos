import * as Cosmos from "../common";
import { ATSAssetClassType } from "@cosmos/types";

interface ATSAssetClassTypeStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: ATSAssetClassTypeStoreFunctionRequestPayload;
}

interface ATSAssetClassTypeStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ATSAssetClassTypeStoreFunctionResponsePayload;
}

interface ATSAssetClassTypeStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ATSAssetClassTypeStoreFunctionResponsePayload;
}

interface ATSAssetClassTypeStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ATSAssetClassTypeStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ATSAssetClassTypeStoreFunctionInvocationEventPayload;
}

interface ATSAssetClassTypeStoreFunctionRequestPayload extends ATSAssetClassType {
}

interface ATSAssetClassTypeStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ATSAssetClassTypeStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ATSAssetClassTypeStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ATSAssetClassTypeStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ATSAssetClassTypeStoreFunctionRequest,
    ATSAssetClassTypeStoreFunctionResponse,
    ATSAssetClassTypeStoreFunctionLogObject,
    ATSAssetClassTypeStoreFunctionCallbackMessage,
    ATSAssetClassTypeStoreFunctionInvocationEvent,
    ATSAssetClassTypeStoreFunctionRequestPayload,
    ATSAssetClassTypeStoreFunctionResponsePayload,
    ATSAssetClassTypeStoreFunctionLogObjectPayload,
    ATSAssetClassTypeStoreFunctionCallbackMessagePayload,
    ATSAssetClassTypeStoreFunctionInvocationEventPayload
}
