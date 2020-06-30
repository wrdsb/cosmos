import { AADGroup } from "../aad";
import { PeopleSetDefinition } from "../sorting-hat";

export interface HAGARGroup extends AADGroup {
    business_owner?: string;

    membership_automation_active?: boolean;
    automate_members?: boolean;

    members_people_sets?: PeopleSetDefinition[];

    configuration_automation_active?: boolean;
    configuration_templates?: string;
}