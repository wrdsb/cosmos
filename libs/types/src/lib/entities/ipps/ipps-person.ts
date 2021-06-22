import { CosmosCoreFields } from "@cosmos/types";

interface IPPSPerson extends CosmosCoreFields {
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

    employeeID: string;
    email: string;

    firstName: string;
    lastName: string;

    status: string;
}

export { IPPSPerson };