import { CosmosCoreFields } from "@cosmos/types";

interface IPPSPosition extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;
    
    positionID: string;
    employeeID: string;

    employeeGroupCode: string;
    jobCode: string;
    locationCode: string;

    establishmentCode: string;
    isHomeLocation: string;

    positionStartDate: string;
    positionEndDate: string;
}

export { IPPSPosition };