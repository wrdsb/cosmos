import * as Cosmos from "../common";

interface PeopleSetDefinitionCommandFunctionRequest extends Cosmos.FunctionRequest {
    readonly operation: Cosmos.CommandFunctionOperation;
    readonly payload: PeopleSetDefinitionCommandFunctionRequestPayload;
}

interface PeopleSetDefinitionCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetDefinitionCommandFunctionResponsePayload;
}

interface PeopleSetDefinitionCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetDefinitionCommandFunctionResponsePayload;
}

interface PeopleSetDefinitionCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetDefinitionCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetDefinitionCommandFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetDefinitionCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetDefinitionCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetDefinitionCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetDefinitionCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetDefinitionCommandFunctionRequest,
    PeopleSetDefinitionCommandFunctionResponse,
    PeopleSetDefinitionCommandFunctionLogObject,
    PeopleSetDefinitionCommandFunctionCallbackMessage,
    PeopleSetDefinitionCommandFunctionInvocationEvent,
    PeopleSetDefinitionCommandFunctionRequestPayload,
    PeopleSetDefinitionCommandFunctionResponsePayload,
    PeopleSetDefinitionCommandFunctionLogObjectPayload,
    PeopleSetDefinitionCommandFunctionCallbackMessagePayload,
    PeopleSetDefinitionCommandFunctionInvocationEventPayload
}
