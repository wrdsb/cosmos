interface TrilliumEnrolment {
  id?: string;
  schoolCode: string;
  classCode: string;
  studentNumber: string;
  studentFirstName: string;
  studentLastName: string;
  studentEmail: string;
  staffNumber: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  deleted?: boolean
}

export { TrilliumEnrolment };