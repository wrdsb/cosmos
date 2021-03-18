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

    assignedBy?: PersonID;
    assignedFromLocation?: string;

    id?: AssetAssignmentID;
    changeDetectionHash?: ChangeDetectionHash;

    assetID?: AssetID;
    assetSerialNumber?: string;
    assetType?: string;
    assetLocation?: string;
    
    assignedToPerson?: PersonID;
    assignedToPersonEmail?: string;
    assignedToPersonNumber?: string;
    assignedToPersonLocation?: string;

    assignedToBusinessUnit?: BusinessUnitID;

    receivedByAssignee?: boolean;
    receivedBy?: PersonID;
    receivedByRole?: string;

    isTemporary?: boolean;
    startDate: DateTime;
    endDate: DateTime;

    untrackedAssestsIncluded?: string;
    notes?: string;
}