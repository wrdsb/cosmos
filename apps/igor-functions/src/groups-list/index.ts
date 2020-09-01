import { AzureFunction, Context } from "@azure/functions";
const { google } = require('googleapis');

const groupsList: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'List',
        eventLabel: ''
    };

    const userAddress = 'igor@googleapps.wrdsb.ca';
    const clientEmail = process.env.client_email;

    // *sigh* because Azure Functions application settings can't handle newlines, let's add them ourselves:
    let privateKey = process.env.private_key;
    privateKey = privateKey.split('\\n').join("\n");

    const scopes = [
        'https://www.googleapis.com/auth/admin.directory.group',
        'https://www.googleapis.com/auth/apps.groups.settings'
    ];

    // stores our Groups in the end; one result for objects, another for arrays
    let groupsAllObject = {};
    let groupsAllArray = [];

    // prep our credentials for G Suite APIs
    const jwtClient = new google.auth.JWT(
        clientEmail,
        null,
        privateKey,
        scopes,
        userAddress
    );

    const params = {
        auth: jwtClient,
        alt: "json",
        customer: process.env.CUSTOMER_ID,
        maxResults: 200
    };

    jwtClient.authorize(function(err, tokens) {
        if (err) {
            context.res = {
                status: 500,
                body: err
            };
            context.done(err);
            return;
        }
        getGroups(params, function() {
            const message = 'Final results: Got ' + groupsAllArray.length + ' groups.';
            const eventType = "ca.wrdsb.igor.google_group.list";
            const flynnEvent = {
                eventID: `${eventType}-${context.executionContext.invocationId}`,
                eventType: eventType,
                source: `/google/groups`,
                schemaURL: "https://mcp.wrdsb.io/schemas/igor/group_list-event.json",
                extensions: { 
                    label: "IGOR lists Google Groups",
                    tags: [
                        "igor",
                        "google_group",
                        "google_groups",
                        "list"
                    ]
                },
                data: {
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    payload: {
                        blobs: [
                            {
                                name: "all-groups-array",
                                storage_account: "wrdsb-igor3_STORAGE",
                                path: "groups-lists/all-groups-array.json"
                            },
                            {
                                name: "all-groups-object",
                                storage_account: "wrdsb-igor3_STORAGE",
                                path: "groups-lists/all-groups-object.json"
                            }
                        ]
                    },
                    message: message
                },
                eventTime: functionInvocation.functionInvocationTimestamp,
                eventTypeVersion: "0.1",
                cloudEventsVersion: "0.1",
                contentType: "application/json"
            };

            context.bindings.allGroupsArrayBlob = JSON.stringify(groupsAllArray);
            context.bindings.allGroupsObjectBlob = JSON.stringify(groupsAllObject);

            context.log(message);
            context.log(flynnEvent);
            context.done(null, message);
        });
    });

    function getGroups(params, callback) {
        google.groups.list(params, function(err, result) {
            if (err) {
                context.res = {
                    status: 500,
                    body: err
                };
                context.done(err);
                return;
            }

            context.log('Got ' + result.groups.length + ' groups.');

            result.groups.forEach(function(group) {
                groupsAllObject[group.email] = group;
                groupsAllArray.push(group);
            });

            if (result.nextPageToken) {
                params.pageToken = result.nextPageToken;
                getGroups(params, callback);
            } else {
                callback();
            }

        });
    }
};

export default groupsList;