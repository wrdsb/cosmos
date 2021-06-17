import * as Cosmos from "../common";

interface NotificationEmailSendFunctionRequest {
    readonly payload: NotificationEmailSendFunctionRequestPayload;
}

interface NotificationEmailSendFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: NotificationEmailSendFunctionResponsePayload;
}

interface NotificationEmailSendFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: NotificationEmailSendFunctionResponsePayload;
}

interface NotificationEmailSendFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface NotificationEmailSendFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: NotificationEmailSendFunctionInvocationEventPayload;
}

interface NotificationEmailSendFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly toEmail: string;
    readonly subject: string;
    readonly body: string;
}

interface NotificationEmailSendFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface NotificationEmailSendFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface NotificationEmailSendFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface NotificationEmailSendFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    NotificationEmailSendFunctionRequest,
    NotificationEmailSendFunctionResponse,
    NotificationEmailSendFunctionLogObject,
    NotificationEmailSendFunctionCallbackMessage,
    NotificationEmailSendFunctionInvocationEvent,
    NotificationEmailSendFunctionRequestPayload,
    NotificationEmailSendFunctionResponsePayload,
    NotificationEmailSendFunctionLogObjectPayload,
    NotificationEmailSendFunctionCallbackMessagePayload,
    NotificationEmailSendFunctionInvocationEventPayload
}
