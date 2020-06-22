import { AxiosError, AxiosRequestConfig } from "axios";
import { Group, GroupsListResponse, UserShare } from "./teamViewerTypes";
import { teamViewerAPI } from "./teamViewerAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

class teamViewerGroupAPI {
    private apiConfig: AxiosRequestConfig;
    private api: teamViewerAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new teamViewerAPI(this.apiConfig);
    }

    // GET /groups
    public async list(): Promise<Group[] | ServerError> {
        try {
            const response = await this.api.get<GroupsListResponse>('/groups');
            const data = response.data.groups;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /groups/{id}
    public async get(id: string): Promise<Group | ServerError> {
        try {
            const response = await this.api.get<Group>(`/groups/${id}`);
            const data = response.data;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // POST /groups
    public async create(request: GroupAPICreateRequest): Promise<GroupAPICreateResponse> {
        try {
            const response = await this.api.post(`/groups`, request.group);
            const data = response.data;
            const result = {
                code: 201,
                message: 'created',
                group: data
            } as GroupAPICreateResponse;
            return result;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                const result = {
                    code: 500,
                    message: 'error',
                    serverError: axiosError.response.data
                } as GroupAPICreateResponse;
                return result;
            }
            throw err;
        }
    }
    
    // PUT /groups/{id}
    public async update(group: Group): Promise<Group | ServerError> {
        try {
            const response = await this.api.put(`/groups/${group.id}`, group);
            const data = response.data;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // DELETE /groups/{id}
    public async delete(id: string): Promise<boolean | ServerError> {
        try {
            const response = await this.api.delete(`/groups/${id}`);
            return true;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // POST /groups/{id}/share_group
    public async share(request: GroupAPIShareRequest): Promise<GroupAPIShareResponse> {
        let apiRequest = {
            users: [
                {
                    userid: request.user_id,
                    permissions: request.permission
                }
            ]
        };

        try {
            const response = await this.api.post(`/groups/${request.group_id}/share_group`, apiRequest);
            const data = response.data;
            const apiResponse = {
                code: 200,
                message: "success",
                data: data
            } as GroupAPIShareResponse;
            return apiResponse;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                const apiResponse = {
                    code: 500,
                    message: "error",
                    serverError: axiosError
                } as GroupAPIShareResponse;
                return apiResponse;
            }
            throw err;
        }
    }

    // POST /groups/{id}/unshare_group
    public async unshare(request: GroupAPIUnshareRequest): Promise<GroupAPIUnshareResponse> {
        let apiRequest = {
            users: [
                request.user_id
            ]
        };

        try {
            const response = await this.api.post(`/groups/${request.group_id}/unshare_group`, apiRequest);
            const data = response.data;
            const apiResponse = {
                code: 200,
                message: "success",
                data: data
            } as GroupAPIUnshareResponse;
            return apiResponse;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                const apiResponse = {
                    code: 500,
                    message: "error",
                    serverError: axiosError
                } as GroupAPIShareResponse;
                return apiResponse;
            }
            throw err;
        }
    }
}

interface GroupAPICreateRequest {
    group: Group;
}
interface GroupAPICreateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    group?: Group;
}

interface GroupAPIShareRequest {
    group_id: string;
    user_id: string;
    permission: string;
}
interface GroupAPIShareResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    data?: any;
}

interface GroupAPIUnshareRequest {
    group_id: string;
    user_id: string;
}
interface GroupAPIUnshareResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    data?: any;
}

export {
    teamViewerGroupAPI,
    GroupAPICreateRequest,
    GroupAPICreateResponse,
    GroupAPIShareRequest,
    GroupAPIShareResponse,
    GroupAPIUnshareRequest,
    GroupAPIUnshareResponse
}
