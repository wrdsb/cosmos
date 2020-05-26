type PeopleSetType = string;
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

export { PeopleSetType, PeopleSetsCollection, PeopleSetDefinition };
