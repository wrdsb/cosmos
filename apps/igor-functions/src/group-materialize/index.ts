import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupMaterializeFunctionRequest, GoogleGroupMaterializeFunctionRequestPayload, GoogleGroupMembership, GoogleGroup } from "@cosmos/types";

const groupMaterialize: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupMaterializeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupMaterializeFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupMaterializeFunctionRequestPayload;

    const oldRecord = context.bindings.groupRecord;
    const groupMemberships = context.bindings.groupMemberships.actual;

    let owners = [];
    let managers = [];
    let members = [];

    let staffOwned = false;
    let studentOwned = false;
    let staffManaged = false;
    let studentManaged = false;
    let staffMembership = false;
    let studentMembership = false;
   
    const memberships = Object.getOwnPropertyNames(groupMemberships);

    if (memberships.length > 0) {
        memberships.forEach(function (email) {
            if (groupMemberships[email].role === "OWNER") {
                owners.push(email);
                if (/\d/.test(email)) {
                    studentOwned = true;
                } else {
                    staffOwned = true;
                }
            }
            if (groupMemberships[email].role === "MANAGER") {
                managers.push(email);
                if (/\d/.test(email)) {
                    studentManaged = true;
                } else {
                    staffManaged = true;
                }
            }
            if (groupMemberships[email].role === "MEMBER") {
                members.push(email);
                if (/\d/.test(email)) {
                    studentMembership = true;
                } else {
                    staffMembership = true;
                }
            }
        });
    }

    let cosmosRecord = {
        owners: owners,
        managers: managers,
        staffOwned: staffOwned,
        studentOwned: studentOwned,
        staffManaged: staffManaged,
        studentManaged: studentManaged,
        staffMembership: staffMembership,
        studentMembership: studentMembership
    };
    cosmosRecord = Object.assign(cosmosRecord, oldRecord);

    const storeMessage = {
        operation: 'patch',
        payload: cosmosRecord
    }
    context.bindings.materializedGroupRecord = storeMessage;

    let blobRecord = {
        members: members    
    }
    blobRecord = Object.assign(blobRecord, cosmosRecord);

    context.bindings.materializedGroupBlob = blobRecord;

    const logPayload = cosmosRecord;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default groupMaterialize;