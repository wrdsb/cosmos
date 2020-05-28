import { Person } from "./person.interface";
import { IPPSRecord } from "./ipps-record.class";
import { TrilliumRecord } from "./trillium-record.class";

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
}

export { CodexPerson };
