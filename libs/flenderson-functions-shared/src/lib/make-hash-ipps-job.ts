import { IPPSJob } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashIPPSJob(objectToHash: IPPSJob): string {
    const objectForHash = JSON.stringify({
        jobCode:        objectToHash.jobCode,
        jobDescription: objectToHash.jobDescription
});
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
