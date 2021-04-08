import { CosmosCoreFields } from "@cosmos/types";

interface CosmosEmployeeGroup extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    employeeGroupCode?: string;
    employeeGroupDescription?: string;
    employeeGroupCategory?: string;
}

export { CosmosEmployeeGroup };
