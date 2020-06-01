class SISSchool
{
    private _id: string;
    private _mident: string;
    private _alphaCode: string;

    private _full_name: string;
    private _abbreviated_name: string;

    private _street_address: string;
    private _city: string;
    private _province: string;
    private _postal_code: string;

    private _map_url: string;

    private _website: string;

    private _phone: string;
    private _fax: string;

    private _principal: string;
    private _vice_principals: string[];
    private _computer_contact: string;

    private _public_calendar_id: string;
    private _staff_calendar_id: string;

    private _school_type: string;
    private _categories: string[];
    private _tags: string[];

    private _is_active: boolean;

    private _createdAt: string;
    private _updatedAt: string;
    private _deletedAt: string;
    private _deleted: boolean;

    public constructor(timestamp: string, alphaCode: string)
    {
        this.setID();

        this._alphaCode = alphaCode;

        this._createdAt = timestamp;
        this._updatedAt = timestamp;
        this._deletedAt = null;
        this._deleted   = false;
    }

    private setID()
    {
        this._id = '';
    }

    get id(): string
    {
        return this._id;
    }

    // Alias for alphaCode
    get schoolCode(): string
    {
        return this._alphaCode;
    }

    get createdAt(): string
    {
        return this._createdAt;
    }

    get updatedAt(): string
    {
        return this._updatedAt;
    }

    get deletedAt(): string
    {
        return this._deletedAt;
    }

    get deleted(): boolean
    {
        return this._deleted;
    }

    public toJSON(): string
    {
        let jsonObject = {
            id: this._id,
            mident: this._mident,
            alphaCode: this._alphaCode,
            full_name: this._full_name,
            abbreviated_name: this._abbreviated_name,
            street_address: this._street_address,
            city: this._city,
            province: this._province,
            postal_code: this._postal_code,
            map_url: this._map_url,
            website: this._website,
            phone: this._phone,
            fax: this._fax,
            principal: this._principal,
            vice_principals: this._vice_principals,
            computer_contact: this._computer_contact,
            public_calendar_id: this._public_calendar_id,
            staff_calendar_id: this._staff_calendar_id,
            school_type: this._school_type,
            categories: this._categories,
            tags: this._tags,
            is_active: this._is_active,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
            deletedAt: this._deletedAt,
            deleted: this._deleted
        }

        return JSON.stringify(jsonObject);
    }
}
