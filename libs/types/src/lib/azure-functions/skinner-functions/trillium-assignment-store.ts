import * as Cosmos from "../common";
import { TrilliumAssignment } from "@cosmos/types";

interface TrilliumAssignmentStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: TrilliumAssignmentStoreFunctionRequestPayload;
}

interface TrilliumAssignmentStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: TrilliumAssignmentStoreFunctionResponsePayload;
}

interface TrilliumAssignmentStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: TrilliumAssignmentStoreFunctionResponsePayload;
}

interface TrilliumAssignmentStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface TrilliumAssignmentStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: TrilliumAssignmentStoreFunctionInvocationEventPayload;
}

interface TrilliumAssignmentStoreFunctionRequestPayload extends TrilliumAssignment {
}

interface TrilliumAssignmentStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface TrilliumAssignmentStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface TrilliumAssignmentStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface TrilliumAssignmentStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    TrilliumAssignmentStoreFunctionRequest,
    TrilliumAssignmentStoreFunctionResponse,
    TrilliumAssignmentStoreFunctionLogObject,
    TrilliumAssignmentStoreFunctionCallbackMessage,
    TrilliumAssignmentStoreFunctionInvocationEvent,
    TrilliumAssignmentStoreFunctionRequestPayload,
    TrilliumAssignmentStoreFunctionResponsePayload,
    TrilliumAssignmentStoreFunctionLogObjectPayload,
    TrilliumAssignmentStoreFunctionCallbackMessagePayload,
    TrilliumAssignmentStoreFunctionInvocationEventPayload
}
