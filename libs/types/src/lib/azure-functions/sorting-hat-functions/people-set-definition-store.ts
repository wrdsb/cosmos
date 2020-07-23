import * as Cosmos from "../common";

interface PeopleSetDefinitionStoreFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: PeopleSetDefinitionStoreFunctionRequestPayload;
}

interface PeopleSetDefinitionStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetDefinitionStoreFunctionResponsePayload;
}

interface PeopleSetDefinitionStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetDefinitionStoreFunctionResponsePayload;
}

interface PeopleSetDefinitionStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetDefinitionStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetDefinitionStoreFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetDefinitionStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetDefinitionStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetDefinitionStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetDefinitionStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetDefinitionStoreFunctionRequest,
    PeopleSetDefinitionStoreFunctionResponse,
    PeopleSetDefinitionStoreFunctionLogObject,
    PeopleSetDefinitionStoreFunctionCallbackMessage,
    PeopleSetDefinitionStoreFunctionInvocationEvent,
    PeopleSetDefinitionStoreFunctionRequestPayload,
    PeopleSetDefinitionStoreFunctionResponsePayload,
    PeopleSetDefinitionStoreFunctionLogObjectPayload,
    PeopleSetDefinitionStoreFunctionCallbackMessagePayload,
    PeopleSetDefinitionStoreFunctionInvocationEventPayload
}
