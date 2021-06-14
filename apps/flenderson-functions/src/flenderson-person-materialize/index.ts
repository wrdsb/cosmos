import { AzureFunction, Context } from "@azure/functions";
import { FlendersonJobType, FunctionInvocation, FlendersonPersonMaterializeFunctionRequest, FlendersonPersonMaterializeFunctionRequestPayload } from "@cosmos/types";
import { FlendersonPerson, FlendersonPosition, IPPSDirectory, IPPSPal, IPPSPerson } from "@cosmos/types";

const flendersonPersonMaterialize: AzureFunction = async function (context: Context, triggerMessage: FlendersonPersonMaterializeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPerson',
        functionDataOperation: 'Materialize',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPerson.Materialize';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as FlendersonPersonMaterializeFunctionRequest;
    const payload = triggerObject.payload as FlendersonPersonMaterializeFunctionRequestPayload;
    const email = payload.email;
    const employeeID = payload.employeeID;

    // give our bindings more human-readable names
    const directoryRecord = context.bindings.directoryRecord as IPPSDirectory;
    const palRecord = context.bindings.palRecord as IPPSPal;
    const personRecord = context.bindings.personRecord as IPPSPerson;
    const positionsRecords = context.bindings.positionsRecords as FlendersonPosition[];

    const materializedPerson = await materializePerson(directoryRecord, palRecord, personRecord, positionsRecords);

    context.bindings.queueStore = materializedPerson;

    const logPayload = materializedPerson;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function materializePerson(directory: IPPSDirectory, pal: IPPSPal, person: IPPSPerson, positions: FlendersonPosition[]) {
        const materializedPerson = {
            id:                        person.id,

            email:                     person.email,
            username:                  pal.username,
            employeeID:                person.employeeID,

            activityCode:              person.status,

            firstName:                 person.firstName,
            lastName:                  person.lastName,
            fullName:                  `${person.firstName} ${person.lastName}`,
            sortableName:              `${person.lastName}, ${person.firstName}`,

            ein:                       person.employeeID,

            locationCodes:             [],
            schoolCodes:               [],
            jobCodes:                  [],
            employeeGroupCodes:        [],

            homeLocation:              null,
            directory:                 null,
            phone:                     null,
            extension:                 null,
            mbxnumber:                 null,

            numberOfPositions:         0,
            numberOfActivePositions:   0,
            positions:             []
        } as FlendersonPerson;

        const locationCodes = new Set<string>();
        const schoolCodes = new Set<string>();
        const jobCodes = new Set<string>();
        const employeeGroupCodes = new Set<string>();

        positions.forEach(function (flendersonPosition: FlendersonPosition) {
            materializedPerson.positions.push(flendersonPosition);

            if (flendersonPosition.isHomeLocation === 'Y') {
                materializedPerson.homeLocation = flendersonPosition.locationCode;
            };

            locationCodes.add(flendersonPosition.locationCode);
            schoolCodes.add(flendersonPosition.schoolCode);
            jobCodes.add(flendersonPosition.jobCode);
            employeeGroupCodes.add(flendersonPosition.employeeGroupCode);

            materializedPerson.numberOfPositions = materializedPerson.numberOfPositions + 1;
        });

        materializedPerson.locationCodes = Array.from(locationCodes);
        materializedPerson.schoolCodes = Array.from(schoolCodes);
        materializedPerson.jobCodes = Array.from(jobCodes);
        materializedPerson.employeeGroupCodes = Array.from(employeeGroupCodes);

        materializedPerson.numberOfActivePositions = (materializedPerson.activityCode === 'ACTIVE') ? materializedPerson.numberOfPositions : 0;

        if (directory) {
            (directory.directory) ? materializedPerson.directory = directory.directory : materializedPerson.directory = '';
            (directory.phone) ? materializedPerson.phone = directory.phone : materializedPerson.phone = '';
            (directory.extension) ? materializedPerson.extension = directory.extension : materializedPerson.extension = '';
            (directory.mbxnumber) ? materializedPerson.mbxnumber = directory.mbxnumber : materializedPerson.mbxnumber = '';
        }
    
        return materializedPerson;
    }
};

export default flendersonPersonMaterialize;
