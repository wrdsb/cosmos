import { HttpRequest } from "@azure/functions"
import * as Cosmos from "../common";
import { QuartermasterJobType } from "@cosmos/types";

interface QuartermasterCommandFunctionRequest extends HttpRequest {
    body: QuartermasterCommandFunctionRequestBody;
}

interface QuartermasterCommandFunctionRequestBody extends Cosmos.FunctionRequestPayload {
    readonly jobType: QuartermasterCommandJobType;
    readonly operation: QuartermasterCommandOperation;
    readonly payload: QuartermasterCommandFunctionRequestPayload;
}

type QuartermasterCommandJobType = QuartermasterJobType;

type QuartermasterCommandOperation = 
    'patch' | 
    'replace' | 
    'delete' | 
    'materialize';

interface QuartermasterCommandFunctionRequestPayload {}


interface QuartermasterCommandFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: QuartermasterCommandFunctionResponsePayload;
}

interface QuartermasterCommandFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: QuartermasterCommandFunctionResponsePayload;
}

interface QuartermasterCommandFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface QuartermasterCommandFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: QuartermasterCommandFunctionInvocationEventPayload;
}


interface QuartermasterCommandFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface QuartermasterCommandFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface QuartermasterCommandFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface QuartermasterCommandFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}


export {
    QuartermasterCommandFunctionRequest,
    QuartermasterCommandFunctionRequestBody,
    QuartermasterCommandJobType,
    QuartermasterCommandOperation,
    QuartermasterCommandFunctionRequestPayload,
    QuartermasterCommandFunctionResponse,
    QuartermasterCommandFunctionLogObject,
    QuartermasterCommandFunctionCallbackMessage,
    QuartermasterCommandFunctionInvocationEvent,
    QuartermasterCommandFunctionResponsePayload,
    QuartermasterCommandFunctionLogObjectPayload,
    QuartermasterCommandFunctionCallbackMessagePayload,
    QuartermasterCommandFunctionInvocationEventPayload
}
