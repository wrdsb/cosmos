import { ServerError } from "./serverError";

interface User {
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

interface Group {
    id?: string;
    name?: string;
    shared_with?: User[];
    owner?: User;
    permissions?: string;
    policy_id?: string;
}

interface Policy {
    policy_id?: string;
    name?: string;
    settings?: PolicySetting[];
}

interface PolicySetting {
    key?: string;
    value?: string;
    enforce?: boolean;
}

interface Contact {
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

interface GroupInvitation {
    groupId?: string;
    email?: string;
}

interface Device {
    device_id?: string;
    remotecontrol_id?: string;
    groupid?: string;
    alias?: string;
    description?: string;
    online_state?: string;
    supported_features?: string;
    assigned_to?: boolean;
    policy_id?: string;
    last_seen?: string;
}


interface UserQuery {
    email?: string;
    name?: string;
    permissions?: string[];
    full_list?: boolean
}

interface UsersListResponse {
    users: User[];
}

interface UserGetPayload {
    payload: string;
}

interface UserGetResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserCreatePayload {
    payload: User;
}

interface UserCreateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserUpdatePayload {
    payload: User
}

interface UserUpdateResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserDeletePayload {
    payload: string;
}

interface UserDeleteResponse {
    code: number;
    message: string;
    serverError?: ServerError;
    user?: User;
}

interface UserShare {
    userid: string;
    permissions: string;
}


interface GroupQuery {
    name?: string;
    shared?: boolean;
}

interface GroupsListResponse {
    groups: Group[];
}

interface GroupGetPayload {
    payload: string;
}

interface GroupUpdatePayload {
    payload: Group;
}

interface GroupDeletePayload {
    payload: string;
}


interface PolicyListResponse {
    policies: Policy[];
}


interface ContactsListResponse {
    contacts: Contact[];
}


interface DevicesListResponse {
    devices: Device[];
}

export {
    User,
    Group,
    Policy,
    Contact,
    Device,
    UserCreatePayload,
    UserCreateResponse,
    UserDeletePayload,
    UserGetPayload,
    UserUpdatePayload,
    GroupDeletePayload,
    GroupGetPayload,
    GroupUpdatePayload,
    UsersListResponse,
    GroupsListResponse,
    PolicyListResponse,
    ContactsListResponse,
    DevicesListResponse,
    UserShare,
    UserQuery,
    GroupQuery
}