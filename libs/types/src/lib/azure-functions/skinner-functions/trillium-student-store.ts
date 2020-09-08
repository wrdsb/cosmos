import * as Cosmos from "../common";
import { TrilliumStudent } from "@cosmos/types";

interface TrilliumStudentStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumStudentStoreFunctionRequestPayload;
}

interface TrilliumStudentStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumStudentStoreFunctionResponsePayload;
}

interface TrilliumStudentStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumStudentStoreFunctionResponsePayload;
}

interface TrilliumStudentStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumStudentStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumStudentStoreFunctionInvocationEventPayload;
}

interface TrilliumStudentStoreFunctionRequestPayload extends TrilliumStudent {
}

interface TrilliumStudentStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumStudentStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumStudentStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumStudentStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumStudentStoreFunctionRequest,
    TrilliumStudentStoreFunctionResponse,
    TrilliumStudentStoreFunctionLogObject,
    TrilliumStudentStoreFunctionCallbackMessage,
    TrilliumStudentStoreFunctionInvocationEvent,
    TrilliumStudentStoreFunctionRequestPayload,
    TrilliumStudentStoreFunctionResponsePayload,
    TrilliumStudentStoreFunctionLogObjectPayload,
    TrilliumStudentStoreFunctionCallbackMessagePayload,
    TrilliumStudentStoreFunctionInvocationEventPayload
}
