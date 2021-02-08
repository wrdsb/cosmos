import * as Cosmos from "../common";

interface AssetEntitlementStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: AssetEntitlementStoreFunctionRequestPayload;
}

interface AssetEntitlementStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AssetEntitlementStoreFunctionResponsePayload;
}

interface AssetEntitlementStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AssetEntitlementStoreFunctionResponsePayload;
}

interface AssetEntitlementStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AssetEntitlementStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AssetEntitlementStoreFunctionInvocationEventPayload;
}

interface AssetEntitlementStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface AssetEntitlementStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AssetEntitlementStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AssetEntitlementStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AssetEntitlementStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AssetEntitlementStoreFunctionRequest,
    AssetEntitlementStoreFunctionResponse,
    AssetEntitlementStoreFunctionLogObject,
    AssetEntitlementStoreFunctionCallbackMessage,
    AssetEntitlementStoreFunctionInvocationEvent,
    AssetEntitlementStoreFunctionRequestPayload,
    AssetEntitlementStoreFunctionResponsePayload,
    AssetEntitlementStoreFunctionLogObjectPayload,
    AssetEntitlementStoreFunctionCallbackMessagePayload,
    AssetEntitlementStoreFunctionInvocationEventPayload
}
