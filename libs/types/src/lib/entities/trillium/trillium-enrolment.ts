interface TrilliumEnrolment {
  id?: string;
  school_code: string;
  class_code: string;
  student_number: string;
  student_first_name: string;
  student_last_name: string;
  student_email: string;
  staff_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumEnrolment };