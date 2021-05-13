import { HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { UserState } from "./user-state";
import { FunctionInvocation } from "@cosmos/types";

export function setResponseState(functionInvocation: FunctionInvocation, userState: UserState): any {
    const response = {
        header: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp,
            authenticated: userState.authenticated,
            authorized: userState.authorized,
            userName: userState.userName,
            userEmail: userState.userEmail,
            userRoles: userState.userRoles
        },
        payload: {}
    };

    if (!userState.authenticated) {
        response.header.status = 401;
        response.header.message = "Unauthorized: Cannot verify your identity.";
        response.header.chatter = "Unauthorized: Cannot verify your identity.";
    }
    else if (userState.authenticated && !userState.authorized) {
        response.header.status = 403;
        response.header.message = "Forbidden: You are not permitted to query Viewfinder";
        response.header.chatter = "Forbidden: You are not permitted to query Viewfinder";
    }
    else if (userState.authenticated && userState.authorized) {
        response.header.status = 200;
        response.header.message = "";
        response.header.chatter = "";
    }
    else {
        response.header.status = 400;
        response.header.message = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
        response.header.chatter = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
    }

    return userState;
}
  