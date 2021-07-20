import * as Cosmos from "../common";
import { WPDomain, WPSite, WPService, WPEnvironment, WPUser } from "@cosmos/types"

interface WPUserUpdateFunctionRequest {
    readonly payload: WPUserUpdateFunctionRequestPayload;
}

interface WPUserUpdateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: WPUserUpdateFunctionResponsePayload;
}

interface WPUserUpdateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: WPUserUpdateFunctionResponsePayload;
}

interface WPUserUpdateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface WPUserUpdateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: WPUserUpdateFunctionInvocationEventPayload;
}

interface WPUserUpdateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    wpDomain?: WPDomain;
    wpSite?: WPSite;
    wpService?: WPService;
    wpEnvironment?: WPEnvironment;

    employeeID?: string;
    email?: string;
    username?: string;
    userID?: string;

    readonly wpUser: WPUser;
}

interface WPUserUpdateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface WPUserUpdateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface WPUserUpdateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface WPUserUpdateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    WPUserUpdateFunctionRequest,
    WPUserUpdateFunctionResponse,
    WPUserUpdateFunctionLogObject,
    WPUserUpdateFunctionCallbackMessage,
    WPUserUpdateFunctionInvocationEvent,
    WPUserUpdateFunctionRequestPayload,
    WPUserUpdateFunctionResponsePayload,
    WPUserUpdateFunctionLogObjectPayload,
    WPUserUpdateFunctionCallbackMessagePayload,
    WPUserUpdateFunctionInvocationEventPayload
}
