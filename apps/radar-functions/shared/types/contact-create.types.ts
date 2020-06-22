import { Contact } from "../teamViewerTypes";

interface ContactCreateFunctionRequest {
    readonly payload: ContactCreateFunctionRequestPayload;
}

interface ContactCreateFunctionResponse {}
interface ContactCreateFunctionLogObject {}
interface ContactCreateFunctionCallbackMessage {}
interface ContactCreateFunctionInvocationEvent {}

interface ContactCreateFunctionRequestPayload {
    readonly contact: Contact;
}

interface ContactCreateFunctionResponsePayload {}
interface ContactCreateFunctionLogObjectPayload {}
interface ContactCreateFunctionCallbackMessagePayload {}
interface ContactCreateFunctionInvocationEventPayload {}

export {
    ContactCreateFunctionRequest,
    ContactCreateFunctionResponse,
    ContactCreateFunctionLogObject,
    ContactCreateFunctionCallbackMessage,
    ContactCreateFunctionInvocationEvent,
    ContactCreateFunctionRequestPayload,
    ContactCreateFunctionResponsePayload,
    ContactCreateFunctionLogObjectPayload,
    ContactCreateFunctionCallbackMessagePayload,
    ContactCreateFunctionInvocationEventPayload
}