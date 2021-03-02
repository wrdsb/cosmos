import { BusinessUnitID, ChangeDetectionHash, DateTime, PersonID } from "@cosmos/types";

export interface BusinessUnit {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    createdBy?: PersonID;
    updatedBy?: PersonID;
    deletedBy?: PersonID;

    id?: BusinessUnitID;
    changeDetectionHash?: ChangeDetectionHash;

    name: string;
}
