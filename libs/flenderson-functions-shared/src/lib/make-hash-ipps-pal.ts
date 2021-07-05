import { IPPSPal } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSPal(objectToHash: IPPSPal): string {
    const objectForHash = JSON.stringify({
        employeeID: objectToHash.employeeID,
        username:   objectToHash.username
});
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
