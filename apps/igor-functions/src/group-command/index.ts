import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const groupCommand: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Command',
        eventLabel: ''
    };

    const request = req;
    const operation = request.body.operation;
    const payload = request.body.payload;

    let result;

    switch (operation) {
        case 'create':
            result = queueCreate(payload);
            context.log(result);
            break;
        case 'delete':
            result = queueDelete(payload);
            context.log(result);
            break;
        case 'get':
            result = queueGet(payload);
            context.log(result);
            break;

        case 'list':
            result = queueList(payload);
            context.log(result);
            break;
        case 'patch':
            result = queuePatch(payload);
            context.log(result);
            break;
        case 'replace':
            result = queueReplace(payload);
            context.log(result);
            break;
        default:
            break;
    }

    functionInvocation['logPayload'] = result;

    context.bindings.invocationPostProcessor = functionInvocation;

    
    function queueCreate(payload) {
        const queueName = 'group-create';
        const queueMessage = {payload: "group-create"};

        let status = {
            code: 202,
            statusMessage: 'Success: Group created.'
        }

        context.bindings.groupCreate = queueMessage;
        return queueMessage;
    }

    function queueDelete(payload) {
        const queueName = 'group-delete';
        const queueMessage = 'group-delete';

        let status = {
            code: 202,
            statusMessage: 'Success: Group deleted.'
        }

        context.bindings.groupDelete = queueMessage;
        return queueMessage;
    }

    function queueGet(payload) {
        const queueName = 'group-get';
        const queueMessage = 'group-get';

        let status = {
            code: 202,
            statusMessage: 'Success: Got group.'
        }

        context.bindings.groupGet = queueMessage;
        return queueMessage;
    }

    function queueMembershipsABCCalculate(payload) {
        const queueName = 'group-memberships-abc-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-abc-calculate.'
        }

        context.bindings.groupMembershipsABCCalculate = queueMessage;
        return queueMessage;
    }

    function queueMembershipsABCCalculateAll(payload) {
        const queueName = 'group-memberships-abc-calculate-all';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-abc-calculate-all.'
        }

        context.bindings.groupMembershipsABCCalculateAll = queueMessage;
        return queueMessage;
    }

    function queueMembershipsALLStaffCalculate(payload) {
        const queueName = 'group-memberships-all-staff-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-all-staff-calculate.'
        }

        context.bindings.groupMembershipsALLStaffCalculate = queueMessage;
        return queueMessage;
    }

    function queueMembershipsOneOffsCalculate(payload) {
        const queueName = 'group-memberships-one-offs-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-one-offs-calculate.'
        }

        context.bindings.groupMembershipsOneOffsCalculate = queueMessage;
        return queueMessage;
    }

    function queueMembershipsRolesCalculate(payload) {
        const queueName = 'group-memberships-roles-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-roles-calculate.'
        }

        context.bindings.groupMembershipsRolesCalculate = queueMessage;
        return queueMessage;
    }

    function queueMembershipsStudentsCalculate(payload) {
        const queueName = 'group-memberships-students-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-students-calculate.'
        }

        context.bindings.groupMembershipsStudentsCalculate = queueMessage;
        return queueMessage;
    }

    function queueMembershipsStudentsCalculateAll(payload) {
        const queueName = 'group-memberships-students-calculate-all';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-students-calculate-all.'
        }

        context.bindings.groupMembershipsStudentsCalculateAll = queueMessage;
        return queueMessage;
    }

    function queueMembershipsUnionsCalculate(payload) {
        const queueName = 'group-memberships-unions-calculate';
        const queueMessage = {};

        let status = {
            code: 202,
            statusMessage: 'Success: Queued group-memberships-unions-calculate.'
        }

        context.bindings.groupMembershipsUnionsCalculate = queueMessage;
        return queueMessage;
    }
  
    function queueStore(payload) {
        const queueName = 'group-store';
        const queueMessage = 'group-get';

        let status = {
            code: 202,
            statusMessage: 'Success: Got group.'
        }

        context.bindings.groupStore = queueMessage;
        return queueMessage;
    }

    function queueCreateBulk(payload) {
        const queueName = 'groups-create-bulk';
        const queueMessage = 'groups-create-bulk';

        let status = {
            code: 202,
            statusMessage: 'Success: Queued groups-create-bulk.'
        }

        context.bindings.groupsCreateBulk = queueMessage;
        return queueMessage;
    }

    function queueGetAll(payload) {
        const queueName = 'groups-get-all';
        const queueMessage = 'groups-get-all';

        let status = {
            code: 202,
            statusMessage: 'Success: Queued groups-get-all.'
        }

        context.bindings.groupsGetAll = queueMessage;
        return queueMessage;
    }

    function queueList(payload) {
        const queueName = 'groups-list';
        const queueMessage = 'groups-list';

        let status = {
            code: 202,
            statusMessage: 'Success: Listed groups.'
        }

        context.bindings.groupsList = queueMessage;
        return queueMessage;
    }

    function queueListParse(payload) {
        const queueName = 'groups-list-parse';
        const queueMessage = 'groups-list-parse';

        let status = {
            code: 202,
            statusMessage: 'Success: Queued groups-list-parse.'
        }

        context.bindings.groupsListParse = queueMessage;
        return queueMessage;
    }

    function queueReconcile(payload) {
        const queueName = 'groups-reconcile';
        const queueMessage = 'groups-reconcile';

        let status = {
            code: 202,
            statusMessage: 'Success: Queued groups-reconcile.'
        }

        context.bindings.groupsReconcile = queueMessage;
        return queueMessage;
    }
  
    function queuePatch(payload) {
        const queueName = 'group-update';
        const queueMessage = 'group-update';

        let status = {
            code: 202,
            statusMessage: 'Success: Group patched.'
        }

        context.bindings.groupUpdate = queueMessage;
        return queueMessage;
    }

    function queueReplace(payload) {
        const queueName = 'group-update';
        const queueMessage = 'group-update';

        let status = {
            code: 202,
            statusMessage: 'Success: Group replaced.'
        }

        context.bindings.groupUpdate = queueMessage;
        return queueMessage;
    }

};

export default groupCommand;