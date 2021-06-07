import { DateTime, PersonID } from "@cosmos/types";

interface CosmosCoreFields {
    createdAt?: DateTime;
    updatedAt?: DateTime;
    deletedAt?: DateTime;
    deleted?: boolean;

    createdBy?: PersonID;
    updatedBy?: PersonID;
    deletedBy?: PersonID;

    id?: string;
}

export { CosmosCoreFields };