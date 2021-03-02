import { ChangeDetectionHash, DateTime, PersonID, BusinessUnitID } from "@cosmos/types";
import { AssetID, AssetAssignmentID, AssetLifecycleState } from "@cosmos/types";

export interface AssetAssignment {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    createdBy?: PersonID;
    updatedBy?: PersonID;
    deletedBy?: PersonID;

    id?: AssetAssignmentID;
    changeDetectionHash?: ChangeDetectionHash;

    assetID?: AssetID;

    assignedBy?: PersonID;
    
    assignedTo?: PersonID | BusinessUnitID;
    receivedBy?: PersonID;

    startDate: DateTime;
    endDate: DateTime;

    untrackedAssestsIncluded?: string;
    notes?: string;
}