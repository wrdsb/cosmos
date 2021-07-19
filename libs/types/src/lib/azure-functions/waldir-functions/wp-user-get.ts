import * as Cosmos from "../common";
import { WPDomain, WPSite, WPService, WPEnvironment } from "@cosmos/types"

interface WPUserGetFunctionRequest {
    readonly payload: WPUserGetFunctionRequestPayload;
}

interface WPUserGetFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserGetFunctionResponsePayload;
}

interface WPUserGetFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserGetFunctionResponsePayload;
}

interface WPUserGetFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserGetFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserGetFunctionInvocationEventPayload;
}

interface WPUserGetFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    wpDomain?: WPDomain;
    wpSite?: WPSite;
    wpService?: WPService;
    wpEnvironment?: WPEnvironment;

    employeeID?: string;
    email?: string;
    username?: string;
    userID?: string;
}

interface WPUserGetFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserGetFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserGetFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserGetFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserGetFunctionRequest,
    WPUserGetFunctionResponse,
    WPUserGetFunctionLogObject,
    WPUserGetFunctionCallbackMessage,
    WPUserGetFunctionInvocationEvent,
    WPUserGetFunctionRequestPayload,
    WPUserGetFunctionResponsePayload,
    WPUserGetFunctionLogObjectPayload,
    WPUserGetFunctionCallbackMessagePayload,
    WPUserGetFunctionInvocationEventPayload
}
