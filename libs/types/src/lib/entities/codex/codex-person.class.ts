import { Person } from "../conceptual/person.interface";
import { IPPSRecord } from "../ipps/ipps-record.class";
import { TrilliumRecord } from "../trillium/trillium-record.class";

class CodexPerson implements Person {
    id: string;
    ein: string;
    email: string;
    pal: string;

    name: string;
    first_name: string;
    last_name: string;
    sortable_name: string;

    people_set_memberships: Array<string>;

    school_codes: Array<string>;
    location_codes: Array<string>;

    ippsRecord: IPPSRecord;
    trilliumRecord: TrilliumRecord;

    its_field_tech_for: string[];
    dlst_for: string[];
    catc_contact_for: string[];
    its_program_manager_for: string[];
}

export { CodexPerson };
