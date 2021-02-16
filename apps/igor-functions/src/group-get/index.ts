import { AzureFunction, Context } from "@azure/functions";
import { admin_directory_v1 } from 'googleapis';
import { groupssettings_v1 } from 'googleapis';
import { FunctionInvocation, GoogleGroupGetFunctionRequest, GoogleGroupGetFunctionRequestPayload, GoogleGroup } from "@cosmos/types";

const groupGet: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Get',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupGetFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupGetFunctionRequestPayload;
    const groupKey = payload.group;

    const { google } = require('googleapis');

    const clientEmail = process.env.client_email;
    const privateKey = process.env.private_key;
    const userAddress = 'igor@wrdsb.ca';

    // *sigh* because Azure Functions application settings can't handle newlines, let's add them ourselves:
    const apiKey = privateKey.split('\\n').join("\n");

    const scopes = [
        'https://www.googleapis.com/auth/admin.directory.group',
        'https://www.googleapis.com/auth/apps.groups.settings'
    ];

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

    // obtain the groupsettings client
    const groupsSettings = await google.groupssettings({
        version: 'v1',
        auth
    })
    
    const params = {
        groupKey: groupKey
    };

    const group = await getGroup(params);
    const groupSettings = await getGroupSettings(params);

    const logPayload = group;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function getGroup(params) {
        const result = await directory.groups.get(params);
        context.log(result);
        const group = result.data.group;

        return group;
    }

    async function getGroupSettings(params) {
        const result = await groupsSettings.groups.get(params);
        context.log(result);
        const settings = result.data.group;

        return settings;
    }
};

export default groupGet;