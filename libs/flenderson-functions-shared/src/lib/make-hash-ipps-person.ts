import { IPPSPerson } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSPerson(objectToHash: IPPSPerson): string {
    const objectForHash = JSON.stringify({
        employeeID:  objectToHash.employeeID,
        email:       objectToHash.email,
        firstName:   objectToHash.firstName,
        lastName:    objectToHash.lastName,
        status:      objectToHash.status
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
