import { WPUser } from "@cosmos/types";
import { createHash } from "crypto";

export function makeHashWPUser(objectToHash: WPUser): string {
    const objectForHash = JSON.stringify({
        site_url:                 objectToHash.site_url,
        site_domain:              objectToHash.site_domain,
        site_slug:                objectToHash.site_slug,
        site_link:                objectToHash.site_link,

        username:                 objectToHash.username,
        email:                    objectToHash.email,

        name:                     objectToHash.name,
        first_name:               objectToHash.first_name,
        last_name:                objectToHash.last_name,
        nickname:                 objectToHash.nickname,

        description:              objectToHash.description,
        link:                     objectToHash.link,
        slug:                     objectToHash.slug,
        url:                      objectToHash.url,

        locale:                   objectToHash.locale,
        registered_date:          objectToHash.registered_date,

        roles:                    objectToHash.roles,

        capabilities:             objectToHash.capabilities,
        extra_capabilities:       objectToHash.extra_capabilities,
        avatar_urls:              objectToHash.avatar_urls,
        meta:                     objectToHash.meta,

        ipps_activity_code:                 objectToHash.ipps_activity_code,
        ipps_employee_group_category:       objectToHash.ipps_employee_group_category,
        ipps_employee_group_code:           objectToHash.ipps_employee_group_code,
        ipps_employee_group_description:    objectToHash.ipps_employee_group_description,
        ipps_extension:                     objectToHash.ipps_extension,
        ipps_home_loc:                      objectToHash.ipps_home_loc,
        ipps_job_code:                      objectToHash.ipps_job_code,
        ipps_job_desc:                      objectToHash.ipps_job_desc,
        ipps_location_code:                 objectToHash.ipps_location_code,
        ipps_location_desc:                 objectToHash.ipps_location_desc,
        ipps_panel:                         objectToHash.ipps_panel,
        ipps_phone_no:                      objectToHash.ipps_phone_no,
        ipps_school_code:                   objectToHash.ipps_school_code,
        ipps_school_type:                   objectToHash.ipps_school_type,
        
        wrdsb_id_number:                    objectToHash.wrdsb_id_number,
        wrdsb_school:                       objectToHash.wrdsb_school,
        wrdsb_baksheesh:                    objectToHash.wrdsb_baksheesh,
        wrdsb_supervisor:                   objectToHash.wrdsb_supervisor,
        wrdsb_section:                      objectToHash.wrdsb_section,
        wrdsb_physical_location:            objectToHash.wrdsb_physical_location,
        wrdsb_voicemail:                    objectToHash.wrdsb_voicemail,
        wrdsb_job_title:                    objectToHash.wrdsb_job_title,
        wrdsb_display_in_staff_list:        objectToHash.wrdsb_display_in_staff_list,
        wrdsb_contact_options:              objectToHash.wrdsb_contact_options,
        wrdsb_website_url:                  objectToHash.wrdsb_website_url,
        wrdsb_phone_extension:              objectToHash.wrdsb_phone_extension,
        wrdsb_regular_hours:                objectToHash.wrdsb_regular_hours,
        wrdsb_is_in_today:                  objectToHash.wrdsb_is_in_today,
        wrdsb_is_available_now:             objectToHash.wrdsb_is_available_now,
    });
    const objectHash = createHash('md5').update(objectForHash).digest('hex');
    return objectHash;
}
