import { AxiosError, AxiosRequestConfig } from "axios";
import { Group } from "@microsoft/microsoft-graph-types";
import { msGraphAPI } from "./msGraphAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

export class MSGraphGroupsAPI {
    private apiConfig: AxiosRequestConfig;
    private api: msGraphAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new msGraphAPI(this.apiConfig);
    }

    // GET /groups
    public async list(): Promise<Group[] | ServerError> {
        try {
            const response = await this.api.get<Group[]>('/groups');
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
    public async create(group: Group): Promise<Group | ServerError> {
        try {
            const response = await this.api.post(`/groups`, JSON.stringify(group));
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
    
    // PATCH /groups/{id}
    public async update(group: Group): Promise<Group | ServerError> {
        try {
            const response = await this.api.patch(`/groups/${group.id}`);
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
    
    // GET /groups/delta
    public async delta() {
        try {
            const response = await this.api.get(`/groups/delta`);
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
}
