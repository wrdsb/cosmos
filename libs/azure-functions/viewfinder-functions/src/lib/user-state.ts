export interface UserState {
    authenticated: boolean;
    authorized: boolean;
    idToken: string;
    userName: string;
    userEmail: string;
    userRoles: string[];
}