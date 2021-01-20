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
        case 'Panama.View.AssetChecksum.Extract':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.AssetChecksum.Copy",
                incomingBlob: "incomingChecksum.json",
                outgoingBlob: "nowChecksum.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy",
                incomingBlob: "incoming.json",
                outgoingBlob: "now.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract50k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy50k",
                incomingBlob: "incoming50.json",
                outgoingBlob: "now50.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract100k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy100k",
                incomingBlob: "incoming100.json",
                outgoingBlob: "now100.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract150k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy150k",
                incomingBlob: "incoming150.json",
                outgoingBlob: "now150.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract200k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy200k",
                incomingBlob: "incoming200.json",
                outgoingBlob: "now200.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract250k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy250k",
                incomingBlob: "incoming250.json",
                outgoingBlob: "now250.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract300k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy300k",
                incomingBlob: "incoming300.json",
                outgoingBlob: "now300.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.Asset.Extract350k':
            queueTriggered = 'view-asset-copy';
            queueMessage = JSON.stringify({
                jobType: "Panama.View.Asset.Copy350k",
                incomingBlob: "incoming350.json",
                outgoingBlob: "now350.json"
            });
            context.bindings.triggerViewAssetCopy = queueMessage;
            break;
        case 'Panama.View.AssetClass.Extract':
            queueTriggered = 'view-asset-class-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.AssetClass.Copy"});
            context.bindings.triggerViewAssetClassCopy = queueMessage;
            break;
        case 'Panama.View.AssetClassType.Extract':
            queueTriggered = 'view-asset-class-type-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.AssetClassType.Copy"});
            context.bindings.triggerViewAssetClassTypeCopy = queueMessage;
            break;
        case 'Panama.View.AssetType.Extract':
            queueTriggered = 'view-asset-type-copy';
            queueMessage = JSON.stringify({"job_type": "Panama.View.AssetType.Copy"});
            context.bindings.triggerViewAssetTypeCopy = queueMessage;
            break;
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
