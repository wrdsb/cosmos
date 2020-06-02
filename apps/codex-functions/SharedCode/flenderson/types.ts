interface IPPSPostition {
    ein: string;
    position_id: string;
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

interface IPPSPerson {
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

    positions: Array<IPPSPostition>

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean;
}

export { IPPSPostition, IPPSPerson };
