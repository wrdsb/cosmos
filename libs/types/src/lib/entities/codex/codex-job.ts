import { CosmosJob } from "@cosmos/types";

interface CodexJob extends CosmosJob {
    // Fields from CosmosJob
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    // jobCode?: string;
    // jobDescription?: string;
}

export { CodexJob }