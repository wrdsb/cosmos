import { HRISRecord } from "../conceptual/hris-record.interface";
import { SparkrockPosition } from "./sparkrock-position.class";

class SparkrockRecord implements HRISRecord {
    id: string;
    ein: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    name: string;
    sortableName: string;
    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
    positions: Array<SparkrockPosition>;
}

export { SparkrockRecord };