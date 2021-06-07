import { CosmosCoreFields } from "@cosmos/types";

interface IPPSEmployeeGroup extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;

    employeeGroupCode: string;
    employeeGroupCategory: string;
    employeeGroupDescription: string;
    employeeGroupAbbreviation: string;
}

export { IPPSEmployeeGroup };
