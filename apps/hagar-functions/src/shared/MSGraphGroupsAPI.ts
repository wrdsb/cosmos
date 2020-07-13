import { AxiosError, AxiosRequestConfig } from "axios";
import { ServerError } from "./serverError";
import { msGraphAPI } from "../shared/msGraphAPI";
import { apiConfig } from "../shared/apiConfig";

import { PageCollection, PageIterator, PageIteratorCallback } from "@microsoft/microsoft-graph-client";
import { Group } from "@microsoft/microsoft-graph-types";
import { Client } from "@microsoft/microsoft-graph-client";
import { MyAuthenticationProvider } from "../shared/MyAuthenticationProvider";

export class MSGraphGroupsAPI {
    private apiToken;
    private authProvider;
    private clientOptions;
    private client;

    public constructor (apiToken: string ) {
        this.apiToken = apiToken;
        this.authProvider = new MyAuthenticationProvider(apiToken);

        this.clientOptions = {
            authProvider: this.authProvider
        };

        this.client = Client.initWithMiddleware(this.clientOptions);
    }

    // GET /groups
    public async list(): Promise<Group[]> {
        let groups = [];
        let count = 0;

        let client = this.client;

        try {
            // Makes request to fetch groups list.
            let response: PageCollection = await client.api("/groups?$top=999").get();

            // A callback function to be called for every item in the collection.
            // This call back should return boolean indicating whether not to
            // continue the iteration process.
            let iteratorCallback: PageIteratorCallback = (data) => {
                groups.push(data);
                count++;
                return true;
            };

            // Creating a new page iterator instance with client a graph client
            // instance, page collection response from request and callback
            let pageIterator = new PageIterator(client, response, iteratorCallback);

            // This iterates the collection until the nextLink is drained out.
            let itter = await pageIterator.iterate();

            return groups;
        } catch (err) {
            // TODO: Error handling
            throw err;
        }
    }
    
    // GET /groups/{id}
    public async get(id: string): Promise<Group> {
        try {
            const response = await this.client.api(`/groups/${id}`).get();
            const data = response;
            return data;
        } catch (err) {
            //if (err && err.response) {
                //const axiosError = err as AxiosError<ServerError>
                //return axiosError.response.data;
            //}
            throw err;
        }
    }
    
    // POST /groups
    public async create(group: Group): Promise<Group> {
        try {
            const response = await this.client.api('/groups').post(group);
            const data = response;
            return data;
        } catch (err) {
            if (err) {
                return err;
            }
            throw err;
        }
    }
    
    // PATCH /groups/{id}
    //public async update(group: Group): Promise<Group | ServerError> {
        //try {
            //const response = await this.api.patch(`/groups/${group.id}`);
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
    
    // DELETE /groups/{id}
    //public async delete(id: string): Promise<boolean | ServerError> {
        //try {
            //const response = await this.api.delete(`/groups/${id}`);
            //return true;
        //} catch (err) {
            //if (err && err.response) {
                //const axiosError = err as AxiosError<ServerError>
                //return axiosError.response.data;
            //}
            //throw err;
        //}
    //}
    
    // GET /groups/delta
    //public async delta() {
        //try {
            //const response = await this.api.get(`/groups/delta`);
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
