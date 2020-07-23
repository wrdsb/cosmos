import * as Cosmos from "../common";

interface PeopleSetMembershipQueryFunctionRequest extends Cosmos.FunctionRequest {
}

interface PeopleSetMembershipQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetMembershipQueryFunctionResponsePayload;
}

interface PeopleSetMembershipQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetMembershipQueryFunctionResponsePayload;
}

interface PeopleSetMembershipQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetMembershipQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetMembershipQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetMembershipQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetMembershipQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetMembershipQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetMembershipQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetMembershipQueryFunctionRequest,
    PeopleSetMembershipQueryFunctionResponse,
    PeopleSetMembershipQueryFunctionLogObject,
    PeopleSetMembershipQueryFunctionCallbackMessage,
    PeopleSetMembershipQueryFunctionInvocationEvent,
    PeopleSetMembershipQueryFunctionRequestPayload,
    PeopleSetMembershipQueryFunctionResponsePayload,
    PeopleSetMembershipQueryFunctionLogObjectPayload,
    PeopleSetMembershipQueryFunctionCallbackMessagePayload,
    PeopleSetMembershipQueryFunctionInvocationEventPayload
}
