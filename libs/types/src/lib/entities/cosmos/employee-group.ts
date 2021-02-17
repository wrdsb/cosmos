import { CosmosCoreFields } from "@cosmos/types";

interface CosmosEmployeeGroup extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    groupCode?: string;
    groupDescription?: string;
    groupCategory?: string;
}

export { CosmosEmployeeGroup };
