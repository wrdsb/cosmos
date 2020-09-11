import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';

const ping: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const request = req;
    let authenticated = false;
    let authorized = false;
    let idToken = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        authenticated = true;
        idToken = request.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken);
        userRoles = decodedToken.roles as string[];
        authorized = userRoles.includes('cosmos-user-its') ? true : false;
    }

    let response = {
        payload: {
            status: 200,
            message: "Sorting Hat is up",
            chatter: "Sorting Hat here. What can I do for you?",
            timestamp: functionInvocationTimestamp,
            authenticated: authenticated,
            authorized: authorized,
            roles: userRoles
        }
    };

    const logPayload = response;

    if (!authenticated) {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 401,
                    message: "Unauthorized: Cannot verify your identity.",
                    chatter: "Unauthorized: Cannot verify your identity.",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    }
    else if (authenticated && !authorized) {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 403,
                    message: "Forbidden: You are not permitted to ping the Sorting Hat",
                    chatter: "Forbidden: You are not permitted to ping the Sorting Hat",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    } else if (authenticated && authorized) {
        context.res = {
            status: 200,
            body: response
        };
    } else {
        context.res = {
            status: 200,
            body: {
                payload: {
                    status: 400,
                    message: "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.",
                    chatter: "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.",
                    timestamp: functionInvocationTimestamp,
                    authenticated: authenticated,
                    authorized: authorized,
                    roles: JSON.stringify(userRoles)
                }
            }
        };
    }

    context.done(null, logPayload);
};

export default ping;