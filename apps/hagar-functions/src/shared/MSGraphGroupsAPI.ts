import { AzureFunction, Context } from "@azure/functions"
import { AxiosError, AxiosRequestConfig } from "axios";
import { PageCollection, PageIterator, PageIteratorCallback } from "@microsoft/microsoft-graph-client";
import { Group } from "@microsoft/microsoft-graph-types";
import { ServerError } from "./serverError";
import { msGraphAPI } from "../shared/msGraphAPI";
import { apiConfig } from "../shared/apiConfig";

import { Client } from "@microsoft/microsoft-graph-client";
import { MyAuthenticationProvider } from "./MyAuthenticationProvider";

export class MSGraphGroupsAPI {
    private client: Client;
    private apiConfig: AxiosRequestConfig;
    private api: msGraphAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new msGraphAPI(this.apiConfig);

        const clientOptions = {
            authProvider: new MyAuthenticationProvider(apiToken)
        };

        this.client = Client.initWithMiddleware(clientOptions);
    }

    // GET /groups
    public async list(): Promise<Group[] | ServerError> {
        let groups = [];

        try {
            // Makes request to fetch groups list.
            let response: PageCollection = await this.client
                .api("/groups?$top=999")
                .get();

            // A callback function to be called for every item in the collection.
            // This call back should return boolean indicating whether not to
            // continue the iteration process.
            let callback: PageIteratorCallback = (data) => {
                groups.push(data.subject);
                return true;
            };

            // Creating a new page iterator instance with client a graph client
            // instance, page collection response from request and callback
            let pageIterator = new PageIterator(this.client, response, callback);

            // This iterates the collection until the nextLink is drained out.
            await pageIterator.iterate();

            return groups;
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
