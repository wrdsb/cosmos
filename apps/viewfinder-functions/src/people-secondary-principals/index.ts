import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential, SearchRequestOptions } from "@azure/search-documents";
import { setResponseState, setUserState } from "@cosmos/viewfinder-functions-shared";
import { FunctionInvocation, IPPSPerson } from "@cosmos/types";

const peopleSecondaryPrincipals: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Viewfinder',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPerson',
        functionDataOperation: 'Search',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req;
    const payload = request.body.payload;

    context.log(payload);

    const userState = setUserState(request);

    const searchKey = process.env['searchKey'];
    const searchURL = 'https://wrdsb-codex.search.windows.net';
    const searchIndex = 'flenderson-people';

    const search = payload.search ? payload.search : '*';

    const select = new Set([
        "id",
        "email",
        "username",
        "employeeID",
        "sortableName",
        "homeLocation",
        "numberOfAssignments",
        "numberOfActiveAssignments"
    ]);

    if (payload.select && payload.select.length > 0) {
        payload.select.forEach(field => {
            select.add(field);
        });
    }

    const selectArray = [...select];
    
    const options = {
        includeTotalCount: true,
        facets: null,
        filter: null,
        orderBy: ["id asc"],
        skip: 0,
        top: 20,
        select: selectArray
    } as SearchRequestOptions<keyof IPPSPerson>;

    if (payload.includeTotalCount) { options.includeTotalCount = payload.includeTotalCount; }
    if (payload.filter)            { options.filter = payload.filter; }
    if (payload.facets)            { options.facets = payload.facets; }
    if (payload.orderby)           { options.orderBy = payload.orderby; }
    if (payload.skip)              { options.skip = payload.skip; }
    if (payload.top)               { options.top = payload.top; }
    if (payload.searchFields)      { options['searchFields'] = payload.searchFields; }

    const searchClient = new SearchClient<IPPSPerson>(
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

    const response = setResponseState(functionInvocation, userState);

    if (response.header.status === 200) {
        response.payload = {
            count: searchResults.count,
            documents: documents
        }
    }

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    functionInvocation.logPayload = logPayload;

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default peopleSecondaryPrincipals;
