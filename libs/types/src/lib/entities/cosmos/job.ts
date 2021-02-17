import { CosmosCoreFields } from "@cosmos/types";

interface CosmosJob extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    jobCode?: string;
    jobDescription?: string;
}

export { CosmosJob };