import { AssetAssignment } from "./asset-assignment";

export interface AssetAssignmentHistory {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    assetID?: string;

    assetAssignments?: AssetAssignment[];

    wasAssigned?: boolean;
    wasUnassigned?: boolean;
    totalAssignments?: number;
    totalUnassignments?: number;
    isAssigned?: boolean;
}