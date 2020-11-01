import * as Cosmos from "../common";

interface GoogleGroupsMembershipsSHSMCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsSHSMCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsSHSMCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsSHSMCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsSHSMCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly sector: string;
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsSHSMCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsSHSMCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsSHSMCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsSHSMCalculateFunctionRequest,
    GoogleGroupsMembershipsSHSMCalculateFunctionResponse,
    GoogleGroupsMembershipsSHSMCalculateFunctionLogObject,
    GoogleGroupsMembershipsSHSMCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsSHSMCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsSHSMCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsSHSMCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsSHSMCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsSHSMCalculateFunctionInvocationEventPayload
}
