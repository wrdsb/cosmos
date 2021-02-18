import { SISRecord } from "@cosmos/types";
import { TrilliumAssignment } from "@cosmos/types";

interface TrilliumRecord extends SISRecord {
  id: string;
  staff_number: string;
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