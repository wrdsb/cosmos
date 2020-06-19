namespace TeamViewer {
    export interface Group {
        id?: string;
        name?: string;
        shared_with?: User[];
        owner?: User;
        permissions?: string;
        policy_id?: string;
    }
}