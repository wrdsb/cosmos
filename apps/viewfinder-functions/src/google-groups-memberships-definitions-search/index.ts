import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential, SearchRequestOptions } from "@azure/search-documents";
import jwt_decode from 'jwt-decode';
import { FunctionInvocation, GoogleGroup } from "@cosmos/types";

const googleGroupsMembershipsDefinitionsSearch: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Viewfinder',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipDefinition',
        functionDataOperation: 'Search',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req;
    const payload = request.body.payload;

    interface MSALToken {
        name: string;
        unique_name: string;
        roles: string[];
    };
    let authenticated = false;
    let authorized = false;
    let idToken = '';
    let userName = '';
    let userEmail = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        authenticated = true;
        idToken = request.headers['x-ms-token-aad-id-token'];
        const decodedToken = jwt_decode(idToken) as MSALToken;
        userName = decodedToken.name;
        userEmail = decodedToken.unique_name;
        userRoles = decodedToken.roles as string[];
        authorized = userRoles.includes('cosmos-user-its') ? true : false;
    }

    const searchKey = process.env['searchKey'];
    const searchURL = 'https://wrdsb-codex.search.windows.net';
    const searchIndex = 'igor-groups-memberships-definitions';

    const search = payload.search ? payload.search : '*';
    
    const options = {
        includeTotalCount: true,
        facets: null,
        filter: null,
        orderBy: ["id asc"],
        skip: 0,
        top: 20,
        select: [
            "id",
            "job_codes",
            "group_codes",
            "location_codes"
        ]
    } as SearchRequestOptions<keyof GoogleGroup>;

    if (payload.includeTotalCount) { options.includeTotalCount = payload.includeTotalCount; }
    if (payload.filter)            { options.filter = payload.filter; }
    if (payload.facets)            { options.facets = payload.facets; }
    if (payload.orderby)           { options.orderBy = payload.orderby; }
    if (payload.skip)              { options.skip = payload.skip; }
    if (payload.top)               { options.top = payload.top; }
    if (payload.select)            { options.select = payload.select; }
    if (payload.searchFields)      { options.searchFields = payload.searchFields; }

    const searchClient = new SearchClient<GoogleGroup>(
        searchURL,
        searchIndex,
        new AzureKeyCredential(searchKey)
    );

    const searchResults = await searchClient.search(search, options);

    const documents = [];
    for await (const result of searchResults.results) {
        const document = result.document;
        document['searchID'] = document.id;
        document.id = Buffer.from(document.id, 'base64').toString();
        documents.push(document);
    }

    const response = {
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
            count: searchResults.count,
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

export default googleGroupsMembershipsDefinitionsSearch;
