import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential, SearchRequestOptions } from "@azure/search-documents";
import { FunctionInvocation, IPPSPerson } from "@cosmos/types";

const flendersonPeopleSearch: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'TollBooth',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPerson',
        functionDataOperation: 'Search',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req;
    const payload = request.body;

    const searchKey = process.env['searchKey'];
    const searchURL = 'https://wrdsb-codex.search.windows.net';
    const searchIndex = 'flenderson-people';

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
            "createdAt",
            "updatedAt",
            "deletedAt",
            "deleted",
            "email",
            "username",
            "employeeID",
            "firstName",
            "lastName",
            "fullName",
            "sortableName",
            "ein",
            "locationCodes",
            "schoolCodes",
            "jobCodes",
            "employeeGroupCodes",
            "homeLocation",
            "directory",
            "phone",
            "extension",
            "mbxnumber",
            "numberOfAssignments",
            "numberOfActiveAssignments",
            "assignments"
        ]
    } as SearchRequestOptions<keyof IPPSPerson>;

    if (payload.includeTotalCount) { options.includeTotalCount = payload.includeTotalCount; }
    if (payload.filter)            { options.filter = payload.filter; }
    if (payload.facets)            { options.facets = payload.facets; }
    if (payload.orderby)           { options.orderBy = payload.orderby; }
    if (payload.skip)              { options.skip = payload.skip; }
    if (payload.top)               { options.top = payload.top; }
    if (payload.select)            { options.select = payload.select; }
    if (payload.searchFields)      { options.searchFields = payload.searchFields; }

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

    const response = {
        header: {
            status: 200,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp
        },
        payload: {}
    };

    response.payload = {
        count: searchResults.count,
        documents: documents
    }

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = {
        request: payload,
        response: response
    }
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default flendersonPeopleSearch;
