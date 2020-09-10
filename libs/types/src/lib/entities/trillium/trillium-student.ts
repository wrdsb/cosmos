interface TrilliumStudent {
  id?: string;
  student_number: string;
  student_email: string;
  student_first_name: string;
  student_last_name: string;
  school_code: string;
  student_oyap: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumStudent };