import { HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { UserState } from "./user-state";
import { MSALToken } from "./msal-token";

export function setUserState(request: HttpRequest): UserState {
    let userState = {
        authenticated: false,
        authorized: false,
        idToken: '',
        userName: '',
        userEmail: '',
        userRoles: []
    } as UserState;
    
    if (request.headers['x-ms-token-aad-id-token']) {
        userState.authenticated = true;
        userState.idToken = request.headers['x-ms-token-aad-id-token'];
        const decodedToken = jwt_decode(userState.idToken) as MSALToken;
        userState.userName = decodedToken.name;
        userState.userEmail = decodedToken.unique_name;
        userState.userRoles = decodedToken.roles as string[];
        userState.authorized = userState.userRoles.includes('cosmos-user-its') ? true : false;
    }

    return userState;
}
  