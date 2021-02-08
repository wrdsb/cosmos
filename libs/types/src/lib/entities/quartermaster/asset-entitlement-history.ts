import { AssetEntitlement } from "./asset-entitlement";

export interface AssetEntitlementHistory {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    assetAssignments: AssetEntitlement[];
}