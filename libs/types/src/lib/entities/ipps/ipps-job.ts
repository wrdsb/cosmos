import { CosmosCoreFields } from "@cosmos/types";

interface IPPSJob extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;
    changeDetectionHash?: string;

    jobCode: string;
    jobDescription: string;
    jobAbbreviation: string;
}

export { IPPSJob }