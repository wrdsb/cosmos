import { Position } from "./position.interface";

class SparkrockPosition implements Position {
    id: string;
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

export { SparkrockPosition };