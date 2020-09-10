interface TrilliumStaff {
  id?: string;
  staff_number: string;
  school_code: string;
  school_year: string;
  staff_type: string;
  status: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  deleted?: boolean
}

export { TrilliumStaff };