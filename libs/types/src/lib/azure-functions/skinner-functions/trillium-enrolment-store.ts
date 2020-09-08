import * as Cosmos from "../common";
import { TrilliumEnrolment } from "@cosmos/types";

interface TrilliumEnrolmentStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumEnrolmentStoreFunctionRequestPayload;
}

interface TrilliumEnrolmentStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumEnrolmentStoreFunctionResponsePayload;
}

interface TrilliumEnrolmentStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumEnrolmentStoreFunctionResponsePayload;
}

interface TrilliumEnrolmentStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumEnrolmentStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumEnrolmentStoreFunctionInvocationEventPayload;
}

interface TrilliumEnrolmentStoreFunctionRequestPayload extends TrilliumEnrolment {
}

interface TrilliumEnrolmentStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumEnrolmentStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumEnrolmentStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumEnrolmentStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumEnrolmentStoreFunctionRequest,
    TrilliumEnrolmentStoreFunctionResponse,
    TrilliumEnrolmentStoreFunctionLogObject,
    TrilliumEnrolmentStoreFunctionCallbackMessage,
    TrilliumEnrolmentStoreFunctionInvocationEvent,
    TrilliumEnrolmentStoreFunctionRequestPayload,
    TrilliumEnrolmentStoreFunctionResponsePayload,
    TrilliumEnrolmentStoreFunctionLogObjectPayload,
    TrilliumEnrolmentStoreFunctionCallbackMessagePayload,
    TrilliumEnrolmentStoreFunctionInvocationEventPayload
}
