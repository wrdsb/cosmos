import { HttpRequest } from "@azure/functions"
import * as Cosmos from "../common";

interface DeviceLoanSubmissionCommandFunctionRequest extends HttpRequest {
    body: DeviceLoanSubmissionCommandFunctionRequestPayload;
}

interface DeviceLoanSubmissionCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly jobType: DeviceLoanSubmissionCommandJobType;
    readonly operation: DeviceLoanSubmissionCommandOperation;
    readonly payload: DeviceLoanSubmissionCommandFunctionRequestPayload;
}







interface DeviceLoanSubmissionCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: DeviceLoanSubmissionCommandFunctionResponsePayload;
}

interface DeviceLoanSubmissionCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: DeviceLoanSubmissionCommandFunctionResponsePayload;
}

interface DeviceLoanSubmissionCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface DeviceLoanSubmissionCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: DeviceLoanSubmissionCommandFunctionInvocationEventPayload;
}


interface DeviceLoanSubmissionCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface DeviceLoanSubmissionCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface DeviceLoanSubmissionCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface DeviceLoanSubmissionCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

type DeviceLoanSubmissionCommandJobType = 'Quartermaster.DeviceLoanSubmission.Store' | 'Quartermaster.DeviceLoanSubmission.Return';
type DeviceLoanSubmissionCommandOperation = 'patch' | 'replace' | 'delete' | 'materialize';

export {
    DeviceLoanSubmissionCommandFunctionRequest,
    DeviceLoanSubmissionCommandFunctionResponse,
    DeviceLoanSubmissionCommandFunctionLogObject,
    DeviceLoanSubmissionCommandFunctionCallbackMessage,
    DeviceLoanSubmissionCommandFunctionInvocationEvent,
    DeviceLoanSubmissionCommandFunctionRequestPayload,
    DeviceLoanSubmissionCommandFunctionResponsePayload,
    DeviceLoanSubmissionCommandFunctionLogObjectPayload,
    DeviceLoanSubmissionCommandFunctionCallbackMessagePayload,
    DeviceLoanSubmissionCommandFunctionInvocationEventPayload
}
