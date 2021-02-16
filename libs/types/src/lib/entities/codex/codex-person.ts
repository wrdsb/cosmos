import { CosmosPerson } from "@cosmos/types";

import { IPPSPerson } from "@cosmos/types";

import { IPPSRecord } from "@cosmos/types";
import { TrilliumRecord } from "@cosmos/types";

interface CodexPerson extends CosmosPerson {
    id: string;
    ein: string;
    email: string;
    username: string;

    name: string;
    first_name: string;
    last_name: string;
    sortable_name: string;

    people_set_memberships: string[];
    people_set_names: string[];

    school_codes: string[];
    location_codes: string[];
    job_codes: string[];
    ipps_home_location: string;

    ippsRecord: IPPSRecord;
    trilliumRecord: TrilliumRecord;

    its_field_tech_for: string[];
    dlst_for: string[];
    catc_contact_for: string[];
    its_program_manager_for: string[];
}

export { CodexPerson };
