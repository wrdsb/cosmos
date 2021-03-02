import { ChangeDetectionHash, DateTime } from "@cosmos/types";
import { AssetID, AssetAssignmentID, AssetAssignment } from "@cosmos/types";

export interface AssetAssignmentHistory {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: ChangeDetectionHash;

    assetID?: AssetID;

    assetAssignmentIDs?: AssetAssignmentID[];
    assetAssignments?: AssetAssignment[];

    isAssigned?: boolean;

    wasAssigned?: boolean;
    wasUnassigned?: boolean;
    totalAssignments?: number;
    totalUnassignments?: number;
}