import { TrilliumAssignment } from "./trillium-assignment";

interface TrilliumStaffAssignment {
  id?: string;
  staff_number: string;
  assignments: any;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumStaffAssignment };