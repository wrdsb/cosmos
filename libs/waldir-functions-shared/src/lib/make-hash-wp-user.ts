import { WPUser } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashWPUser(objectToHash: WPUser): string {
    const objectForHash = JSON.stringify({
        siteURL:                  objectToHash.siteURL,
        siteDomain:               objectToHash.siteDomain,
        siteSlug:                 objectToHash.siteSlug,

        email:                    objectToHash.email,
        username:                 objectToHash.username,

        name:                     objectToHash.name,
        firstName:                objectToHash.firstName,
        lastName:                 objectToHash.lastName,
        nickname:                 objectToHash.nickname,

        description:              objectToHash.description,
        link:                     objectToHash.link,
        slug:                     objectToHash.slug,
        url:                      objectToHash.url,

        locale:                   objectToHash.locale,
        registeredDate:           objectToHash.registeredDate,

        // password:              objectToHash.password,

        roles:                    objectToHash.roles,

        capabilities:             objectToHash.capabilities,
        extraCapabilities:        objectToHash.extraCapabilities,
        avatarURLs:               objectToHash.avatarURLs,
        meta:                     objectToHash.meta,
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
