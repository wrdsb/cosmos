import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType } from "@cosmos/types";

const viewIAMWPProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIAMWP',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'Flenderson.ViewIAMWP.Process';
    functionInvocation.jobType = jobType;
    
    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;
    let rowsProcessed = 0;
    let peopleProcessed = 0;
    let jobsProcessed = 0;
    let locationsProcessed = 0;
    let groupsProcessed = 0;

    const peopleObject = {};
    const peopleArray = [];
    const jobsObject = {};
    const jobsArray = [];
    const groupsObject = {};
    const groupsArray = [];
    const locationsObject = {};
    const locationsArray = [];

    rows.forEach(function(row) {
        // If we're missing an EIN or Position ID, bail
        if (!row.EMPLOYEE_ID || !row.POSITION_ID) {
            return;
        }

        rowsProcessed++;

        // Create the main part of a Person object
        const personRecord = {
            id:             row.EMPLOYEE_ID,
            ein:            row.EMPLOYEE_ID,
            username:       (row.USERNAME ? row.USERNAME.toLowerCase() : ''),
            name:           row.FIRST_NAME + ' ' + row.SURNAME,
            sortableName:   row.SURNAME + ', ' + row.FIRST_NAME,
            firstName:      row.FIRST_NAME,
            lastName:       row.SURNAME,
            email:          row.EMAIL_ADDRESS,
            homeLocation:  '',
            positions:      {}
        };

        // Create the Position object for this row
        const personPosition = {
            ein:                         row.EMPLOYEE_ID,
            positionID:                  row.POSITION_ID,
            activityCode:                row.ACTIVITY_CODE,
            employeeGroupCategory:       row.EMP_GROUP_CATEGORY,
            employeeGroupCode:           row.EMP_GROUP_CODE,
            employeeGroupDescription:    row.EMP_GROUP_DESC,
            extension:                   row.EXTENSION,
            jobCode:                     row.JOB_CODE,
            jobDescription:              row.JOB_DESC,
            locationCode:                row.LOCATION_CODE,
            locationDescription:         row.LOCATION_DESC,
            panel:                       row.PANEL,
            phone:                       row.PHONE_NO,
            schoolCode:                  row.SCHOOL_CODE,
            schoolType:                  row.SCHOOL_TYPE,
            homeLocationIndicator:       row.HOME_LOC_IND,
            positionStartDate:           row.POSITION_START_DATE,
            positionEndDate:             row.POSITION_END_DATE
        };

        // Grab what will become our object identifiers
        const ein = personRecord.ein;
        const positionID = personPosition.positionID;

        // Upsert Person, and current Position, to people collection object
        if (peopleObject[ein]) {
            if (personPosition.homeLocationIndicator === 'Y') {peopleObject[ein].homeLocation = personPosition.locationCode;}
            peopleObject[ein].positions[positionID] = personPosition;

        } else {
            if (personPosition.homeLocationIndicator === 'Y') {personRecord.homeLocation = personPosition.locationCode;}
            personRecord.positions = {};
            personRecord.positions[positionID] = personPosition;
            peopleObject[ein] = personRecord;
        }

        // Add/overwrite jobs, groups, and locations from this row to their collection objects
        jobsObject[personPosition.jobCode] = {
            id: personPosition.jobCode,
            jobCode: personPosition.jobCode,
            jobDescription: personPosition.jobDescription,
        };
        groupsObject[personPosition.employeeGroupCode] = {
            id: personPosition.employeeGroupCode,
            employeeGroupCode: personPosition.employeeGroupCode,
            employeeGroupCategory: personPosition.employeeGroupCategory,
            employeeGroupDescription: personPosition.employeeGroupDescription,
        };
        locationsObject[personPosition.locationCode] = {
            id: personPosition.locationCode,
            locationCode: personPosition.locationCode,
            locationDescription: personPosition.locationDescription,
            schoolCode: personPosition.schoolCode,
            schoolType: personPosition.schoolType,
            panel: personPosition.panel
        };
    });

    // Add each person from peopleObject to peopleArray
    Object.getOwnPropertyNames(peopleObject).forEach(function (ein) {
        peopleProcessed++;
        const person = peopleObject[ein];
        const positionsArray = [];
        Object.getOwnPropertyNames(person.positions).forEach(function (position) {
            positionsArray.push(person.positions[position]);
        });
        person.positions = positionsArray;
        peopleArray.push(person);
    });

    // Step through other collection objects and assign objects to their arrays
    Object.getOwnPropertyNames(jobsObject).forEach(function (job) {
        jobsProcessed++;
        jobsArray.push(jobsObject[job]);
    });    
    Object.getOwnPropertyNames(groupsObject).forEach(function (group) {
        groupsProcessed++;
        groupsArray.push(groupsObject[group]);
    });
    Object.getOwnPropertyNames(locationsObject).forEach(function (location) {
        locationsProcessed++;
        locationsArray.push(locationsObject[location]);
    });

    if (rowsProcessed < 5000 || peopleProcessed < 5000) {
        context.done('Too few records. Aborting.');
    }

    // Write out Flenderson's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(panamaBlob);
    context.bindings.viewRawHRIS = JSON.stringify(panamaBlob);

    // Write out arrays and objects to blobs
    context.bindings.peopleNowArray = JSON.stringify(peopleArray);
    context.bindings.peopleNowObject = JSON.stringify(peopleObject);
    context.bindings.peopleNowObjectHRIS = JSON.stringify(peopleObject);

    context.bindings.jobsNowArray = JSON.stringify(jobsArray);
    context.bindings.jobsNowObject = JSON.stringify(jobsObject);

    context.bindings.groupsNowArray = JSON.stringify(groupsArray);
    context.bindings.groupsNowObject = JSON.stringify(groupsObject);

    context.bindings.locationsNowArray = JSON.stringify(locationsArray);
    context.bindings.locationsNowObject = JSON.stringify(locationsObject);

    const statusCode = '200';
    const statusMessage = 'Success: Processed view iamwp.';

    const logPayload = {
        jobType: jobType,
        status: statusCode,
        statusMessage: statusMessage,
        rowsProcessed: rowsProcessed,
        peopleProcessed: peopleProcessed,
        jobsProcessed: jobsProcessed,
        locationsProcessed: locationsProcessed,
        groupsProcessed: groupsProcessed
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIAMWPProcess;