interface TrilliumClass {
  id?: string;
  school_code: string;
  class_code: string;
  class_grades?: string[];
  teacher_email?: string;
  teacher_name?: string;
  staff_number?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumClass };