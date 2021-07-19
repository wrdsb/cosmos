import * as Cosmos from "../common";
import { WPDomain, WPSite, WPService, WPEnvironment } from "@cosmos/types"

interface WPUserGetAllFunctionRequest {
    readonly payload: WPUserGetAllFunctionRequestPayload;
}

interface WPUserGetAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserGetAllFunctionResponsePayload;
}

interface WPUserGetAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserGetAllFunctionResponsePayload;
}

interface WPUserGetAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserGetAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserGetAllFunctionInvocationEventPayload;
}

interface WPUserGetAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    wpDomain?: WPDomain;
    wpSite?: WPSite;
    wpService?: WPService;
    wpEnvironment?: WPEnvironment;
}

interface WPUserGetAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserGetAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserGetAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserGetAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserGetAllFunctionRequest,
    WPUserGetAllFunctionResponse,
    WPUserGetAllFunctionLogObject,
    WPUserGetAllFunctionCallbackMessage,
    WPUserGetAllFunctionInvocationEvent,
    WPUserGetAllFunctionRequestPayload,
    WPUserGetAllFunctionResponsePayload,
    WPUserGetAllFunctionLogObjectPayload,
    WPUserGetAllFunctionCallbackMessagePayload,
    WPUserGetAllFunctionInvocationEventPayload
}
