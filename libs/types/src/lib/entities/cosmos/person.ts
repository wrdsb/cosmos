import { CosmosCoreFields } from "@cosmos/types";

interface CosmosPerson extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    email?: string;
    username?: string;
    employeeID?: string;
    staffNumber?: string;

    firstName?: string;
    lastName?: string;
    fullName?: string;
    sortableName?: string;
}

export { CosmosPerson };