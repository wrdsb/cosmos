interface SchoolClass {
    id: string;
    school_code: string;
    class_code: string;
    block: string;
    room_number: string;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

interface SchoolGig {
    id: string;
    school_code: string;
    school_year: string;
    staff_type: string;
    status: string;

    classes: Array<SchoolClass>;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

interface EmployeeAssignment {
    id: string;
    staff_number: string;
    email: string;

    gig: SchoolGig;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}


interface SchoolStudent {
    id: string;
    student_number: string;
    student_email: string;
    student_first_name: string;
    student_last_name: string;
    school_code: string;
    student_oyap: string;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

export { SchoolGig };
