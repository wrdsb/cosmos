import { IPPSDirectory } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSDirectory(objectToHash: IPPSDirectory): string {
    const objectForHash = JSON.stringify({
        email:       objectToHash.email,
        firstName:   objectToHash.firstName,
        lastName:    objectToHash.lastName,
        fullName:    objectToHash.fullName,
        directory:   objectToHash.directory,
        phone:       objectToHash.phone,
        extension:   objectToHash.extension,
        mbxnumber:   objectToHash.mbxnumber,
        schoolCode:  objectToHash.schoolCode,
        jobDesc:     objectToHash.jobDesc

    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
