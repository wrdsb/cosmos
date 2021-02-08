import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { FunctionInvocation } from "@cosmos/types";

const deviceLoanSubmissionsCommand: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

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

    if (req.headers['x-ms-token-aad-id-token']) {
        authenticated = true;
        idToken = req.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken) as MSALToken;
        userName = decodedToken.name;
        userEmail = decodedToken.unique_name;
        userRoles = decodedToken.roles as string[];
        authorized = userRoles.includes('cosmos-quartermaster-admin') ? true : false;
    }

    const request = req.body;
    const jobType = request.jobType;
    const operation = request.operation;
    const payload = request.payload;

    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmission.Store':
            context.bindings.jobEnqueue = {
                jobType: 'Quartermaster.DeviceLoanSubmission.Store',
                operation: operation,
                payload: payload
            };

            break;

        default:
            break;
    }

    let response = {
        header: {
            status: 202,
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
        response.header.message = "Forbidden: You are not permitted to administer Quartermaster";
        response.header.chatter = "Forbidden: You are not permitted to administer Quartermaster";
    }
    else if (authenticated && authorized) {
        response.header.status = 202;
        response.header.message = "";
        response.header.chatter = "";
        response.payload = {
            //count: searchResults.count,
            //documents: documents
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

export default deviceLoanSubmissionsCommand;
