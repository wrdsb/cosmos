import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GoogleGroupsMembershipsSHSMCalculateFunctionRequest, GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsSHSMCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsSHSMCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GroupMemberships',
        functionDataOperation: 'CalculateSHSM',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsMembershipsSHSMCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsSHSMCalculateFunctionRequestPayload;

    context.log(payload);

    const requestedSector = payload.sector.toLowerCase();
    const rows = context.bindings.studentsNow;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.outputBlob = calculatedMembers;

    const memberCounts = Object.getOwnPropertyNames(calculatedMembers).length;

    const logPayload = {
        requestedSector: requestedSector,
        memberCounts: memberCounts
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    async function calculateMembers(rows) {
        let members = {};

        rows.forEach(function(row) {
            let email = (row.student_email) ? row.student_email : false;
            let sector_raw = (row.student_shsm_sector) ? row.student_shsm_sector.toLowerCase() : false;
            let group_slug = null;

            if (sector_raw) {
                switch (sector_raw) {
                    case 'agriculture':
                        group_slug = 'agriculture';
                        break;
                    case 'arts and culture':
                        group_slug = 'arts';
                        break;
                    case 'business':
                        group_slug = 'business';
                        break;
                    case 'construction':
                        group_slug = 'construction';
                        break;
                    case 'environment':
                        group_slug = 'environment';
                        break;
                    case 'health and wellness':
                        group_slug = 'health';
                        break;
                    case 'hospitality and tourism':
                        group_slug = 'hospitality';
                        break;
                    case 'information and communications technology':
                        group_slug = 'communication';
                        break;
                    case 'manufacturing':
                        group_slug = 'manufacturing';
                        break;
                    case 'non-profit':
                        group_slug = 'non-profit';
                        break;
                    case 'sports':
                        group_slug = 'sports';
                        break;
                    case 'transportation':
                        group_slug = 'transportation';
                        break;
                    default:
                        break;
                }
            }

            if (email && (requestedSector === group_slug)) {
                members[email] = {
                    email:          email,
                    role:           "MEMBER",
                    status:         "ACTIVE",
                    type:           "USER",
                    groupKey:       `shsm-students-${group_slug}@wrdsb.ca`
                };
            }
        });
        return members;
    }
}

export default GroupMembershipsSHSMCalculate;