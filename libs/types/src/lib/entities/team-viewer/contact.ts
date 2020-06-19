/// <reference path="group-invitation.ts" />

namespace TeamViewer {
    export interface Contact {
        contact_id?: string;
        user_id?: string;
        name?: string;
        email?: string;
        groupid?: string;
        description?: string;
        online_state?: string;
        profilepicture_url?: string;
        supported_features?: string;
        invitations?: GroupInvitation[];
    }
}