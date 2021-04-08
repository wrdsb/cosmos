interface Trillium {
    id: string;
    ein: string;
    schoolCode: string;
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
    schoolCode: string;
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
    firstName: string;
    lastName: string;
    name: string;
    sortableName: string;
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
    positionID: string;
    ein: string;
    activityCode: string;
    employeeGroupCategory: string;
    employeeGroupCode: string;
    employeeGroupDescription: string;
    extension: string;
    jobCode: string;
    jobDescription: string;
    locationCode: string;
    locationDescription: string;
    panel: string;
    phone: string;
    schoolCode: string;
    schoolType: string;
    homeLocationIndicator: string;
    positionStartDate: string;
    positionEndDate: string;
}

export { Trillium, Assignment, IPPS, Position };
