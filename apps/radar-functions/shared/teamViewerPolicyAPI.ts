import { AxiosError, AxiosRequestConfig } from "axios";
import { Policy, PolicyListResponse} from "./teamViewerTypes";
import { teamViewerAPI } from "./teamViewerAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

export class teamViewerPolicyAPI {
    private apiConfig: AxiosRequestConfig;
    private api: teamViewerAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new teamViewerAPI(this.apiConfig);
    }

    // GET /teamviewerpolicies
    public async list(): Promise<Policy[] | ServerError> {
        try {
            const response = await this.api.get<PolicyListResponse>('/teamviewerpolicies');
            const data = response.data.policies;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /teamviewerpolicies/{id}
    public async get(id: string): Promise<Policy | ServerError> {
        try {
            const response = await this.api.get<Policy>(`/teamviewerpolicies/${id}`);
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
    
    // POST /teamviewerpolicies
    //public async create(policy: Policy): Promise<Policy | ServerError> {
        //try {
            //const response = await this.api.post(`/teamviewerpolicies`, JSON.stringify(policy));
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
    
    // PUT /teamviewerpolicies/{id}
    public async update(policy: Policy): Promise<Policy | ServerError> {
        try {
            const response = await this.api.put(`/teamviewerpolicies/${policy.policy_id}`, JSON.stringify(policy));
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
    
    // DELETE /teamviewerpolicies/{id}
    public async delete(id: string): Promise<boolean | ServerError> {
        try {
            const response = await this.api.delete(`/teamviewerpolicies/${id}`);
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
