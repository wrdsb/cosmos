export interface SchoolInventoryRecord {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;
 
    id?: string;
    assetID?: string;
    powerAppsId?: string;
    changeDetectionHash?: string;
 
    status?: string;

    manufacturer?: string;
    modelName?: string;
    modelID?: string;
    serialNumber?: string;

    poDate?: string;

    location?: string;
    program?: string;
    project?: string;

    assignedTo?: string;
    position?: string;
    employee?: string;

    signedOut?: boolean;
    returned?: boolean;
    notes?: string;
}