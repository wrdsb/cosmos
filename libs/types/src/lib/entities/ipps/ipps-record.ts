interface IPPSRecord {
    employeeID: string;
    emailAddress: string;
    username: string;

    activityCode: string;

    surname: string;
    firstName: string;

    schoolCode: string;
    schoolType: string;
    panel: string;

    locationCode: string;
    locationDesc: string;

    jobCode: string;
    jobDesc: string;

    phoneNo: string;
    extension: string;

    homeLocInd: string;

    empGroupCode: string;
    empGroupDesc: string;
    empGroupCategory: string;

    positionID: string;
    positionstartDate: string;
    positionEndDate: string;
}

export { IPPSRecord };