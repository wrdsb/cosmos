interface DataChangeEvent {
    id: string;
    time: string;

    source: string;
    type: string;
    subject: string;

    dataschema: string;
    data: object;

    specversion: string;
    datacontenttype: string;
}
