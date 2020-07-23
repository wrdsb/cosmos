import * as Cosmos from "../common";

interface PeopleSetMembershipStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: PeopleSetMembershipStoreFunctionRequestPayload;
}

interface PeopleSetMembershipStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetMembershipStoreFunctionResponsePayload;
}

interface PeopleSetMembershipStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetMembershipStoreFunctionResponsePayload;
}

interface PeopleSetMembershipStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetMembershipStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetMembershipStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetMembershipStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetMembershipStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetMembershipStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetMembershipStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetMembershipStoreFunctionRequest,
    PeopleSetMembershipStoreFunctionResponse,
    PeopleSetMembershipStoreFunctionLogObject,
    PeopleSetMembershipStoreFunctionCallbackMessage,
    PeopleSetMembershipStoreFunctionInvocationEvent,
    PeopleSetMembershipStoreFunctionRequestPayload,
    PeopleSetMembershipStoreFunctionResponsePayload,
    PeopleSetMembershipStoreFunctionLogObjectPayload,
    PeopleSetMembershipStoreFunctionCallbackMessagePayload,
    PeopleSetMembershipStoreFunctionInvocationEventPayload
}
