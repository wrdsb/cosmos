import { IPPSLocation } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSLocation(objectToHash: IPPSLocation): string {
    const objectForHash = JSON.stringify({
        locationCode:         objectToHash.locationCode,
        locationDescription:  objectToHash.locationDescription,
        schoolCode:           objectToHash.schoolCode,
        locationType:         objectToHash.locationType,
        panel:                objectToHash.panel
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
