import { AxiosError, AxiosRequestConfig } from "axios";
import { Device, DevicesListResponse } from "./teamViewerTypes";
import { teamViewerAPI } from "./teamViewerAPI";
import { apiConfig } from "./apiConfig";
import { ServerError } from "./serverError";

export class teamViewerDeviceAPI {
    private apiConfig: AxiosRequestConfig;
    private api: teamViewerAPI;

    public constructor (apiToken: string ) {
        this.apiConfig = apiConfig;
        this.apiConfig.headers.common.Authorization = apiToken;
        this.api = new teamViewerAPI(this.apiConfig);
    }

    // GET /devices
    public async list(): Promise<Device[] | ServerError> {
        try {
            const response = await this.api.get<DevicesListResponse>('/devices?full_list=true');
            const data = response.data.devices;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // GET /devices
    public async getByRemoteControlID(id: string): Promise<Device[] | ServerError> {
        try {
            const response = await this.api.get<DevicesListResponse>(`/devices?full_list=true&remotecontrol_id=${id}`);
            const data = response.data.devices;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // GET /devices
    public async getByGroupID(id: string): Promise<Device[] | ServerError> {
        try {
            const response = await this.api.get<DevicesListResponse>(`/devices?full_list=true&groupid=${id}`);
            const data = response.data.devices;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }

    // GET /devices
    public async getByOnlineState(state: string): Promise<Device[] | ServerError> {
        try {
            const response = await this.api.get<DevicesListResponse>(`/devices?full_list=true&online_state=${state}`);
            const data = response.data.devices;
            return data;
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError<ServerError>
                return axiosError.response.data;
            }
            throw err;
        }
    }
    
    // POST /devices
    public async create(device: Device): Promise<Device | ServerError> {
        try {
            const response = await this.api.post(`/devices`, JSON.stringify(device));
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
    
    // PUT /devices/{id}
    public async update(device: Device): Promise<Device | ServerError> {
        try {
            const response = await this.api.put(`/devices/${device.device_id}`, JSON.stringify(device));
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
    
    // DELETE /devices/{id}
    public async delete(id: string): Promise<boolean | ServerError> {
        try {
            const response = await this.api.delete(`/devices/${id}`);
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
