import { AxiosError, AxiosRequestConfig } from "axios";
import { msGraphAPI } from "./msGraphAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

import { PageCollection, PageIterator, PageIteratorCallback } from "@microsoft/microsoft-graph-client";
import { User } from "@microsoft/microsoft-graph-types";
import { Client } from "@microsoft/microsoft-graph-client";
import { MyAuthenticationProvider } from "../shared/MyAuthenticationProvider";

export class MSGraphUsersAPI {
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

    // GET /users
    public async list(context): Promise<User[]> {
        let users = [];
        let count = 0;

        let client = this.client;

        try {
            // Makes request to fetch users list.
            let response: PageCollection = await client.api("/users?$top=999").get();

            // A callback function to be called for every item in the collection.
            // This call back should return boolean indicating whether not to
            // continue the iteration process.
            let iteratorCallback: PageIteratorCallback = (data) => {
                users.push(data);
                count++;
                return true;
            };

            // Creating a new page iterator instance with client a graph client
            // instance, page collection response from request and callback
            let pageIterator = new PageIterator(client, response, iteratorCallback);

            // This iterates the collection until the nextLink is drained out.
            let itter = await pageIterator.iterate();

            return users;
        } catch (err) {
            // TODO: Error handling
            throw err;
        }
    }
    
    // GET /users/{id | userPrincipalName}
    public async get(id: string): Promise<User> {
        try {
            const response = await this.client.api(`/users/${id}`).get();
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
    
    // GET /users/delta
    public async delta() {
        try {
            const response = await this.client.api(`/users/delta`).get();
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
}
