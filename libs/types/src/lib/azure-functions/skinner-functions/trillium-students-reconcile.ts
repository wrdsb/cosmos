import * as Cosmos from "../common";
import { TrilliumStudent } from "@cosmos/types";

interface TrilliumStudentsReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumStudentsReconcileFunctionRequestPayload;
}

interface TrilliumStudentsReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStudentsReconcileFunctionResponsePayload;
}

interface TrilliumStudentsReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStudentsReconcileFunctionResponsePayload;
}

interface TrilliumStudentsReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStudentsReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStudentsReconcileFunctionInvocationEventPayload;
}

interface TrilliumStudentsReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumStudentsReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStudentsReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStudentsReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStudentsReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStudentsReconcileFunctionRequest,
    TrilliumStudentsReconcileFunctionResponse,
    TrilliumStudentsReconcileFunctionLogObject,
    TrilliumStudentsReconcileFunctionCallbackMessage,
    TrilliumStudentsReconcileFunctionInvocationEvent,
    TrilliumStudentsReconcileFunctionRequestPayload,
    TrilliumStudentsReconcileFunctionResponsePayload,
    TrilliumStudentsReconcileFunctionLogObjectPayload,
    TrilliumStudentsReconcileFunctionCallbackMessagePayload,
    TrilliumStudentsReconcileFunctionInvocationEventPayload
}
