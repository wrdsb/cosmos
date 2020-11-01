import * as Cosmos from "../common";
import { TrilliumEnrolment } from "@cosmos/types";

interface TrilliumEnrolmentsABCReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumEnrolmentsABCReconcileFunctionRequestPayload;
}

interface TrilliumEnrolmentsABCReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumEnrolmentsABCReconcileFunctionResponsePayload;
}

interface TrilliumEnrolmentsABCReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumEnrolmentsABCReconcileFunctionResponsePayload;
}

interface TrilliumEnrolmentsABCReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumEnrolmentsABCReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumEnrolmentsABCReconcileFunctionInvocationEventPayload;
}

interface TrilliumEnrolmentsABCReconcileFunctionRequestPayload extends TrilliumEnrolment {
    readonly alpha: string;
}

interface TrilliumEnrolmentsABCReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumEnrolmentsABCReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumEnrolmentsABCReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumEnrolmentsABCReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumEnrolmentsABCReconcileFunctionRequest,
    TrilliumEnrolmentsABCReconcileFunctionResponse,
    TrilliumEnrolmentsABCReconcileFunctionLogObject,
    TrilliumEnrolmentsABCReconcileFunctionCallbackMessage,
    TrilliumEnrolmentsABCReconcileFunctionInvocationEvent,
    TrilliumEnrolmentsABCReconcileFunctionRequestPayload,
    TrilliumEnrolmentsABCReconcileFunctionResponsePayload,
    TrilliumEnrolmentsABCReconcileFunctionLogObjectPayload,
    TrilliumEnrolmentsABCReconcileFunctionCallbackMessagePayload,
    TrilliumEnrolmentsABCReconcileFunctionInvocationEventPayload
}
