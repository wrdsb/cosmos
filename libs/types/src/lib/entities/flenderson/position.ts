import { CosmosCoreFields } from "@cosmos/types";

interface FlendersonPosition extends CosmosCoreFields {
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
    employeeGroupCategory: string;
    employeeGroupDescription: string;
    employeeGroupAbbreviation: string;

    jobCode: string;
    jobDescription: string;
    jobAbbreviation: string;

    locationCode: string;
    LocationType: string;
    locationDescription: string;
    locationAbbreviation: string;
    schoolCode: string;
    panel: string;

    establishmentCode: string;

    isHomeLocation: string;

    positionStartDate: string;
    positionEndDate: string;
}

export { FlendersonPosition };