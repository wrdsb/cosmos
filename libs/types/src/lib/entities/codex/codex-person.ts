import { CosmosPerson } from "@cosmos/types";

import { IPPSPerson } from "@cosmos/types";
import { TrilliumRecord } from "@cosmos/types";

interface CodexPerson extends CosmosPerson {
    // Fields from CosmosPerson
    // id: string;
    // createdAt: string;
    // updatedAt: string;
    // deletedAt: string;
    // deleted: boolean

    // email?: string;
    // username?: string;
    // employeeID?: string;
    // staffNumber?: string;

    // firstName?: string;
    // lastName?: string;
    // fullName?: string;
    // sortableName?: string;

    people_set_names: string[];
    people_set_memberships: string[];
    
    ippsEIN: string;
    ippsLocationCodes: string[];
    ippsSchoolCodes: string[];
    ippsJobCodes: string[];
    ippsHomeLocation: string;
    ippsPerson: IPPSPerson;

    trilliumRecord: TrilliumRecord;

    its_field_tech_for: string[];
    dlst_for: string[];
    catc_contact_for: string[];
    its_program_manager_for: string[];
}

export { CodexPerson };
