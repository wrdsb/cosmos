import * as Cosmos from "../common";

interface ViewIPPSJobsProcessFunctionRequest {
    readonly payload: ViewIPPSJobsProcessFunctionRequestPayload;
}

interface ViewIPPSJobsProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSJobsProcessFunctionResponsePayload;
}

interface ViewIPPSJobsProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSJobsProcessFunctionResponsePayload;
}

interface ViewIPPSJobsProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSJobsProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSJobsProcessFunctionInvocationEventPayload;
}

interface ViewIPPSJobsProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSJobsProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSJobsProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSJobsProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSJobsProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSJobsProcessFunctionRequest,
    ViewIPPSJobsProcessFunctionResponse,
    ViewIPPSJobsProcessFunctionLogObject,
    ViewIPPSJobsProcessFunctionCallbackMessage,
    ViewIPPSJobsProcessFunctionInvocationEvent,
    ViewIPPSJobsProcessFunctionRequestPayload,
    ViewIPPSJobsProcessFunctionResponsePayload,
    ViewIPPSJobsProcessFunctionLogObjectPayload,
    ViewIPPSJobsProcessFunctionCallbackMessagePayload,
    ViewIPPSJobsProcessFunctionInvocationEventPayload
}
