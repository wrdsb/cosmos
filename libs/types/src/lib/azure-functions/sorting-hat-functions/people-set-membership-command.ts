import * as Cosmos from "../common";

interface PeopleSetMembershipCommandFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CommandFunctionOperation;
    readonly payload: PeopleSetMembershipCommandFunctionRequestPayload;
}

interface PeopleSetMembershipCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetMembershipCommandFunctionResponsePayload;
}

interface PeopleSetMembershipCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetMembershipCommandFunctionResponsePayload;
}

interface PeopleSetMembershipCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetMembershipCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetMembershipCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetMembershipCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetMembershipCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetMembershipCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetMembershipCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetMembershipCommandFunctionRequest,
    PeopleSetMembershipCommandFunctionResponse,
    PeopleSetMembershipCommandFunctionLogObject,
    PeopleSetMembershipCommandFunctionCallbackMessage,
    PeopleSetMembershipCommandFunctionInvocationEvent,
    PeopleSetMembershipCommandFunctionRequestPayload,
    PeopleSetMembershipCommandFunctionResponsePayload,
    PeopleSetMembershipCommandFunctionLogObjectPayload,
    PeopleSetMembershipCommandFunctionCallbackMessagePayload,
    PeopleSetMembershipCommandFunctionInvocationEventPayload
}
