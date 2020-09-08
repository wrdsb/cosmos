import * as Cosmos from "../common";
import { TrilliumStaff } from "@cosmos/types";

interface TrilliumStaffStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumStaffStoreFunctionRequestPayload;
}

interface TrilliumStaffStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStaffStoreFunctionResponsePayload;
}

interface TrilliumStaffStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStaffStoreFunctionResponsePayload;
}

interface TrilliumStaffStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStaffStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStaffStoreFunctionInvocationEventPayload;
}

interface TrilliumStaffStoreFunctionRequestPayload extends TrilliumStaff {
}

interface TrilliumStaffStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStaffStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStaffStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStaffStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStaffStoreFunctionRequest,
    TrilliumStaffStoreFunctionResponse,
    TrilliumStaffStoreFunctionLogObject,
    TrilliumStaffStoreFunctionCallbackMessage,
    TrilliumStaffStoreFunctionInvocationEvent,
    TrilliumStaffStoreFunctionRequestPayload,
    TrilliumStaffStoreFunctionResponsePayload,
    TrilliumStaffStoreFunctionLogObjectPayload,
    TrilliumStaffStoreFunctionCallbackMessagePayload,
    TrilliumStaffStoreFunctionInvocationEventPayload
}
