import * as Cosmos from "../common";
import { TrilliumClass } from "@cosmos/types";

interface TrilliumClassStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumClassStoreFunctionRequestPayload;
}

interface TrilliumClassStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumClassStoreFunctionResponsePayload;
}

interface TrilliumClassStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumClassStoreFunctionResponsePayload;
}

interface TrilliumClassStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumClassStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumClassStoreFunctionInvocationEventPayload;
}

interface TrilliumClassStoreFunctionRequestPayload extends TrilliumClass {
}

interface TrilliumClassStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumClassStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumClassStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumClassStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumClassStoreFunctionRequest,
    TrilliumClassStoreFunctionResponse,
    TrilliumClassStoreFunctionLogObject,
    TrilliumClassStoreFunctionCallbackMessage,
    TrilliumClassStoreFunctionInvocationEvent,
    TrilliumClassStoreFunctionRequestPayload,
    TrilliumClassStoreFunctionResponsePayload,
    TrilliumClassStoreFunctionLogObjectPayload,
    TrilliumClassStoreFunctionCallbackMessagePayload,
    TrilliumClassStoreFunctionInvocationEventPayload
}
