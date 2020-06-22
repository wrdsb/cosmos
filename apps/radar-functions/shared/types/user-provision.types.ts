import { User, Group } from "../teamViewerTypes";

interface UserProvisionFunctionRequest {
    readonly payload: UserProvisionFunctionRequestPayload;
}

interface UserProvisionFunctionResponse {}
interface UserProvisionFunctionLogObject {}
interface UserProvisionFunctionCallbackMessage {}
interface UserProvisionFunctionInvocationEvent {}

interface UserProvisionFunctionRequestPayload {
    readonly group: Group;
    readonly user: User;
}

interface UserProvisionFunctionResponsePayload {
    provisionedUser: User,
    sharedGroup: Group,
    groupShare: any,
    contactCreate: any
}

interface UserProvisionFunctionLogObjectPayload {}
interface UserProvisionFunctionCallbackMessagePayload {}
interface UserProvisionFunctionInvocationEventPayload {}

export {
    UserProvisionFunctionRequest,
    UserProvisionFunctionResponse,
    UserProvisionFunctionLogObject,
    UserProvisionFunctionCallbackMessage,
    UserProvisionFunctionInvocationEvent,
    UserProvisionFunctionRequestPayload,
    UserProvisionFunctionResponsePayload,
    UserProvisionFunctionLogObjectPayload,
    UserProvisionFunctionCallbackMessagePayload,
    UserProvisionFunctionInvocationEventPayload
}