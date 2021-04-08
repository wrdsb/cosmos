interface IPPSPostition {
    ein: string;
    positionID: string;
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

interface IPPSPerson {
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

    positions: Array<IPPSPostition>

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean;
}

export { IPPSPostition, IPPSPerson };
