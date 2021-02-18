import * as Cosmos from "../common";

interface IPPSPeopleReconcileFunctionRequest {
    readonly payload: IPPSPeopleReconcileFunctionRequestPayload;
}

interface IPPSPeopleReconcileFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPeopleReconcileFunctionResponsePayload;
}

interface IPPSPeopleReconcileFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPeopleReconcileFunctionResponsePayload;
}

interface IPPSPeopleReconcileFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPeopleReconcileFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPeopleReconcileFunctionInvocationEventPayload;
}

interface IPPSPeopleReconcileFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface IPPSPeopleReconcileFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPeopleReconcileFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPeopleReconcileFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPeopleReconcileFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPeopleReconcileFunctionRequest,
    IPPSPeopleReconcileFunctionResponse,
    IPPSPeopleReconcileFunctionLogObject,
    IPPSPeopleReconcileFunctionCallbackMessage,
    IPPSPeopleReconcileFunctionInvocationEvent,
    IPPSPeopleReconcileFunctionRequestPayload,
    IPPSPeopleReconcileFunctionResponsePayload,
    IPPSPeopleReconcileFunctionLogObjectPayload,
    IPPSPeopleReconcileFunctionCallbackMessagePayload,
    IPPSPeopleReconcileFunctionInvocationEventPayload
}
