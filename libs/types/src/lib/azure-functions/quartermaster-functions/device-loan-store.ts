import * as Cosmos from "../common";

interface DeviceLoanStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: DeviceLoanStoreFunctionRequestPayload;
}

interface DeviceLoanStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: DeviceLoanStoreFunctionResponsePayload;
}

interface DeviceLoanStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: DeviceLoanStoreFunctionResponsePayload;
}

interface DeviceLoanStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface DeviceLoanStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: DeviceLoanStoreFunctionInvocationEventPayload;
}

interface DeviceLoanStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface DeviceLoanStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface DeviceLoanStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface DeviceLoanStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface DeviceLoanStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    DeviceLoanStoreFunctionRequest,
    DeviceLoanStoreFunctionResponse,
    DeviceLoanStoreFunctionLogObject,
    DeviceLoanStoreFunctionCallbackMessage,
    DeviceLoanStoreFunctionInvocationEvent,
    DeviceLoanStoreFunctionRequestPayload,
    DeviceLoanStoreFunctionResponsePayload,
    DeviceLoanStoreFunctionLogObjectPayload,
    DeviceLoanStoreFunctionCallbackMessagePayload,
    DeviceLoanStoreFunctionInvocationEventPayload
}
