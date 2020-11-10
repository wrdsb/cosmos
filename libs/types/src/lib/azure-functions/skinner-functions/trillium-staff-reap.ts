import * as Cosmos from "../common";
import { TrilliumStaff } from "@cosmos/types";

interface TrilliumStaffReapFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: TrilliumStaffReapFunctionRequestPayload;
}

interface TrilliumStaffReapFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStaffReapFunctionResponsePayload;
}

interface TrilliumStaffReapFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStaffReapFunctionResponsePayload;
}

interface TrilliumStaffReapFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStaffReapFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStaffReapFunctionInvocationEventPayload;
}

interface TrilliumStaffReapFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface TrilliumStaffReapFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStaffReapFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStaffReapFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStaffReapFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStaffReapFunctionRequest,
    TrilliumStaffReapFunctionResponse,
    TrilliumStaffReapFunctionLogObject,
    TrilliumStaffReapFunctionCallbackMessage,
    TrilliumStaffReapFunctionInvocationEvent,
    TrilliumStaffReapFunctionRequestPayload,
    TrilliumStaffReapFunctionResponsePayload,
    TrilliumStaffReapFunctionLogObjectPayload,
    TrilliumStaffReapFunctionCallbackMessagePayload,
    TrilliumStaffReapFunctionInvocationEventPayload
}
