import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const ping: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.Ping';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-ping-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

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
            message: "Codex is up",
            chatter: "Codex here. What can I do for you?",
            timestamp: functionInvocationTimestamp,
            authenticated: authenticated,
            authorized: authorized,
            roles: userRoles
        }
    };

    const logPayload = response;

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    response.payload['invocationEvent'] = invocationEvent;

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
                    message: "Forbidden: You are not permitted to ping Codex",
                    chatter: "Forbidden: You are not permitted to ping Codex",
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

    context.done(null, logBlob);
};

export default ping;
