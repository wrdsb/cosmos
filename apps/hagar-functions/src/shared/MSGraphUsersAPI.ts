import { AxiosError, AxiosRequestConfig } from "axios";
import { User } from "@microsoft/microsoft-graph-types";
import { msGraphAPI } from "./msGraphAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

export class MSGraphUsersAPI {
    private apiConfig: AxiosRequestConfig;
    private api: msGraphAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new msGraphAPI(this.apiConfig);
    }

    // GET /users
    public async list(): Promise<User[] | ServerError> {
        try {
            const response = await this.api.get<User[]>('/users');
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
    
    // GET /users/{id | userPrincipalName}
    public async get(id: string): Promise<User | ServerError> {
        try {
            const response = await this.api.get<User>(`/users/${id}`);
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
    
    // GET /users/delta
    public async delta() {
        try {
            const response = await this.api.get(`/users/delta`);
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
