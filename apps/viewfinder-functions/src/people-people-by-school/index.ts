import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SearchClient, AzureKeyCredential, SearchRequestOptions } from "@azure/search-documents";
import { setResponseState, setUserState } from "@cosmos/azure-functions/viewfinder-functions";
import { FunctionInvocation, IPPSPerson } from "@cosmos/types";

const peoplePeopleBySchool: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
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
    const response = setResponseState(functionInvocation, userState);

    if (response.header.status === 200) {
        const searchKey = process.env['searchKey'];
        const searchURL = 'https://wrdsb-codex.search.windows.net';
        const searchIndex = 'flenderson-people';
        const schoolCode = payload.schoolCode;

        const search = '*';

        const selectArray = [
            "id",
            "email",
            "username",
            "employeeID",
            "sortableName",
            "numberOfAssignments",
            "numberOfActiveAssignments"
        ];

        const options = {
            includeTotalCount: true,
            facets: null,
            filter: `schoolCodes/any(s: s eq '${schoolCode}')`,
            orderBy: ["sortableName asc"],
            skip: 0,
            top: 500,
            select: selectArray
        } as SearchRequestOptions<keyof IPPSPerson>;

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

export default peoplePeopleBySchool;
