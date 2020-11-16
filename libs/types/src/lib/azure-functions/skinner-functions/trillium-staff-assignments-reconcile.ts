import * as Cosmos from "../common";
import { TrilliumStaffAssignment } from "@cosmos/types";

interface TrilliumStaffAssignmentsReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumStaffAssignmentsReconcileFunctionRequestPayload;
}

interface TrilliumStaffAssignmentsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStaffAssignmentsReconcileFunctionResponsePayload;
}

interface TrilliumStaffAssignmentsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStaffAssignmentsReconcileFunctionResponsePayload;
}

interface TrilliumStaffAssignmentsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStaffAssignmentsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStaffAssignmentsReconcileFunctionInvocationEventPayload;
}

interface TrilliumStaffAssignmentsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumStaffAssignmentsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStaffAssignmentsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStaffAssignmentsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStaffAssignmentsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStaffAssignmentsReconcileFunctionRequest,
    TrilliumStaffAssignmentsReconcileFunctionResponse,
    TrilliumStaffAssignmentsReconcileFunctionLogObject,
    TrilliumStaffAssignmentsReconcileFunctionCallbackMessage,
    TrilliumStaffAssignmentsReconcileFunctionInvocationEvent,
    TrilliumStaffAssignmentsReconcileFunctionRequestPayload,
    TrilliumStaffAssignmentsReconcileFunctionResponsePayload,
    TrilliumStaffAssignmentsReconcileFunctionLogObjectPayload,
    TrilliumStaffAssignmentsReconcileFunctionCallbackMessagePayload,
    TrilliumStaffAssignmentsReconcileFunctionInvocationEventPayload
}
