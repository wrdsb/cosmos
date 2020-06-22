import { AxiosError, AxiosRequestConfig } from "axios";
import { Contact, ContactsListResponse } from "./teamViewerTypes";
import { teamViewerAPI } from "./teamViewerAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

class teamViewerContactAPI {
    private apiConfig: AxiosRequestConfig;
    private api: teamViewerAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new teamViewerAPI(this.apiConfig);
    }

    // GET /contacts
    public async list(): Promise<Contact[] | ServerError> {
        try {
            const response = await this.api.get<ContactsListResponse>('/contacts');
            const data = response.data.contacts;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /contacts
    public async getByName(name: string): Promise<Contact[] | ServerError> {
        try {
            const response = await this.api.get<ContactsListResponse>(`/contacts?name=${name}`);
            const data = response.data.contacts;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /contacts
    public async getByEmail(email: string): Promise<Contact[] | ServerError> {
        try {
            const response = await this.api.get<ContactsListResponse>(`/contacts?email=${name}`);
            const data = response.data.contacts;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // GET /contacts
    public async getByOnlineState(state: string): Promise<Contact[] | ServerError> {
        try {
            const response = await this.api.get<ContactsListResponse>(`/contacts?online_state=${name}`);
            const data = response.data.contacts;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // GET /contacts
    public async getByGroupID(id: string): Promise<Contact[] | ServerError> {
        try {
            const response = await this.api.get<ContactsListResponse>(`/contacts?groupid=${name}`);
            const data = response.data.contacts;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // POST /contacts
    public async create(request: ContactAPICreateRequest): Promise<ContactAPICreateResponse> {
        try {
            const response = await this.api.post(`/contacts`, request.contact);
            const data = response.data;
            const result = {
                code: 201,
                message: 'created',
                contact: data
            } as ContactAPICreateResponse;
            return result;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                const result = {
                    code: 500,
                    message: 'error',
                    serverError: axiosError.response.data
                } as ContactAPICreateResponse;
                return result;
            }
            throw err;
        }
    }
    
    // PUT /users/{id}
    //public async update(user: User): Promise<User | ServerError> {
        //try {
            //const response = await this.api.put(`/users/${user.id}`, JSON.stringify(user));
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
    
    // DELETE /contacts/{id}
    public async delete(id: string): Promise<boolean | ServerError> {
        try {
            const response = await this.api.delete(`/contacts/${id}`);
            return true;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
}

interface ContactAPICreateRequest {
    contact: Contact;
}
interface ContactAPICreateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    contact?: Contact;
}

export {
    teamViewerContactAPI,
    ContactAPICreateRequest,
    ContactAPICreateResponse
}
