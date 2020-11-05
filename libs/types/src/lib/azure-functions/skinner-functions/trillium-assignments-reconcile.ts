import * as Cosmos from "../common";
import { TrilliumAssignment } from "@cosmos/types";

interface TrilliumAssignmentsReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumAssignmentsReconcileFunctionRequestPayload;
}

interface TrilliumAssignmentsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumAssignmentsReconcileFunctionResponsePayload;
}

interface TrilliumAssignmentsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumAssignmentsReconcileFunctionResponsePayload;
}

interface TrilliumAssignmentsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumAssignmentsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumAssignmentsReconcileFunctionInvocationEventPayload;
}

interface TrilliumAssignmentsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumAssignmentsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumAssignmentsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumAssignmentsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumAssignmentsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumAssignmentsReconcileFunctionRequest,
    TrilliumAssignmentsReconcileFunctionResponse,
    TrilliumAssignmentsReconcileFunctionLogObject,
    TrilliumAssignmentsReconcileFunctionCallbackMessage,
    TrilliumAssignmentsReconcileFunctionInvocationEvent,
    TrilliumAssignmentsReconcileFunctionRequestPayload,
    TrilliumAssignmentsReconcileFunctionResponsePayload,
    TrilliumAssignmentsReconcileFunctionLogObjectPayload,
    TrilliumAssignmentsReconcileFunctionCallbackMessagePayload,
    TrilliumAssignmentsReconcileFunctionInvocationEventPayload
}
