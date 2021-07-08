import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, ViewAllProcessFunctionRequest } from "@cosmos/types";

const viewAllProcess: AzureFunction = async function (context: Context, triggerMessage: ViewAllProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewAll',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.View.All.Process';
    functionInvocation.jobType = jobType;

    // we don't need to look at the incoming message
    // const recordsNow = context.bindings.recordsNow;

    const viewIppsJobsProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsJobsProcess = viewIppsJobsProcessMessage;

    const viewIppsGroupsProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsGroupsProcess = viewIppsGroupsProcessMessage;

    const viewIppsLocationsProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsLocationsProcess = viewIppsLocationsProcessMessage;

    const viewIppsPalProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsPalProcess = viewIppsPalProcessMessage;

    const viewIppsPeopleProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsPeopleProcess = viewIppsPeopleProcessMessage;

    const viewIppsPositionsProcessMessage = {
        payload: ""
    };
    context.bindings.viewIppsPositionsProcess = viewIppsPositionsProcessMessage;

    const viewStaffdirProcessMessage = {
        payload: ""
    };
    context.bindings.viewStaffdirProcess = viewStaffdirProcessMessage;

    const logPayload = {
        viewIppsJobsProcessMessage: viewIppsJobsProcessMessage,
        viewIppsGroupsProcessMessage: viewIppsGroupsProcessMessage,
        viewIppsLocationsProcessMessage: viewIppsLocationsProcessMessage,
        viewIppsPalProcessMessage: viewIppsPalProcessMessage,
        viewIppsPeopleProcessMessage: viewIppsPeopleProcessMessage,
        viewIppsPositionsProcessMessage: viewIppsPositionsProcessMessage,
        viewStaffdirProcessMessage: viewStaffdirProcessMessage,
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default viewAllProcess;


