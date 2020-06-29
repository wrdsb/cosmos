import { HRISRecord } from "../conceptual/hris-record.interface";
import { IPPSPosition } from "./ipps-position.class";

class IPPSRecord implements HRISRecord {
    id: string;
    ein: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    name: string;
    sortable_name: string;
    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
    positions: Array<IPPSPosition>;
}

export { IPPSRecord };