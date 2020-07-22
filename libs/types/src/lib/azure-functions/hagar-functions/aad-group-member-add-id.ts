import * as Cosmos from "../common";

interface AADGroupMemberAddIDFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: AADGroupMemberAddIDFunctionRequestPayload;
}

interface AADGroupMemberAddIDFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: AADGroupMemberAddIDFunctionResponsePayload;
}

interface AADGroupMemberAddIDFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: AADGroupMemberAddIDFunctionResponsePayload;
}

interface AADGroupMemberAddIDFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface AADGroupMemberAddIDFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: AADGroupMemberAddIDFunctionInvocationEventPayload;
}

interface AADGroupMemberAddIDFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly groupID: string;
    readonly memberIDs: string[];
}

interface AADGroupMemberAddIDFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface AADGroupMemberAddIDFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface AADGroupMemberAddIDFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface AADGroupMemberAddIDFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    AADGroupMemberAddIDFunctionRequest,
    AADGroupMemberAddIDFunctionResponse,
    AADGroupMemberAddIDFunctionLogObject,
    AADGroupMemberAddIDFunctionCallbackMessage,
    AADGroupMemberAddIDFunctionInvocationEvent,
    AADGroupMemberAddIDFunctionRequestPayload,
    AADGroupMemberAddIDFunctionResponsePayload,
    AADGroupMemberAddIDFunctionLogObjectPayload,
    AADGroupMemberAddIDFunctionCallbackMessagePayload,
    AADGroupMemberAddIDFunctionInvocationEventPayload
}
