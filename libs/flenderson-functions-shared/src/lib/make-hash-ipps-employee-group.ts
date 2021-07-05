import { IPPSEmployeeGroup } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSEmployeeGroup(objectToHash: IPPSEmployeeGroup): string {
    const objectForHash = JSON.stringify({
        employeeGroupCode:         objectToHash.employeeGroupCode,
        employeeGroupDescription:  objectToHash.employeeGroupDescription,
        employeeGroupCategory:     objectToHash.employeeGroupCategory
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
