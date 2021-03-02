import { ChangeDetectionHash, DateTime, PersonID, BusinessUnitID } from "@cosmos/types";
import { AssetID, AssetEntitlementID, AssetLifecycleState } from "@cosmos/types";

export interface AssetEntitlement {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    createdBy?: PersonID;
    updatedBy?: PersonID;
    deletedBy?: PersonID;

    id?: AssetEntitlementID;
    changeDetectionHash?: ChangeDetectionHash;
}