import * as Cosmos from "../common";

interface ViewIPPSPeopleProcessFunctionRequest {
    readonly payload: ViewIPPSPeopleProcessFunctionRequestPayload;
}

interface ViewIPPSPeopleProcessFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: ViewIPPSPeopleProcessFunctionResponsePayload;
}

interface ViewIPPSPeopleProcessFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: ViewIPPSPeopleProcessFunctionResponsePayload;
}

interface ViewIPPSPeopleProcessFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface ViewIPPSPeopleProcessFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: ViewIPPSPeopleProcessFunctionInvocationEventPayload;
}

interface ViewIPPSPeopleProcessFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface ViewIPPSPeopleProcessFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface ViewIPPSPeopleProcessFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface ViewIPPSPeopleProcessFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface ViewIPPSPeopleProcessFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    ViewIPPSPeopleProcessFunctionRequest,
    ViewIPPSPeopleProcessFunctionResponse,
    ViewIPPSPeopleProcessFunctionLogObject,
    ViewIPPSPeopleProcessFunctionCallbackMessage,
    ViewIPPSPeopleProcessFunctionInvocationEvent,
    ViewIPPSPeopleProcessFunctionRequestPayload,
    ViewIPPSPeopleProcessFunctionResponsePayload,
    ViewIPPSPeopleProcessFunctionLogObjectPayload,
    ViewIPPSPeopleProcessFunctionCallbackMessagePayload,
    ViewIPPSPeopleProcessFunctionInvocationEventPayload
}
