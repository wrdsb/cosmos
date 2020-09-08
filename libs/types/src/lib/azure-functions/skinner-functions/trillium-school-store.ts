import * as Cosmos from "../common";
import { TrilliumSchool } from "@cosmos/types";

interface TrilliumSchoolStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumSchoolStoreFunctionRequestPayload;
}

interface TrilliumSchoolStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumSchoolStoreFunctionResponsePayload;
}

interface TrilliumSchoolStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumSchoolStoreFunctionResponsePayload;
}

interface TrilliumSchoolStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumSchoolStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumSchoolStoreFunctionInvocationEventPayload;
}

interface TrilliumSchoolStoreFunctionRequestPayload extends TrilliumSchool {
}

interface TrilliumSchoolStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumSchoolStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumSchoolStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumSchoolStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumSchoolStoreFunctionRequest,
    TrilliumSchoolStoreFunctionResponse,
    TrilliumSchoolStoreFunctionLogObject,
    TrilliumSchoolStoreFunctionCallbackMessage,
    TrilliumSchoolStoreFunctionInvocationEvent,
    TrilliumSchoolStoreFunctionRequestPayload,
    TrilliumSchoolStoreFunctionResponsePayload,
    TrilliumSchoolStoreFunctionLogObjectPayload,
    TrilliumSchoolStoreFunctionCallbackMessagePayload,
    TrilliumSchoolStoreFunctionInvocationEventPayload
}
