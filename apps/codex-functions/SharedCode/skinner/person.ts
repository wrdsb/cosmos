import { SchoolGig } from "./types";

interface Employee {
    id: string;
    staff_number: string;
    email: string;

    school_gigs: Array<SchoolGig>;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

class School {
    id: string;
    school_code: string;

    staff_assignments: Array<SchoolGig>;

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean
}

type SchoolClassID = string;

type SchoolCode = string;

type ClassCode = string;

type ClassBlock = string;

type RoomNumber = string;

type CreatedAt = string;

type UpdatedAt = string;

type DeletedAt = string;

type Deleted = boolean

type SchoolGigID = string;

type SchoolYear = string;

type StaffType = string;

type SchoolGigStatus = string;

type EmployeeAssignmentID = string;

type StaffNumber = string;

type Email = string;

type SchoolStudentID = string;
type student_number = string;
type student_email = string;
type student_first_name = string;
type student_last_name = string;
type school_code = string;
type student_oyap = string;
