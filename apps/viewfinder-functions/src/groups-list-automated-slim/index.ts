import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import jwt_decode from 'jwt-decode';
import { FunctionInvocation } from "@cosmos/types";

const groupsListAutomatedSlim: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Viewfinder',
        functionName: context.executionContext.functionName,
        functionDataType: 'GroupsList',
        functionDataOperation: 'Query',
        eventLabel: ''
    } as FunctionInvocation;

    const records = context.bindings.groupsList;

    const request = req;
    let authenticated = false;
    let authorized = false;
    let idToken = '';
    let userName = '';
    let userEmail = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        authenticated = true;
        idToken = request.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken);
        userName = decodedToken.name;
        userEmail = decodedToken.unique_name;
        userRoles = decodedToken.roles as string[];
        authorized = userRoles.includes('cosmos-user-its') ? true : false;
    }

    let response = {
        payload: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp,
            authenticated: authenticated,
            authorized: authorized,
            userName: userName,
            userEmail: userEmail,
            userRoles: userRoles
        }
    };

    if (!authenticated) {
        response.payload.status = 401;
        response.payload.message = "Unauthorized: Cannot verify your identity.";
        response.payload.chatter = "Unauthorized: Cannot verify your identity.";
    }
    else if (authenticated && !authorized) {
        response.payload.status = 403;
        response.payload.message = "Forbidden: You are not permitted to query Viewfinder";
        response.payload.chatter = "Forbidden: You are not permitted to query Viewfinder";
    }
    else if (authenticated && authorized) {
        response.payload.status = 200;
        response.payload.message = "automated-slim.json";
        response.payload.chatter = "automated-slim.json";
        response.payload['records'] = records;
    }
    else {
        response.payload.status = 400;
        response.payload.message = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
        response.payload.chatter = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
    }

    context.res = {
        status: response.payload.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default groupsListAutomatedSlim;