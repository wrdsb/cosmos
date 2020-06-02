interface Trillium {
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
    assignments: Array<Assignment>
}

interface Assignment {
    id: string;
    school_code: string;
    class_code: string;
    teacher_ein: string;
    teacher_email: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

interface IPPS {
    id: string;
    ein: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    name: string;
    sortable_name: string;
    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
    positions: Array<Position>;
}

interface Position {
    position_id: string;
    ein: string;
    activity_code: string;
    employee_group_category: string;
    employee_group_code: string;
    employee_group_description: string;
    extension: string;
    job_code: string;
    job_description: string;
    location_code: string;
    location_description: string;
    panel: string;
    phone_no: string;
    school_code: string;
    school_type: string;
    home_location_indicator: string;
    position_start_date: string;
    position_end_date: string;
}

export { Trillium, Assignment, IPPS, Position };
