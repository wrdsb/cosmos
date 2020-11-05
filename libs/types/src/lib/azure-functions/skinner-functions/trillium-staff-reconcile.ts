import * as Cosmos from "../common";
import { TrilliumStaff } from "@cosmos/types";

interface TrilliumStaffReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumStaffReconcileFunctionRequestPayload;
}

interface TrilliumStaffReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStaffReconcileFunctionResponsePayload;
}

interface TrilliumStaffReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStaffReconcileFunctionResponsePayload;
}

interface TrilliumStaffReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStaffReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStaffReconcileFunctionInvocationEventPayload;
}

interface TrilliumStaffReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumStaffReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStaffReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStaffReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStaffReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStaffReconcileFunctionRequest,
    TrilliumStaffReconcileFunctionResponse,
    TrilliumStaffReconcileFunctionLogObject,
    TrilliumStaffReconcileFunctionCallbackMessage,
    TrilliumStaffReconcileFunctionInvocationEvent,
    TrilliumStaffReconcileFunctionRequestPayload,
    TrilliumStaffReconcileFunctionResponsePayload,
    TrilliumStaffReconcileFunctionLogObjectPayload,
    TrilliumStaffReconcileFunctionCallbackMessagePayload,
    TrilliumStaffReconcileFunctionInvocationEventPayload
}
