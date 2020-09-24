import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroup } from "@cosmos/types";

const groupsListsMaterialize: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GroupList',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const groups = context.bindings.groups as GoogleGroup[];

    let adminCreatedSlim = [];
    let automatedSlim = [];
    let allSlim = [];

    let adminCreatedFull = [];
    let automatedFull = [];
    let allFull = [];

    groups.forEach((group) => {
        let groupSlim = {
            id: group.id,

            email: group.email,
            name: group.name,
            description: group.description,

            business_owner: group.business_owner,
            businessOwner: group.businessOwner,
        
            adminCreated: group.adminCreated,
            membership_automation_active: group.membership_automation_active,
        
            owners: group.owners,
            managers: group.managers,
            
            staffOwned: group.staffOwned,
            studentOwned: group.studentOwned,
            
            staffManaged: group.staffManaged,
            studentManaged: group.studentManaged,
        
            staffMembership: group.staffMembership,
            studentMembership: group.studentMembership,
        
            isOpen: group.isOpen
        } as GoogleGroup;

        context.log(groupSlim);

        if (group.adminCreated) {
            adminCreatedSlim.push(groupSlim);
            adminCreatedFull.push(group);
        }

        if (group.membership_automation_active) {
            automatedSlim.push(groupSlim);
            automatedFull.push(group);
        }

        allSlim.push(groupSlim);
        allFull.push(group);
    });

    context.bindings.adminCreatedSlim = adminCreatedSlim;
    context.bindings.automatedSlim = automatedSlim;
    context.bindings.allSlim = allSlim;
    context.bindings.adminCreatedFull = adminCreatedFull;
    context.bindings.automatedFull = automatedFull;
    context.bindings.allFull = allFull;

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default groupsListsMaterialize;