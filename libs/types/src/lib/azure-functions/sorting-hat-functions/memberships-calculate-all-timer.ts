import * as Cosmos from "../common";

interface MembershipsCalculateAllTimerFunctionRequest extends Cosmos.FunctionRequest {
}

interface MembershipsCalculateAllTimerFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: MembershipsCalculateAllTimerFunctionResponsePayload;
}

interface MembershipsCalculateAllTimerFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: MembershipsCalculateAllTimerFunctionResponsePayload;
}

interface MembershipsCalculateAllTimerFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface MembershipsCalculateAllTimerFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface MembershipsCalculateAllTimerFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface MembershipsCalculateAllTimerFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface MembershipsCalculateAllTimerFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface MembershipsCalculateAllTimerFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface MembershipsCalculateAllTimerFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    MembershipsCalculateAllTimerFunctionRequest,
    MembershipsCalculateAllTimerFunctionResponse,
    MembershipsCalculateAllTimerFunctionLogObject,
    MembershipsCalculateAllTimerFunctionCallbackMessage,
    MembershipsCalculateAllTimerFunctionInvocationEvent,
    MembershipsCalculateAllTimerFunctionRequestPayload,
    MembershipsCalculateAllTimerFunctionResponsePayload,
    MembershipsCalculateAllTimerFunctionLogObjectPayload,
    MembershipsCalculateAllTimerFunctionCallbackMessagePayload,
    MembershipsCalculateAllTimerFunctionInvocationEventPayload
}
