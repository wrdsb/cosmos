class FlendersonEvent {
    id: string;
    time: string;

    type: string;
    source: string;
    schemaURL: string;

    label: string;
    tags: string[];

    data: {
        function_name: string,
        invocation_id: string,
        result: {
            payload: {}
        },
    };

    eventTypeVersion: string;
    specversion: string;
    contentType: string;

    constructor(message: string) {
        this.id = message;
    }
}
