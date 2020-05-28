import { TeachingAssignment } from "./teaching-assignment.interface";

class TrilliumAssignment implements TeachingAssignment {
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

export { TrilliumAssignment };