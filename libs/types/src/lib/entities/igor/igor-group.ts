import { GoogleGroup } from "../google";
import { PeopleSetDefinition } from "../sorting-hat";

export interface IGORGroup extends GoogleGroup {
    business_owner?: string;

    membership_automation_active?: boolean;
    automate_managers?: boolean;
    automate_members?: boolean;
    automate_owners?: boolean;

    managers_people_sets?: PeopleSetDefinition[];
    members_people_sets?: PeopleSetDefinition[];
    owners_people_sets?: PeopleSetDefinition[];

    configuration_automation_active?: boolean;
    configuration_templates?: string;
}