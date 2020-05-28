import { HRISRecord } from "./hris-record.interface";
import { SparkrockPosition } from "./sparkrock-position.class";

class SparkrockRecord implements HRISRecord {
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
    positions: Array<SparkrockPosition>;
}

export { SparkrockRecord };