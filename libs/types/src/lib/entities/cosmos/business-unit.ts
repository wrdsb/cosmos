import { CosmosCoreFields } from "./core-fields";
import { BusinessUnitID, ChangeDetectionHash, DateTime, PersonID } from "@cosmos/types";

export interface BusinessUnit extends CosmosCoreFields {
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
