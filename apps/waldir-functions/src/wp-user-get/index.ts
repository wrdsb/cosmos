import { AzureFunction, Context } from "@azure/functions"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FunctionInvocation, WALDIRJobType, WPUser, WPUserGetFunctionRequest, WPUserGetFunctionRequestPayload, WPUserStoreFunctionRequest } from '@cosmos/types';

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

    const response = await getUser(axiosOptions);

    const siteSlug = wpSite;
    const siteURL = (wpSite !== 'root') ? `${wpDomain}/${wpSite}` : `${wpDomain}`;
    const siteLink = (wpSite !== 'root') ? `https://${wpDomain}/${wpSite}` : `https://${wpDomain}/`;

    const wpUser: WPUser = {
        id: `${wpDomain}_${wpSite}_${response.data.id}`,

        siteURL: siteURL,
        siteDomain: wpDomain,
        siteSlug: siteSlug,
        siteLink: siteLink,

        username: response.data.username,
        email: response.data.email,
        name: response.data.name,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        nickname: response.data.nickname,
        description: response.data.description,
        link: response.data.link,
        slug: response.data.slug,
        url: response.data.url,
        locale: response.data.locale,
        registered_date: response.data.registered_date,
        roles: response.data.roles,
        capabilities: response.data.capabilities,
        extra_capabilities: response.data.extra_capabilities,
        avatar_urls: response.data.avatar_urls,
        meta: response.data.meta,
        ipps_activity_code: response.data.ipps_activity_code,
        ipps_employee_group_category: response.data.ipps_employee_group_category,
        ipps_employee_group_code: response.data.ipps_employee_group_code,
        ipps_employee_group_description: response.data.ipps_employee_group_description,
        ipps_extension: response.data.ipps_extension,
        ipps_home_loc: response.data.ipps_home_loc,
        ipps_job_code: response.data.ipps_job_code,
        ipps_job_desc: response.data.ipps_job_desc,
        ipps_location_code: response.data.ipps_location_code,
        ipps_location_desc: response.data.ipps_location_desc,
        ipps_panel: response.data.ipps_panel,
        ipps_phone_no: response.data.ipps_phone_no,
        ipps_school_code: response.data.ipps_school_code,
        ipps_school_type: response.data.ipps_school_type,
        wrdsb_id_number: response.data.wrdsb_id_number,
        wrdsb_school: response.data.wrdsb_school,
        wrdsb_baksheesh: response.data.wrdsb_baksheesh,
        wrdsb_supervisor: response.data.wrdsb_supervisor,
        wrdsb_section: response.data.wrdsb_section,
        wrdsb_physical_location: response.data.wrdsb_physical_location,
        wrdsb_voicemail: response.data.wrdsb_voicemail,
        wrdsb_job_title: response.data.wrdsb_job_title,
        wrdsb_display_in_staff_list: response.data.wrdsb_display_in_staff_list,
        wrdsb_contact_options: response.data.wrdsb_contact_options,
        wrdsb_website_url: response.data.wrdsb_website_url,
        wrdsb_phone_extension: response.data.wrdsb_phone_extension,
        wrdsb_regular_hours: response.data.wrdsb_regular_hours,
        wrdsb_is_in_today: response.data.wrdsb_is_in_today,
        wrdsb_is_available_now: response.data.wrdsb_is_available_now,
    };

    context.log(wpUser);

    const userStore: WPUserStoreFunctionRequest = {
        operation: 'replace',
        payload: wpUser
    }

    context.bindings.wpUserStore = userStore;
    //context.bindings.eventCascade = '';
    //context.bindings.jobCascade = '';

    const logPayload = wpUser;
    functionInvocation.logPayload = logPayload;
    context.bindings.invocationPostProcessor = functionInvocation;

    context.done(null, functionInvocation);


    async function getUser(axiosOptions: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            const response = await axios(axiosOptions);
            return response;
        } catch (error) {
            context.log(error);
        }
    }
};

export default wpUserGet;
