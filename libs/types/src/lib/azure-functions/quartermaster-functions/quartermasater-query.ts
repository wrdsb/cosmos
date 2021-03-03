import { HttpRequest } from "@azure/functions"
import * as Cosmos from "../common";

interface QuartermasterQueryFunctionRequest extends HttpRequest {
    body: QuartermasterQueryFunctionRequestBody;
}

interface QuartermasterQueryFunctionRequestBody extends Cosmos.FunctionRequestPayload {
    readonly query: QuartermasterQueryFunctionQuery;
    readonly scope: QuartermasterQueryFunctionScope;
    readonly resultType: QuartermasterQueryFunctionResultType;
    readonly dataType: string;
    readonly id: string;
}

interface QuartermasterQueryFunctionQuery {}

type QuartermasterQueryFunctionScope = 'all' | 'first';

type QuartermasterQueryFunctionResultType = 'single' | 'array' | 'object';

interface QuartermasterQueryFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: QuartermasterQueryFunctionResponsePayload;
}

interface QuartermasterQueryFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: QuartermasterQueryFunctionResponsePayload;
}

interface QuartermasterQueryFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface QuartermasterQueryFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: QuartermasterQueryFunctionInvocationEventPayload;
}


interface QuartermasterQueryFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface QuartermasterQueryFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface QuartermasterQueryFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface QuartermasterQueryFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    QuartermasterQueryFunctionRequest,
    QuartermasterQueryFunctionRequestBody,
    QuartermasterQueryFunctionQuery,
    QuartermasterQueryFunctionScope,
    QuartermasterQueryFunctionResultType,

    QuartermasterQueryFunctionResponse,
    QuartermasterQueryFunctionLogObject,
    QuartermasterQueryFunctionCallbackMessage,
    QuartermasterQueryFunctionInvocationEvent,
    QuartermasterQueryFunctionResponsePayload,
    QuartermasterQueryFunctionLogObjectPayload,
    QuartermasterQueryFunctionCallbackMessagePayload,
    QuartermasterQueryFunctionInvocationEventPayload
}
