import { IPPSPosition } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSPosition(objectToHash: IPPSPosition): string {
    const objectForHash = JSON.stringify({
        positionID:          objectToHash.positionID,
        employeeID:          objectToHash.employeeID,
        employeeGroupCode:   objectToHash.employeeGroupCode,
        jobCode:             objectToHash.jobCode,
        locationCode:        objectToHash.locationCode,
        establishmentCode:   objectToHash.establishmentCode,
        isHomeLocation:      objectToHash.isHomeLocation,
        positionStartDate:   objectToHash.positionStartDate,
        positionEndDate:     objectToHash.positionEndDate,
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
