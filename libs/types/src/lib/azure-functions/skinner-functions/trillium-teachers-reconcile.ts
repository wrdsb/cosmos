import * as Cosmos from "../common";
import { TrilliumTeacher } from "@cosmos/types";

interface TrilliumTeachersReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumTeachersReconcileFunctionRequestPayload;
}

interface TrilliumTeachersReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumTeachersReconcileFunctionResponsePayload;
}

interface TrilliumTeachersReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumTeachersReconcileFunctionResponsePayload;
}

interface TrilliumTeachersReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumTeachersReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumTeachersReconcileFunctionInvocationEventPayload;
}

interface TrilliumTeachersReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumTeachersReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumTeachersReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumTeachersReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumTeachersReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumTeachersReconcileFunctionRequest,
    TrilliumTeachersReconcileFunctionResponse,
    TrilliumTeachersReconcileFunctionLogObject,
    TrilliumTeachersReconcileFunctionCallbackMessage,
    TrilliumTeachersReconcileFunctionInvocationEvent,
    TrilliumTeachersReconcileFunctionRequestPayload,
    TrilliumTeachersReconcileFunctionResponsePayload,
    TrilliumTeachersReconcileFunctionLogObjectPayload,
    TrilliumTeachersReconcileFunctionCallbackMessagePayload,
    TrilliumTeachersReconcileFunctionInvocationEventPayload
}
