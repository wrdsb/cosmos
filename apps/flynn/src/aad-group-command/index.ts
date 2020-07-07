const aadGroupCommand = async function (req: any): Promise<void> {
    const request = req;

    const operation = request.body.operation;
    const payload = request.body.payload;

    let result;

    switch (operation) {
        case 'get':
            result = queueGet(payload);
            break;
        default:
            break;
    }

    const logPayload = result;

    function queueGet(payload) {
        const queueName = 'aad-group-get';
        const queueMessage = 'aad-group-get';

        let status = {
            code: 202,
            statusMessage: 'Success: Got group.'
        }

        return queueMessage;
    }
};

export { aadGroupCommand };