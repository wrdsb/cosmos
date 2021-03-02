import { ChangeDetectionHash, DateTime, PersonID, BusinessUnitID } from "@cosmos/types";
import { AssetID, AssetAllotmentID, AssetAssignmentID, AssetLifecycleState } from "@cosmos/types";

export interface Asset {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    createdBy?: PersonID;
    updatedBy?: PersonID;
    deletedBy?: PersonID;

    id?: string;
    assetID?: AssetID;

    changeDetectionHash?: ChangeDetectionHash;
    lifecycleState?: AssetLifecycleState;

    isAllottedPerson?: boolean;
    isAllottedBusinessUnit?: boolean;

    personAllotmentID?: AssetAllotmentID;
    allottedToPersonID?: PersonID;

    businessUnitAllotmentID?: AssetAllotmentID;
    allottedToBusinessUnitID?: BusinessUnitID;

    programAllotmentID?: string;
    allottedToProgramID?: string;

    projectAllotmentID?: string;
    allottedToProjectID?: string;

    isAssignedPerson?: boolean;
    isAssignedBusinessUnit?: boolean;

    personAssignmentID?: AssetAssignmentID;
    assignedToPersonID?: PersonID;

    businessUnitAssignmentID?: AssetAssignmentID;
    assignedToBusinessUnitID?: BusinessUnitID;

    programAssignmentID?: string;
    assignedToProgramID?: string;

    projectAssignmentID?: string;
    assignedToProjectID?: string;

    wasPurchased?: boolean;
    wasPrivatePurchase?: boolean;
    wasDonated?: boolean;
    wasUsed?: boolean;

    wasReplacement?: boolean;
    replacementID?: string;
    isReplaceable?: boolean;
    replaceableUntil?: string;
    replaceableOn?: string;
    wasReplaced?: boolean;
    replacedID?: string;

    purchaseOrderID?: string;
    purchasedOn?: string;
    receivedOn?: string;
    commissionedOn?: string;
    allottedOn?: string;
    unallottedOn?: string;
    assignedOn?: string;
    unassignedOn?: string;
    decommissionedOn?: string;
    recycledOn?: string;
    warrantyEndsOn?: string;
    
    assetType?: string;
    manufacturer?: string;
    model?: string;

    isSEA?: boolean;
    seaType?: string;

    serialNumber?: string;
    macAddress?: string;
    bitlockerID?: string;
    tpmID?: string;

    notes?: string;
}
