import { AzureFunction, Context } from "@azure/functions"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { randomBytes } from "crypto";
import { FunctionInvocation, WALDIRJobType, WPUser, WPUserCreateFunctionRequest, WPUserCreateFunctionRequestPayload, WPUserStoreFunctionRequest } from '@cosmos/types';

const wpUserCreate: AzureFunction = async function (context: Context, triggerMessage: WPUserCreateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WPUser',
        functionDataOperation: 'Create',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WPUser.Create';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as WPUserCreateFunctionRequest;
    const payload = triggerObject.payload as WPUserCreateFunctionRequestPayload;
    const wpUser = payload.wpUser as WPUser;

    const wpDomain = payload.wpDomain;
    const wpSite = (payload.wpSite && payload.wpSite !== 'root') ? payload.wpSite : 'root';
    const wpService = payload.wpService;
    const wpEnvironment = payload.wpEnvironment;

    const employeeID = payload.employeeID ? payload.employeeID : null;
    const email = payload.email ? payload.email : null;
    const username = payload.username ? payload.username : null;
    const userID = payload.userID ? payload.userID : null;

    const apiKeyName = `wrdsb_${wpService}_${wpEnvironment}_key`;
    const apiKey = process.env[apiKeyName];

    const baseURL = (wpSite !== 'root') ? `https://${wpDomain}/${wpSite}/wp-json` : `https://${wpDomain}/wp-json`;
    let path = '';

    if (wpSite !== 'root') {
        if (employeeID) {
            path = `/wrdsb/v2/blog-user-by-id-number/${employeeID}`;
        } else if (email) {
            path = `/wrdsb/v2/blog-user-by-email/${email}`;
        } else if (username) {
            path = `/wrdsb/v2/blog-user-by-username/${username}`;
        } else if (userID) {
            path = `/wp/v2/users/${userID}`;
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
        }
    }

    wpUser['password'] = randomBytes(50).toString('base64');

    const postOptions: AxiosRequestConfig = {
        baseURL: baseURL,
        url: '/wp/v2/users/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${apiKey}`
        },
        timeout: 15000,
        data: wpUser
    };

    const putOptions: AxiosRequestConfig = {
        baseURL: baseURL,
        url: path,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${apiKey}`
        },
        timeout: 15000,
        data: wpUser
    };

    const postResponse = await postUser(postOptions);
    const putResponse = await putUser(postOptions);
    const createdUser = putResponse.data;

    context.log(postResponse);
    context.log(putResponse);

    const siteSlug = wpSite;
    const siteURL = (wpSite !== 'root') ? `${wpDomain}/${wpSite}` : `${wpDomain}`;
    const siteLink = (wpSite !== 'root') ? `https://${wpDomain}/${wpSite}` : `https://${wpDomain}/`;

    createdUser.id = `${wpDomain}_${wpSite}_${postResponse.data.id}`;
    createdUser.siteDomain = wpDomain;
    createdUser.siteSlug = siteSlug;
    createdUser.siteURL = siteURL;
    createdUser.siteLink = siteLink;
    delete createdUser['password'];

    const userStore: WPUserStoreFunctionRequest = {
        operation: 'replace',
        payload: createdUser
    }

    context.bindings.wpUserStore = userStore;
    //context.bindings.eventCascade = '';
    //context.bindings.jobCascade = '';

    const logPayload = createdUser;
    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.done(null, functionInvocation);


    async function postUser(axiosOptions: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            const response = await axios(axiosOptions);
            return response;
        } catch (error) {
            context.log(error);
        }
    }

    async function putUser(axiosOptions: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            const response = await axios(axiosOptions);
            return response;
        } catch (error) {
            context.log(error);
        }
    }
};

export default wpUserCreate;
