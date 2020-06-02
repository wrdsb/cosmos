import * as flenderson from "./types";

class Person implements flenderson.IPPSPerson {
    id: string;
    ein: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    name: string;
    sortable_name: string;
    directory: string;
    phone: string;
    extension: string;
    mbxnumber: string;

    positions: Array<flenderson.IPPSPostition>

    created_at: string;
    updated_at: string;
    deleted_at: string;
    deleted: boolean;
}

export { Person };
