interface TrilliumStudent {
  id?: string;
  studentNumber: string;
  studentGrade: string;
  studentEmail: string;
  studentFirstName: string;
  studentLastName: string;
  schoolCode: string;
  studentOYAP: string;
  studentSHSMSector: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  deleted?: boolean
}

export { TrilliumStudent };