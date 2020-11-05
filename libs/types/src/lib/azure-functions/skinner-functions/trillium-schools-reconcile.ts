import * as Cosmos from "../common";
import { TrilliumSchool } from "@cosmos/types";

interface TrilliumSchoolsReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumSchoolsReconcileFunctionRequestPayload;
}

interface TrilliumSchoolsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumSchoolsReconcileFunctionResponsePayload;
}

interface TrilliumSchoolsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumSchoolsReconcileFunctionResponsePayload;
}

interface TrilliumSchoolsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumSchoolsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumSchoolsReconcileFunctionInvocationEventPayload;
}

interface TrilliumSchoolsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumSchoolsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumSchoolsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumSchoolsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumSchoolsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumSchoolsReconcileFunctionRequest,
    TrilliumSchoolsReconcileFunctionResponse,
    TrilliumSchoolsReconcileFunctionLogObject,
    TrilliumSchoolsReconcileFunctionCallbackMessage,
    TrilliumSchoolsReconcileFunctionInvocationEvent,
    TrilliumSchoolsReconcileFunctionRequestPayload,
    TrilliumSchoolsReconcileFunctionResponsePayload,
    TrilliumSchoolsReconcileFunctionLogObjectPayload,
    TrilliumSchoolsReconcileFunctionCallbackMessagePayload,
    TrilliumSchoolsReconcileFunctionInvocationEventPayload
}
