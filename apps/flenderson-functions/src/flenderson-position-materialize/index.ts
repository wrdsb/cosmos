import { AzureFunction, Context } from "@azure/functions";
import { FlendersonJobType, FunctionInvocation, FlendersonPositionMaterializeFunctionRequest, FlendersonPositionMaterializeFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPosition, IPPSPosition, IPPSEmployeeGroup, IPPSJob, IPPSLocation } from "@cosmos/types";

const flendersonPositionMaterialize: AzureFunction = async function (context: Context, triggerMessage: FlendersonPositionMaterializeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPosition',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPosition.Materialize';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as FlendersonPositionMaterializeFunctionRequest;
    const payload = triggerObject.payload as FlendersonPositionMaterializeFunctionRequestPayload;
    const ippsPosition = payload.ippsPosition;

    // give our bindings more human-readable names
    const positionRecord = context.bindings.positionRecord as IPPSPosition;
    const employeeGroupRecord = context.bindings.employeeGroupRecord as IPPSEmployeeGroup;
    const jobRecord = context.bindings.jobRecord as IPPSJob;
    const locationRecord = context.bindings.locationRecord as IPPSLocation;

    const materializedPosition = await materializePosition(positionRecord, employeeGroupRecord, jobRecord, locationRecord);

    context.bindings.queueStore = {
        operation: "replace",
        payload: materializedPosition
    };

    const logPayload = materializedPosition;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);


    async function materializePosition(position: IPPSPosition, employeeGroup: IPPSEmployeeGroup, job: IPPSJob, location: IPPSLocation) {
        const materializedPosition = {
            createdAt:                 position.createdAt ?? null,
            updatedAt:                 position.updatedAt ?? null,
            deletedAt:                 position.deletedAt ?? null,
            deleted:                   position.deleted ?? false,

            createdBy:                 position.createdBy ?? null,
            updatedBy:                 position.updatedBy ?? null,
            deletedBy:                 position.deletedBy ?? null,

            id:                        position.id ?? `${position.employeeID}-${position.positionID}`,

            positionID:                position.positionID,
            employeeID:                position.employeeID,
        
            employeeGroupCode:         position.employeeGroupCode,
            employeeGroupCategory:     employeeGroup.employeeGroupCategory,
            employeeGroupDescription:  employeeGroup.employeeGroupDescription,
            employeeGroupAbbreviation: employeeGroup.employeeGroupAbbreviation,
        
            jobCode:                   position.jobCode,
            jobDescription:            job.jobDescription,
            jobAbbreviation:           job.jobAbbreviation,
        
            locationCode:              position.locationCode,
            LocationType:              location.locationType,
            locationDescription:       location.locationDescription,
            locationAbbreviation:      location.locationAbbreviation,
            schoolCode:                location.schoolCode,
            panel:                     location.panel,
        
            establishmentCode:         position.establishmentCode,
        
            isHomeLocation:            position.isHomeLocation,
        
            positionStartDate:         position.positionStartDate,
            positionEndDate:           position.positionEndDate
        } as FlendersonPosition;

        return materializedPosition;
    }
};

export default flendersonPositionMaterialize;
