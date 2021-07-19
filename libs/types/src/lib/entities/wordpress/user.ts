import { CosmosCoreFields } from "@cosmos/types";

interface WPUser extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;
    changeDetectionHash?: string;

    site_url?: string;
    site_domain?: string;
    site_slug?: string;
    site_link?: string;

    username?: string;
    email?: string;

    name?: string;
    first_name?: string;
    last_name?: string;
    nickname?: string;

    description?: string;
    link?: string;
    slug?: string;
    url?: string;

    locale?: string;
    registered_date?: string;

    roles?: string[];

    capabilities?: WPCapabilities;
    extra_capabilities?: WPExtraCapabilities;
    avatar_urls?: any;
    meta?: any[];

    ipps_activity_code?: string[];
    ipps_employee_group_category?: string[];
    ipps_employee_group_code?: string[];
    ipps_employee_group_description?: string[];
    ipps_extension?: string[];
    ipps_home_loc?: string[];
    ipps_job_code?: string[];
    ipps_job_desc?: string[];
    ipps_location_code?: string[];
    ipps_location_desc?: string[];
    ipps_panel?: string[];
    ipps_phone_no?: string[];
    ipps_school_code?: string[];
    ipps_school_type?: string[];
    wrdsb_id_number?: string[];
    wrdsb_school?: string[];
    wrdsb_baksheesh?: string[];
    wrdsb_supervisor?: string[];
    wrdsb_section?: string[];
    wrdsb_physical_location?: boolean;
    wrdsb_voicemail?: string;
    wrdsb_job_title?: string;
    wrdsb_display_in_staff_list?: string;
    wrdsb_contact_options?: string;
    wrdsb_website_url?: string;
    wrdsb_phone_extension?: false;
    wrdsb_regular_hours?: false;
    wrdsb_is_in_today?: false;
    wrdsb_is_available_now?: false;
}

export { WPUser };

interface WPCapabilities {
    switch_themes?: boolean,
    edit_themes?: boolean,
    activate_plugins?: boolean,
    edit_plugins?: boolean,
    edit_users?: boolean,
    edit_files?: boolean,
    manage_options?: boolean,
    moderate_comments?: boolean,
    manage_categories?: boolean,
    manage_links?: boolean,
    upload_files?: boolean,
    import?: boolean,
    unfiltered_html?: boolean,
    edit_posts?: boolean,
    edit_others_posts?: boolean,
    edit_published_posts?: boolean,
    publish_posts?: boolean,
    edit_pages?: boolean,
    read?: boolean,
    level_10?: boolean,
    level_9?: boolean,
    level_8?: boolean,
    level_7?: boolean,
    level_6?: boolean,
    level_5?: boolean,
    level_4?: boolean,
    level_3?: boolean,
    level_2?: boolean,
    level_1?: boolean,
    level_0?: boolean,
    edit_others_pages?: boolean,
    edit_published_pages?: boolean,
    publish_pages?: boolean,
    delete_pages?: boolean,
    delete_others_pages?: boolean,
    delete_published_pages?: boolean,
    delete_posts?: boolean,
    delete_others_posts?: boolean,
    delete_published_posts?: boolean,
    delete_private_posts?: boolean,
    edit_private_posts?: boolean,
    read_private_posts?: boolean,
    delete_private_pages?: boolean,
    edit_private_pages?: boolean,
    read_private_pages?: boolean,
    delete_users?: boolean,
    create_users?: boolean,
    unfiltered_upload?: boolean,
    edit_dashboard?: boolean,
    update_plugins?: boolean,
    delete_plugins?: boolean,
    install_plugins?: boolean,
    update_themes?: boolean,
    install_themes?: boolean,
    update_core?: boolean,
    list_users?: boolean,
    remove_users?: boolean,
    promote_users?: boolean,
    edit_theme_options?: boolean,
    delete_themes?: boolean,
    export?: boolean,
    frm_view_entries?: boolean,
    frm_create_entries?: boolean,
    frm_edit_entries?: boolean,
    frm_delete_entries?: boolean,
    frm_view_reports?: boolean,
    frm_edit_displays?: boolean,
    read_ai1ec_event?: boolean,
    edit_ai1ec_event?: boolean,
    edit_ai1ec_events?: boolean,
    edit_others_ai1ec_events?: boolean,
    edit_private_ai1ec_events?: boolean,
    edit_published_ai1ec_events?: boolean,
    delete_ai1ec_event?: boolean,
    delete_ai1ec_events?: boolean,
    delete_others_ai1ec_events?: boolean,
    delete_published_ai1ec_events?: boolean,
    delete_private_ai1ec_events?: boolean,
    publish_ai1ec_events?: boolean,
    read_private_ai1ec_events?: boolean,
    manage_events_categories?: boolean,
    manage_ai1ec_feeds?: boolean,
    switch_ai1ec_themes?: boolean,
    manage_ai1ec_options?: boolean,
    administrator?: boolean,
}

interface WPExtraCapabilities {
    administrator?: boolean
}
