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
    const wpSite = (payload.wpSite && payload.wpSite !== 'root') ? payload.wpSite : 'root';
    const wpService = payload.wpService;
    const wpEnvironment = payload.wpEnvironment;

    const apiKeyName = `wrdsb_${wpService}_${wpEnvironment}_key`;
    const apiKey = process.env[apiKeyName];

    const baseURL = (wpSite !== 'root') ? `https://${wpDomain}/${wpSite}/wp-json` : `https://${wpDomain}/wp-json`;
    const basePath = '/wp/v2/users?per_page=100';

    let usersList: WPUser[] = [];
    let usersObject = {};

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

    usersList.forEach(function(user) {
        usersObject[user.email] = user;
    });

    context.bindings.outputArrayBlob = usersList;
    context.bindings.outputObjectBlob = usersObject;

    const logPayload = {
        totalUsers: totalUsers,
        totalUsersRecieved: usersList.length,
        outputArrayBlob: `wp-user-get-all/${wpDomain}-${wpSite}-${wpEnvironment}-array.json`,
        outputObjectBlob: `wp-user-get-all/${wpDomain}-${wpSite}-${wpEnvironment}-object.json`
    }

    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.log(functionInvocation);
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
        const siteSlug = wpSite;
        const siteURL = (wpSite !== 'root') ? `${wpDomain}/${wpSite}` : `${wpDomain}`;
        const siteLink = (wpSite !== 'root') ? `https://${wpDomain}/${wpSite}` : `https://${wpDomain}/`;

        data.forEach(function (user: WPUser) {
            const wpUser: WPUser = {
                id: `${wpDomain}_${wpSite}_${user.id}`,
        
                site_domain: wpDomain,
                site_slug: siteSlug,
                site_url: siteURL,
                site_link: siteLink,
        
                username: user.username,
                email: user.email,
                name: user.name,
                first_name: user.first_name,
                last_name: user.last_name,
                nickname: user.nickname,
                description: user.description,
                link: user.link,
                slug: user.slug,
                url: user.url,
                locale: user.locale,
                registered_date: user.registered_date,
                roles: user.roles,
                capabilities: user.capabilities,
                extra_capabilities: user.extra_capabilities,
                avatar_urls: user.avatar_urls,
                meta: user.meta,
                ipps_activity_code: user.ipps_activity_code,
                ipps_employee_group_category: user.ipps_employee_group_category,
                ipps_employee_group_code: user.ipps_employee_group_code,
                ipps_employee_group_description: user.ipps_employee_group_description,
                ipps_extension: user.ipps_extension,
                ipps_home_loc: user.ipps_home_loc,
                ipps_job_code: user.ipps_job_code,
                ipps_job_desc: user.ipps_job_desc,
                ipps_location_code: user.ipps_location_code,
                ipps_location_desc: user.ipps_location_desc,
                ipps_panel: user.ipps_panel,
                ipps_phone_no: user.ipps_phone_no,
                ipps_school_code: user.ipps_school_code,
                ipps_school_type: user.ipps_school_type,
                wrdsb_id_number: user.wrdsb_id_number,
                wrdsb_school: user.wrdsb_school,
                wrdsb_baksheesh: user.wrdsb_baksheesh,
                wrdsb_supervisor: user.wrdsb_supervisor,
                wrdsb_section: user.wrdsb_section,
                wrdsb_physical_location: user.wrdsb_physical_location,
                wrdsb_voicemail: user.wrdsb_voicemail,
                wrdsb_job_title: user.wrdsb_job_title,
                wrdsb_display_in_staff_list: user.wrdsb_display_in_staff_list,
                wrdsb_contact_options: user.wrdsb_contact_options,
                wrdsb_website_url: user.wrdsb_website_url,
                wrdsb_phone_extension: user.wrdsb_phone_extension,
                wrdsb_regular_hours: user.wrdsb_regular_hours,
                wrdsb_is_in_today: user.wrdsb_is_in_today,
                wrdsb_is_available_now: user.wrdsb_is_available_now,
            };

            usersList.push(wpUser);
        });
        return usersList;
    }
};

export default wpUserGetAll;
