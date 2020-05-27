interface IGORGroupsGroupMeta {
    id: string;
    email: string;
    google_id: string;

    sorting_hat_enabled: boolean;
    members_people_sets: string[];
    mangers_people_sets: string[];
    owners_people_sets: string[];

    membership_automation_active: boolean;
    automate_mangers: boolean;
    automate_members: boolean;
    automate_owners: boolean;
}

interface IGORGroupsGroupMaterialized {

}
