import { Contact } from "@cosmos/types";

export interface ContactCreateFunctionRequest {
    readonly payload: ContactCreateFunctionRequestPayload;
}

export interface ContactCreateFunctionResponse {}
export interface ContactCreateFunctionLogObject {}
export interface ContactCreateFunctionCallbackMessage {}
export interface ContactCreateFunctionInvocationEvent {}

export interface ContactCreateFunctionRequestPayload {
    readonly contact: Contact;
}

export interface ContactCreateFunctionResponsePayload {}
export interface ContactCreateFunctionLogObjectPayload {}
export interface ContactCreateFunctionCallbackMessagePayload {}
export interface ContactCreateFunctionInvocationEventPayload {}    
