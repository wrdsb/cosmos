import { WALDIRUser } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashWALDIRUser(objectToHash: WALDIRUser): string {
    const objectForHash = JSON.stringify({
        email:             objectToHash.email,
        username:          objectToHash.username,
        firstName:         objectToHash.firstName,
        lastName:          objectToHash.lastName,
        fullName:          objectToHash.nickname,
        siteIDs:           objectToHash.siteIDs,
        roles:             objectToHash.roles,
        siteMemberships:   objectToHash.siteMemberships
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
