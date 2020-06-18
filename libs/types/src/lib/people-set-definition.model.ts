type PeopleSetType = "schoolCode" | "igor-legacy" | "ipps-location" | "ipps-job" | "ipps-group" | "manual";
type PeopleSetsCollection = string[];

interface PeopleSetDefinition {
    id: string;

    atomic: boolean;

    type: PeopleSetType;

    name: string;
    short_name: string;
    aliases: string[];

    categories: string[];
    tags: string[];

    definition: PeopleSetsCollection[];
    constituent_sets: PeopleSetsCollection;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean;
}

interface PeopleSetDefinitionQuery {
    id?: string;
}

export { PeopleSetType, PeopleSetsCollection, PeopleSetDefinition, PeopleSetDefinitionQuery };
