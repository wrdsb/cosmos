import * as Cosmos from "../common";
import { GoogleGroup } from "../../entities/google/google-group";

interface GroupQueryFunctionRequest extends Cosmos.FunctionRequest {
}

interface GroupQueryFunctionResponse {
    readonly payload: GoogleGroup[];
}

interface GroupQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroup[];
}

interface GroupQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GroupQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
}

interface GroupQueryFunctionRequestPayload extends Cosmos.FunctionRequestPayload {}

interface GroupQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GroupQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GroupQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GroupQueryFunctionRequest,
    GroupQueryFunctionResponse,
    GroupQueryFunctionLogObject,
    GroupQueryFunctionCallbackMessage,
    GroupQueryFunctionInvocationEvent,
    GroupQueryFunctionRequestPayload,
    GroupQueryFunctionLogObjectPayload,
    GroupQueryFunctionCallbackMessagePayload,
    GroupQueryFunctionInvocationEventPayload
}
