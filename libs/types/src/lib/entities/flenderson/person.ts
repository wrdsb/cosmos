import { CosmosCoreFields } from "@cosmos/types";
import { FlendersonPosition } from "@cosmos/types";

interface FlendersonPerson extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;

    email?: string;
    username?: string;
    employeeID?: string;
    ein?: string;

    firstName?: string;
    lastName?: string;
    fullName?: string;
    sortableName?: string;

    // TODO: use the real types
    locationCodes?: string[];
    schoolCodes?: string[];
    jobCodes?: string[];
    employeeGroupCodes?: string[];

    homeLocation?: string;
    directory?: string;
    phone?: string;
    extension?: string;
    mbxnumber?: string;

    numberOfPositions?:       number;
    numberOfActivePositions?: number;
    ippsPositions?:           FlendersonPosition[]
}
