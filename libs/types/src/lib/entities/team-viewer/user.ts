namespace TeamViewer {
    export interface User {
        id?: string;
        sso_customer_id?: string;
        name?: string;
        email?: string;
        password?: string;
        permissions?: string;
        active?: boolean;
        custom_quicksupport_id?: string;
        custom_quickjoin_id?: string;
        last_access_date?: string;
        activated_license_id?: string;
        activated_license_name?: string;
        activated_subLicense_name?: string;
        language?: string;
    }
}
