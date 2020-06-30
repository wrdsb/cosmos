import { GoogleGroup } from "../google";

export interface IGORGroup extends GoogleGroup {
    business_owner?: string;

    membership_automation_active?: boolean;
    automate_mangers?: boolean;
    automate_members?: boolean;
    automate_owners?: boolean;

    managers_people_sets?: string[];
    members_people_sets?: string[];
    owners_people_sets?: string[];

    configuration_automation_active?: boolean;
    configuration_templates?: string;
}