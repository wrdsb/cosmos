import * as Cosmos from "../common";
import { TrilliumClass } from "@cosmos/types";

interface TrilliumClassesReconcileFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumClassesReconcileFunctionRequestPayload;
}

interface TrilliumClassesReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumClassesReconcileFunctionResponsePayload;
}

interface TrilliumClassesReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumClassesReconcileFunctionResponsePayload;
}

interface TrilliumClassesReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumClassesReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumClassesReconcileFunctionInvocationEventPayload;
}

interface TrilliumClassesReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumClassesReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumClassesReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumClassesReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumClassesReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumClassesReconcileFunctionRequest,
    TrilliumClassesReconcileFunctionResponse,
    TrilliumClassesReconcileFunctionLogObject,
    TrilliumClassesReconcileFunctionCallbackMessage,
    TrilliumClassesReconcileFunctionInvocationEvent,
    TrilliumClassesReconcileFunctionRequestPayload,
    TrilliumClassesReconcileFunctionResponsePayload,
    TrilliumClassesReconcileFunctionLogObjectPayload,
    TrilliumClassesReconcileFunctionCallbackMessagePayload,
    TrilliumClassesReconcileFunctionInvocationEventPayload
}
