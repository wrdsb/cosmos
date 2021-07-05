import { FlendersonPosition } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashFlendersonPosition(objectToHash: FlendersonPosition): string {
    const objectForHash = JSON.stringify({
        positionID:                 objectToHash.positionID,
        employeeID:                 objectToHash.employeeID,
        employeeGroupCode:          objectToHash.employeeGroupCode,
        employeeGroupCategory:      objectToHash.employeeGroupCategory,
        employeeGroupDescription:   objectToHash.employeeGroupDescription,
        employeeGroupAbbreviation:  objectToHash.employeeGroupAbbreviation,
        jobCode:                    objectToHash.jobCode,
        jobDescription:             objectToHash.jobDescription,
        jobAbbreviation:            objectToHash.jobAbbreviation,
        locationCode:               objectToHash.locationCode,
        LocationType:               objectToHash.LocationType,
        locationDescription:        objectToHash.locationDescription,
        locationAbbreviation:       objectToHash.locationAbbreviation,
        schoolCode:                 objectToHash.schoolCode,
        panel:                      objectToHash.panel,
        establishmentCode:          objectToHash.establishmentCode,
        isHomeLocation:             objectToHash.isHomeLocation,
        positionStartDate:          objectToHash.positionStartDate,
        positionEndDate:            objectToHash.positionEndDate
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
