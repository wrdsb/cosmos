import { CosmosCoreFields } from "@cosmos/types";

interface CosmosLocation extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    locationCode?: string;
    locationDescription?: string;

    schoolCode?: string;
    schoolType?: string;
    panel?: string;
}

export { CosmosLocation };