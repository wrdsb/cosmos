import { AzureFunction, Context } from "@azure/functions"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FunctionInvocation, WALDIRJobType, WPUserGetFunctionRequest, WPUserGetFunctionRequestPayload } from '@cosmos/types';

const wpUserGet: AzureFunction = async function (context: Context, triggerMessage: WPUserGetFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WPUser',
        functionDataOperation: 'Get',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WPUser.Get';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as WPUserGetFunctionRequest;
    const payload = triggerObject.payload as WPUserGetFunctionRequestPayload;

    const wpDomain = payload.wpDomain;
    const wpSite = payload.wpSite;
    const wpService = payload.wpService;
    const wpEnvironment = payload.wpEnvironment;

    const employeeID = payload.employeeID ? payload.employeeID : null;
    const email = payload.email ? payload.email : null;
    const username = payload.username ? payload.username : null;
    const userID = payload.userID ? payload.userID : null;

    const apiKeyName = `wrdsb_${wpService}_${wpEnvironment}_key`;
    const apiKey = process.env[apiKeyName];

    const baseURL = (wpSite) ? `https://${wpDomain}/${wpSite}/wp-json` : `https://${wpDomain}/wp-json`;
    let path = '';

    if (wpSite) {
        if (employeeID) {
            path = `/wrdsb/v2/blog-user-by-id-number/${employeeID}`;
        } else if (email) {
            path = `/wrdsb/v2/blog-user-by-email/${email}`;
        } else if (username) {
            path = `/wrdsb/v2/blog-user-by-username/${username}`;
        } else if (userID) {
            path = `/wp/v2/users/${userID}`;
        } else {
            path = '/wp/v2/users/1';
        }
    } else {
        if (employeeID) {
            path = `/wrdsb/v2/user-by-id-number/${employeeID}`;
        } else if (email) {
            path = `/wrdsb/v2/user-by-email/${email}`;
        } else if (username) {
            path = `/wrdsb/v2/user-by-username/${username}`;
        } else if (userID) {
            path = `/wp/v2/users/${userID}`;
        } else {
            path = '/wp/v2/users/1';
        }
    }

    const axiosOptions: AxiosRequestConfig = {
        baseURL: baseURL,
        url: path,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${apiKey}`
        },
        timeout: 15000
    };

    const response = await getUser();
    context.log(response.data);

    const logPayload = '';

    functionInvocation.logPayload = logPayload;
    context.done(null, functionInvocation);


    async function getUser(): Promise<AxiosResponse> {
        try {
            const response = await axios(axiosOptions);
            return response;
        } catch (error) {
            context.log(error);
        }
    }
};

export default wpUserGet;
