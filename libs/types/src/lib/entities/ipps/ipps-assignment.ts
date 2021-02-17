import { HRISAssignment } from "@cosmos/types";

interface IPPSAssignment extends HRISAssignment {
    employeeID: string;
    positionID: string;

    positionstartDate: string;
    positionEndDate: string;
    activityCode: string;

    schoolCode: string;
    schoolType: string;
    panel: string;

    locationCode: string;
    locationDesc: string;
    homeLocInd: string;

    jobCode: string;
    jobDesc: string;

    empGroupCode: string;
    empGroupDesc: string;
    empGroupCategory: string;

    phoneNo: string;
    extension: string;
}

export { IPPSAssignment };