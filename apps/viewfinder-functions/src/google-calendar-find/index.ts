import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential, SearchRequestOptions } from "@azure/search-documents";
import jwt_decode from 'jwt-decode';
import { FunctionInvocation, GoogleCalendar } from "@cosmos/types";

const googleCalendarFind: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Viewfinder',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleCalendar',
        functionDataOperation: 'Find',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req;
    const payload = request.body.payload;
    const documentID = payload.id;

    context.log(payload);
    context.log(documentID);

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

    const searchKey = process.env['searchKey'];
    const searchURL = 'https://wrdsb-codex.search.windows.net';
    const searchIndex = 'igor-calendar-calendars';

    const searchClient = new SearchClient<GoogleCalendar>(
        searchURL,
        searchIndex,
        new AzureKeyCredential(searchKey)
    );

    let searchResults = await searchClient.getDocument(documentID);

    let documents = [];
    let document = searchResults;
    document['searchID'] = document.id;
    document.id = Buffer.from(document.id, 'base64').toString();
    documents.push();

    let response = {
        header: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp,
            authenticated: authenticated,
            authorized: authorized,
            userName: userName,
            userEmail: userEmail,
            userRoles: userRoles
        },
        payload: {}
    };

    if (!authenticated) {
        response.header.status = 401;
        response.header.message = "Unauthorized: Cannot verify your identity.";
        response.header.chatter = "Unauthorized: Cannot verify your identity.";
    }
    else if (authenticated && !authorized) {
        response.header.status = 403;
        response.header.message = "Forbidden: You are not permitted to query Viewfinder";
        response.header.chatter = "Forbidden: You are not permitted to query Viewfinder";
    }
    else if (authenticated && authorized) {
        response.header.status = 200;
        response.header.message = "";
        response.header.chatter = "";
        response.payload = {
            documents: documents
        }
    }
    else {
        response.header.status = 400;
        response.header.message = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
        response.header.chatter = "Bad Request: We're not sure what happend, but we're pretty sure it's you, not us.";
    }

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default googleCalendarFind;
