import { CosmosCoreFields } from "@cosmos/types";

interface IPPSLocation extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;

    locationCode: string;
    locationType: string;
    locationDescription: string;
    locationAbbreviation: string;

    schoolCode: string;
    panel: string;
}

export { IPPSLocation }