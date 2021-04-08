import { SISRecord } from "@cosmos/types";
import { TrilliumAssignment } from "@cosmos/types";

interface TrilliumRecord extends SISRecord {
  id: string;
  staffNumber: string;
  schoolCode: string;
  schoolYear: string;
  staffType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  deleted: boolean
  assignments: Array<TrilliumAssignment>
}

export { TrilliumRecord };