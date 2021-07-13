import { FlendersonPerson } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashFlendersonPerson(objectToHash: FlendersonPerson): string {
    const objectForHash = JSON.stringify({
        email:                    objectToHash.email,
        username:                 objectToHash.username,
        employeeID:               objectToHash.employeeID,
        ein:                      objectToHash.ein,
        activityCode:             objectToHash.activityCode,
        firstName:                objectToHash.firstName,
        lastName:                 objectToHash.lastName,
        fullName:                 objectToHash.fullName,
        sortableName:             objectToHash.sortableName,
        locationCodes:            objectToHash.locationCodes,
        schoolCodes:              objectToHash.schoolCodes,
        jobCodes:                 objectToHash.jobCodes,
        employeeGroupCodes:       objectToHash.employeeGroupCodes,
        homeLocation:             objectToHash.homeLocation,
        directory:                objectToHash.directory,
        phone:                    objectToHash.phone,
        extension:                objectToHash.extension,
        mbxnumber:                objectToHash.mbxnumber,
        numberOfPositions:        objectToHash.numberOfPositions,
        numberOfActivePositions:  objectToHash.numberOfActivePositions,
        positions:                objectToHash.positions
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
