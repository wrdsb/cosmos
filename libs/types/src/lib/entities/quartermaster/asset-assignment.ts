import { Asset } from "./asset";

export interface AssetAssignment {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    assetID?: string;

    assignedBy?: string;
    assignedTo?: string;
    receivedBy?: string;
    untrackedAssestsIncluded?: string;
    notes?: string;
}