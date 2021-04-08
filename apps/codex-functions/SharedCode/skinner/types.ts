interface SchoolClass {
    id: string;
    schoolCode: string;
    classCode: string;
    block: string;
    roomNumber: string;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
}

interface SchoolGig {
    id: string;
    schoolCode: string;
    schoolYear: string;
    staffType: string;
    status: string;

    classes: Array<SchoolClass>;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
}

interface EmployeeAssignment {
    id: string;
    staffNumber: string;
    email: string;

    gig: SchoolGig;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
}


interface SchoolStudent {
    id: string;
    studentNumber: string;
    studentEmail: string;
    studentFirstName: string;
    studentLastName: string;
    schoolCode: string;
    studentOYAP: string;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
}

export { SchoolGig };
