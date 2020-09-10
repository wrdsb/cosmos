interface TrilliumAssignment {
  id?: string;
  staff_number: string;
  school_code: string;
  class_code: string;
  block: string;
  room_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumAssignment };