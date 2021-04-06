import { CosmosPerson } from "@cosmos/types";
import { IPPSAssignment } from "@cosmos/types";

interface IPPSPerson extends CosmosPerson {
    // Fields from CosmosPerson
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    // email?: string;
    // username?: string;
    // employeeID?: string;
    // staffNumber?: string;

    // firstName?: string;
    // lastName?: string;
    // fullName?: string;
    // sortableName?: string;

    ein: string;

    locationCodes: string[];
    schoolCodes: string[];
    jobCodes: string[];
    homeLocation: string;

    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;

    assignments: IPPSAssignment[];
}

export { IPPSPerson };