import { SISRecord } from "../conceptual/sis-record.interface";
import { TrilliumAssignment } from "./trillium-assignment";

interface TrilliumRecord extends SISRecord {
  id: string;
  ein: string;
  school_code: string;
  school_year: string;
  staff_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  deleted: boolean
  assignments: Array<TrilliumAssignment>
}

export { TrilliumRecord };