import { AxiosError, AxiosRequestConfig } from "axios";
import { msGraphAPI } from "./msGraphAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

import { PageCollection, PageIterator, PageIteratorCallback } from "@microsoft/microsoft-graph-client";
import { DirectoryObject, Group } from "@microsoft/microsoft-graph-types";
import { Client } from "@microsoft/microsoft-graph-client";
import { MyAuthenticationProvider } from "../shared/MyAuthenticationProvider";

export class MSGraphGroupMembershipsAPI {
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

    // GET /groups/{id}/members
    public async list(groupID: string): Promise<DirectoryObject[]> {
        let members = [];
        let count = 0;

        let client = this.client;

        try {
            // Makes request to fetch groups list.
            let response: PageCollection = await client.api(`/groups/${groupID}/members?$top=999`).get();

            // A callback function to be called for every item in the collection.
            // This call back should return boolean indicating whether not to
            // continue the iteration process.
            let iteratorCallback: PageIteratorCallback = (data) => {
                members.push(data);
                count++;
                return true;
            };

            // Creating a new page iterator instance with client a graph client
            // instance, page collection response from request and callback
            let pageIterator = new PageIterator(client, response, iteratorCallback);

            // This iterates the collection until the nextLink is drained out.
            let itter = await pageIterator.iterate();

            return members;
        } catch (err) {
            // TODO: Error handling
            throw err;
        }

    }
    
    // POST /groups/{id}/members/$ref
    public async add(groupID: string, directoryObject: DirectoryObject): Promise<boolean> {
        let client = this.client;

        try {
            const response = await client.api.post(`/groups/${groupID}/members/$ref`, JSON.stringify(directoryObject));
            return true;
        } catch (err) {
            // TODO: Error handling
            throw err;
        }
    }
    
    // DELETE /groups/{id}/members/{id}/$ref
    public async remove(groupID: string, directoryObject: DirectoryObject): Promise<boolean> {
        let client = this.client;

        try {
            const response = await client.api.delete(`/groups/${groupID}/members/${directoryObject.id}/$ref`);
            return true;
        } catch (err) {
            // TODO: Error handling
            throw err;
        }
    }
}
