import { AzureFunction, Context } from "@azure/functions";
import { google } from 'googleapis';
import { FunctionInvocation, GoogleGroupsListFunctionRequest, GoogleGroupsListFunctionRequestPayload } from "@cosmos/types";

const groupsList: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'List',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsListFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsListFunctionRequestPayload;

    const clientEmail = process.env.client_email;
    const privateKey = process.env.private_key;
    const userAddress = 'igor@wrdsb.ca';

    // *sigh* because Azure Functions application settings can't handle newlines, let's add them ourselves:
    const apiKey = privateKey.split('\\n').join("\n");

    const scopes = [
        'https://www.googleapis.com/auth/admin.directory.group',
        'https://www.googleapis.com/auth/apps.groups.settings'
    ];

    // stores our Groups in the end; one result for objects, another for arrays
    const groupsAllObject = {};
    const groupsAllArray = [];

    // prep our credentials for G Suite APIs
    const auth = new google.auth.JWT({
        email: clientEmail,
        key: apiKey,
        scopes: scopes,
        subject: userAddress
    });

    // obtain the directory client
    const directory = await google.admin({
        version: 'directory_v1',
        auth
    });
    
    const params = {
        alt: "json",

        // The unique ID for the customer's G Suite account. 
        // In case of a multi-domain account, to fetch all groups for a customer, fill this field instead of domain.
        // As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`.
        // The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users)
        customer: process.env.CUSTOMER_ID,

        // Maximum number of results to return. Max allowed value is 200.
        maxResults: 200,

        // The domain name. Use this field to get fields from only one domain.
        // To return all domains for a customer account, use the `customer` query parameter instead.
        // domain: "placeholder-value",

        // Column to use for sorting results
        // orderBy: "placeholder-value",

        // Whether to return results in ascending or descending order. Only of use when orderBy is also used
        // sortOrder: "placeholder-value",

        // Token to specify next page in the list
        // pageToken: "placeholder-value",

        // Query string search. Should be of the form &quot;&quot;.
        // Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-groups
        // query: "placeholder-value",

        // Email or immutable ID of the user if only those groups are to be listed, the given user is a member of.
        // If it"s an ID, it should match with the ID of the user object.
        // userKey: "placeholder-value",
    };

    await getGroups(params).catch();

    const message = 'Final results: Got ' + groupsAllArray.length + ' groups.';

    const logPayload = message;
    functionInvocation.logPayload = logPayload;

    context.bindings.allGroupsArrayBlob = JSON.stringify(groupsAllArray);
    context.bindings.allGroupsObjectBlob = JSON.stringify(groupsAllObject);

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
    async function getGroups(params) {
        const result = await directory.groups.list(params);
        context.log(result);
        const groups = result.data.groups;
        context.log('Got ' + groups.length + ' groups.');

        groups.forEach(function(group) {
            groupsAllObject[group.email] = group;
            groupsAllArray.push(group);
        });

        if (result.data.nextPageToken) {
            params.pageToken = result.data.nextPageToken;
            await getGroups(params);
        }
    }
};

export default groupsList;
