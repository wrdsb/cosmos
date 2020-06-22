import { AxiosError, AxiosRequestConfig } from "axios";
import { User, UsersListResponse, UserCreateResponse } from "./teamViewerTypes";
import { teamViewerAPI } from "./teamViewerAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

class teamViewerUserAPI {
    private apiConfig: AxiosRequestConfig;
    private api: teamViewerAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new teamViewerAPI(this.apiConfig);
    }

    // GET /users
    public async list(): Promise<User[] | ServerError> {
        try {
            const response = await this.api.get<UsersListResponse>('/users?full_list=true');
            const data = response.data.users;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /users/{id}
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
    
    // POST /users
    public async create(user: User): Promise<UserCreateResponse> {
        try {
            const response = await this.api.post(`/users`, user);
            const data = response.data;
            const result = {
                code: 201,
                message: 'created',
                user: data
            }
            return result;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                const result = {
                    code: 500,
                    message: 'error',
                    serverError: axiosError.response.data
                }
                return result;
            }
            throw err;
        }
    }
    
    // PUT /users/{id}
    //public async update(user: User): Promise<UserAPIUpdateResponse> {
        //try {
            //const response = await this.api.put(`/users/${user.id}`, user);
            //const data = response.data;
            //return data;
        //} catch (err) {
            //if (err && err.response) {
                //const axiosError = err as AxiosError<ServerError>
                //return axiosError.response.data;
            //}
            //throw err;
        //}
    //}
}

type UserAPIListRequest = {}
interface UserAPIListResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    users?: User[];
}

interface UserAPIGetRequest {
    user_id: string;
}
interface UserAPIGetResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserAPICreateRequest {
    user: User;
}
interface UserAPICreateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserAPIUpdateRequest {
    user: User;
}
interface UserAPIUpdateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

export {
    teamViewerUserAPI,
    UserAPIListRequest,
    UserAPIListResponse,
    UserAPIGetRequest,
    UserAPIGetResponse,
    UserAPICreateRequest,
    UserAPICreateResponse,
    UserAPIUpdateRequest,
    UserAPIUpdateResponse,
}
