interface TrilliumStudent {
  id?: string;
  student_number: string;
  student_grade: string;
  student_email: string;
  student_first_name: string;
  student_last_name: string;
  school_code: string;
  student_oyap: string;
  student_shsm_sector: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumStudent };