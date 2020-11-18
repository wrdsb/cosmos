import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const eventListener: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'Event',
        functionDataOperation: 'Listen',
        eventLabel: ''
    } as FunctionInvocation;

    const event = req.body.event;

    let queueTriggered = '';
    let queueMessage = '';

    switch (event) {
        case 'Panama.View.GClassroom.Extract':
            queueTriggered = 'view-gclassroom-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.GClassroom.Copy"});
            context.bindings.triggerViewGClassroomCopy = queueMessage;
            break;
        case 'Panama.View.IAMWP.Extract':
            queueTriggered = 'view-iamwp-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.IAMWP.Copy"});
            context.bindings.triggerViewIAMWPCopy = queueMessage;
            break;
        case 'Panama.View.SkinnerAssignments.Extract':
            queueTriggered = 'view-skinnerassignments-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.SkinnerAssignments.Copy"});
            context.bindings.triggerViewSkinnerAssignmentsCopy = queueMessage;
            break;
        case 'Panama.View.SkinnerStaff.Extract':
            queueTriggered = 'view-skinnerstaff-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.SkinnerStaff.Copy"});
            context.bindings.triggerViewSkinnerStaffCopy = queueMessage;
            break;
        case 'Panama.View.StaffDir.Extract':
            queueTriggered = 'view-staffdir-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.StaffDir.Copy"});
            context.bindings.triggerViewStaffDirCopy = queueMessage;
            break;
        default:
            break;
    }

    const statusCode = '200';
    const statusMessage = `Sent ${queueMessage} to ${queueTriggered}`;

    const logPayload = {
        status: statusCode,
        message: statusMessage,
        queueMessage: queueMessage,
        queueTriggered: queueTriggered
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default eventListener;
