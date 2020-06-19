namespace TeamViewer {
    export interface Device {
        device_id?: string;
        remotecontrol_id?: string;
        groupid?: string;
        alias?: string;
        description?: string;
        online_state?: string;
        supported_features?: string;
        assigned_to?: boolean;
        policy_id?: string;
        last_seen?: string;
    }
}