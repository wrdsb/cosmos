import * as Cosmos from "../common";

interface PeopleSetMembershipsCalculateFunctionRequest extends Cosmos.FunctionRequest {
}

interface PeopleSetMembershipsCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetMembershipsCalculateFunctionResponsePayload;
}

interface PeopleSetMembershipsCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetMembershipsCalculateFunctionResponsePayload;
}

interface PeopleSetMembershipsCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetMembershipsCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetMembershipsCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetMembershipsCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetMembershipsCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetMembershipsCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetMembershipsCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetMembershipsCalculateFunctionRequest,
    PeopleSetMembershipsCalculateFunctionResponse,
    PeopleSetMembershipsCalculateFunctionLogObject,
    PeopleSetMembershipsCalculateFunctionCallbackMessage,
    PeopleSetMembershipsCalculateFunctionInvocationEvent,
    PeopleSetMembershipsCalculateFunctionRequestPayload,
    PeopleSetMembershipsCalculateFunctionResponsePayload,
    PeopleSetMembershipsCalculateFunctionLogObjectPayload,
    PeopleSetMembershipsCalculateFunctionCallbackMessagePayload,
    PeopleSetMembershipsCalculateFunctionInvocationEventPayload
}
