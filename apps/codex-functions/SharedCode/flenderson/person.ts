import * as flenderson from "./types";

class Person implements flenderson.IPPSPerson {
    id: string;
    ein: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    name: string;
    sortableName: string;
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
