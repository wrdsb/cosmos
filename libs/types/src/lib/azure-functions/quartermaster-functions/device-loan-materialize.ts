import * as Cosmos from "../common";

interface DeviceLoanMaterializeFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: DeviceLoanMaterializeFunctionRequestPayload;
}

interface DeviceLoanMaterializeFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: DeviceLoanMaterializeFunctionResponsePayload;
}

interface DeviceLoanMaterializeFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: DeviceLoanMaterializeFunctionResponsePayload;
}

interface DeviceLoanMaterializeFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface DeviceLoanMaterializeFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: DeviceLoanMaterializeFunctionInvocationEventPayload;
}

interface DeviceLoanMaterializeFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly assetID: string;
}

interface DeviceLoanMaterializeFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface DeviceLoanMaterializeFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface DeviceLoanMaterializeFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface DeviceLoanMaterializeFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    DeviceLoanMaterializeFunctionRequest,
    DeviceLoanMaterializeFunctionResponse,
    DeviceLoanMaterializeFunctionLogObject,
    DeviceLoanMaterializeFunctionCallbackMessage,
    DeviceLoanMaterializeFunctionInvocationEvent,
    DeviceLoanMaterializeFunctionRequestPayload,
    DeviceLoanMaterializeFunctionResponsePayload,
    DeviceLoanMaterializeFunctionLogObjectPayload,
    DeviceLoanMaterializeFunctionCallbackMessagePayload,
    DeviceLoanMaterializeFunctionInvocationEventPayload
}
