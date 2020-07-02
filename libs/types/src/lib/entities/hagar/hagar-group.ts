import { AADGroup } from "../aad";
import { PeopleSetDefinition } from "../sorting-hat";

export interface HAGARGroup extends AADGroup {
    businessOwner?: string;

    membershipAutomationActive?: boolean;
    automateMembers?: boolean;

    membersPeopleSets?: PeopleSetDefinition[];

    configurationAutomationActive?: boolean;
    configurationTemplates?: string;
}