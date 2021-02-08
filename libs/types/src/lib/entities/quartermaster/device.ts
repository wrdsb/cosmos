import { Asset } from "./asset";

export interface Device extends Asset {
    assetID?: string;
 
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

    isLoaned?: boolean;
    signedOut?: boolean;
    returned?: boolean;
    notes?: string;
}
