import * as Cosmos from "../common";

interface PeopleSetDefinitionQueryFunctionRequest extends Cosmos.FunctionRequest {
}

interface PeopleSetDefinitionQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: PeopleSetDefinitionQueryFunctionResponsePayload;
}

interface PeopleSetDefinitionQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: PeopleSetDefinitionQueryFunctionResponsePayload;
}

interface PeopleSetDefinitionQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface PeopleSetDefinitionQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface PeopleSetDefinitionQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface PeopleSetDefinitionQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface PeopleSetDefinitionQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface PeopleSetDefinitionQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface PeopleSetDefinitionQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    PeopleSetDefinitionQueryFunctionRequest,
    PeopleSetDefinitionQueryFunctionResponse,
    PeopleSetDefinitionQueryFunctionLogObject,
    PeopleSetDefinitionQueryFunctionCallbackMessage,
    PeopleSetDefinitionQueryFunctionInvocationEvent,
    PeopleSetDefinitionQueryFunctionRequestPayload,
    PeopleSetDefinitionQueryFunctionResponsePayload,
    PeopleSetDefinitionQueryFunctionLogObjectPayload,
    PeopleSetDefinitionQueryFunctionCallbackMessagePayload,
    PeopleSetDefinitionQueryFunctionInvocationEventPayload
}
