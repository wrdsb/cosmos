import { ChangeDetectionHash, DateTime, PersonID } from "@cosmos/types";
import { AssetEntitlementID, AssetEntitlement } from "@cosmos/types";

export interface AssetEntitlementHistory {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: ChangeDetectionHash;

    personID?: PersonID;

    assetEntitlementIDs?: AssetEntitlementID[];
    assetEntitlements: AssetEntitlement[];
}