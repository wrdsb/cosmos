import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential } from "@azure/search-documents";
import jwt_decode from 'jwt-decode';
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { CodexSearchFunctionRequest, CodexSearchFunctionRequestPayload } from "@cosmos/types";

const IGORGroupsGroupsSearch: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.IGORGroupsGroups.Search';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-search-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

    const request = req;
    const payload = request.body.payload;

    let idToken = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        idToken = request.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken);
        userRoles = decodedToken.roles as string[];
    }

    const searchKey = process.env['searchKey'];
    const searchURL = 'https://wrdsb-codex.search.windows.net';
    const searchIndex = 'igor-groups-groups';

    const search = payload.search ? payload.search : '*';
    
    let query = {};
    let response = [];

    query['count'] = payload.count ? payload.count : true;
    //query['select'] = payload.select ? payload.select : '*';

    if (payload.filter) {query['filter'] = payload.filter};
    if (payload.facets) {query['facets'] = payload.facets};
    if (payload.orderby) {query['orderby'] = payload.orderby};
    if (payload.skip) {query['skip'] = payload.skip};
    if (payload.top) {query['top'] = payload.top};

    const searchClient = new SearchClient(
        searchURL,
        searchIndex,
        new AzureKeyCredential(searchKey)
    );

    let searchResults = await searchClient.search(search, query);

    for await (const result of searchResults.results) {
        response.push(result);
    }

    const logPayload = searchResults;

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    //context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    //context.log(callbackMessage);

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
    //context.log(invocationEvent);

    if (!request.headers['x-ms-token-aad-id-token']) {
        context.res = {
            status: 401,
            body: 'Unauthorized'
        };
    }
    else if (userRoles.includes('cosmos-user-its')) {
        context.res = {
            status: 200,
            body: response
        };
    } else {
        context.res = {
            status: 403,
            body: 'Forbidden'
        };
    }
};

export default IGORGroupsGroupsSearch;
