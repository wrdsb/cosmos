import { AzureFunction, Context } from "@azure/functions"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FunctionInvocation, WALDIRJobType, WPUser, WPUserGetAllFunctionRequest, WPUserGetAllFunctionRequestPayload } from '@cosmos/types';

const wpUserGetAll: AzureFunction = async function (context: Context, triggerMessage: WPUserGetAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WPUser',
        functionDataOperation: 'GetAll',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WPUser.GetAll';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as WPUserGetAllFunctionRequest;
    const payload = triggerObject.payload as WPUserGetAllFunctionRequestPayload;

    const wpDomain = payload.wpDomain;
    const wpSite = payload.wpSite;
    const wpService = payload.wpService;
    const wpEnvironment = payload.wpEnvironment;

    const apiKeyName = `wrdsb_${wpService}_${wpEnvironment}_key`;
    const apiKey = process.env[apiKeyName];

    const baseURL = (wpSite) ? `https://${wpDomain}/${wpSite}/wp-json` : `https://${wpDomain}/wp-json`;
    const basePath = '/wp/v2/users?per_page=100';

    let usersList: WPUser[] = [];

    const axiosOptions: AxiosRequestConfig = {
        baseURL: baseURL,
        url: basePath,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${apiKey}`
        },
        timeout: 15000
    };

    const firstPage = await getUsers(axiosOptions);
    usersList = await appendUsers(usersList, firstPage);

    const totalUsers = firstPage.headers['x-wp-total'];
    const totalPages = firstPage.headers['x-wp-totalpages'];

    if (totalPages > 1) {
        for (let page = 2; page <= totalPages; page++) {
            let path = `${basePath}&page=${page}`;
            axiosOptions.url = path;
            let users = await getUsers(axiosOptions);
            usersList = await appendUsers(usersList, users);
            context.log(`Got page ${page}...`);
        }
    }

    context.log(`Total users: ${totalUsers}`);
    context.log(`Total pages: ${totalPages}`);
    context.log(`Got ${usersList.length} of ${totalUsers} users.`);

    const logPayload = {
        totalUsers: totalUsers
    }

    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.done(null, functionInvocation);


    async function getUsers(axiosOptions: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            const response = await axios(axiosOptions);
            return response;
        } catch (error) {
            context.log(error);
        }
    }

    async function appendUsers(usersList: WPUser[], usersPage: AxiosResponse): Promise<WPUser[]> {
        const data = usersPage.data;

        data.forEach(function (user: WPUser) {
            usersList.push(user);
        });
        return usersList;
    }
};

export default wpUserGetAll;
