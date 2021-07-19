import * as Cosmos from "../common";
import { WPUser } from "@cosmos/types";

interface WPUserStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: WPUser;
}

interface WPUserStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserStoreFunctionResponsePayload;
}

interface WPUserStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserStoreFunctionResponsePayload;
}

interface WPUserStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserStoreFunctionInvocationEventPayload;
}

interface WPUserStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserStoreFunctionRequest,
    WPUserStoreFunctionResponse,
    WPUserStoreFunctionLogObject,
    WPUserStoreFunctionCallbackMessage,
    WPUserStoreFunctionInvocationEvent,
    WPUserStoreFunctionResponsePayload,
    WPUserStoreFunctionLogObjectPayload,
    WPUserStoreFunctionCallbackMessagePayload,
    WPUserStoreFunctionInvocationEventPayload
}
