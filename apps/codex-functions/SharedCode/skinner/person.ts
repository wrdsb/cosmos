import { SchoolGig } from "./types";

interface Employee {
    id: string;
    staffNumber: string;
    email: string;

    schoolGigs: Array<SchoolGig>;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean
}

class School {
    id: string;
    schoolCode: string;

    staffAssignments: Array<SchoolGig>;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
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
type studentNumber = string;
type studentEmail = string;
type studentFirstName = string;
type studentLastName = string;
type schoolCode = string;
type studentOYAP = string;
