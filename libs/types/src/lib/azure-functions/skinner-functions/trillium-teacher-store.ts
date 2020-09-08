import * as Cosmos from "../common";
import { TrilliumTeacher } from "@cosmos/types";

interface TrilliumTeacherStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumTeacherStoreFunctionRequestPayload;
}

interface TrilliumTeacherStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumTeacherStoreFunctionResponsePayload;
}

interface TrilliumTeacherStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumTeacherStoreFunctionResponsePayload;
}

interface TrilliumTeacherStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumTeacherStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumTeacherStoreFunctionInvocationEventPayload;
}

interface TrilliumTeacherStoreFunctionRequestPayload extends TrilliumTeacher {
}

interface TrilliumTeacherStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumTeacherStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumTeacherStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumTeacherStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumTeacherStoreFunctionRequest,
    TrilliumTeacherStoreFunctionResponse,
    TrilliumTeacherStoreFunctionLogObject,
    TrilliumTeacherStoreFunctionCallbackMessage,
    TrilliumTeacherStoreFunctionInvocationEvent,
    TrilliumTeacherStoreFunctionRequestPayload,
    TrilliumTeacherStoreFunctionResponsePayload,
    TrilliumTeacherStoreFunctionLogObjectPayload,
    TrilliumTeacherStoreFunctionCallbackMessagePayload,
    TrilliumTeacherStoreFunctionInvocationEventPayload
}
