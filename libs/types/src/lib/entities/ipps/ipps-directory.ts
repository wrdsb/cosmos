import { CosmosCoreFields } from "@cosmos/types";

interface IPPSDirectory extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;
    
    email: string;

    firstName: string;
    lastName: string;
    fullName: string;

    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;

    schoolCode: string;
    jobDesc: string;
}

export { IPPSDirectory };