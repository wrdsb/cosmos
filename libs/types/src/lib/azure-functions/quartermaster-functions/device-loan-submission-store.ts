import * as Cosmos from "../common";

interface DeviceLoanSubmissionStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: DeviceLoanSubmissionStoreFunctionRequestPayload;
}

interface DeviceLoanSubmissionStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: DeviceLoanSubmissionStoreFunctionResponsePayload;
}

interface DeviceLoanSubmissionStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: DeviceLoanSubmissionStoreFunctionResponsePayload;
}

interface DeviceLoanSubmissionStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface DeviceLoanSubmissionStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: DeviceLoanSubmissionStoreFunctionInvocationEventPayload;
}

interface DeviceLoanSubmissionStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface DeviceLoanSubmissionStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface DeviceLoanSubmissionStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface DeviceLoanSubmissionStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface DeviceLoanSubmissionStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    DeviceLoanSubmissionStoreFunctionRequest,
    DeviceLoanSubmissionStoreFunctionResponse,
    DeviceLoanSubmissionStoreFunctionLogObject,
    DeviceLoanSubmissionStoreFunctionCallbackMessage,
    DeviceLoanSubmissionStoreFunctionInvocationEvent,
    DeviceLoanSubmissionStoreFunctionRequestPayload,
    DeviceLoanSubmissionStoreFunctionResponsePayload,
    DeviceLoanSubmissionStoreFunctionLogObjectPayload,
    DeviceLoanSubmissionStoreFunctionCallbackMessagePayload,
    DeviceLoanSubmissionStoreFunctionInvocationEventPayload
}
