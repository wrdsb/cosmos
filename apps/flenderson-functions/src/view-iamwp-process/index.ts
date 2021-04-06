import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation } from "@cosmos/types";

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

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;
    let rowsProcessed = 0;
    let peopleProcessed = 0;

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
            sortable_name:  row.SURNAME + ', ' + row.FIRST_NAME,
            first_name:     row.FIRST_NAME,
            last_name:      row.SURNAME,
            email:          row.EMAIL_ADDRESS,
            home_location:  '',
            positions:      {}
        };

        // Create the Position object for this row
        const personPosition = {
            ein:                         row.EMPLOYEE_ID,
            position_id:                 row.POSITION_ID,
            activity_code:               row.ACTIVITY_CODE,
            employee_group_category:     row.EMP_GROUP_CATEGORY,
            employee_group_code:         row.EMP_GROUP_CODE,
            employee_group_description:  row.EMP_GROUP_DESC,
            extension:                   row.EXTENSION,
            job_code:                    row.JOB_CODE,
            job_description:             row.JOB_DESC,
            location_code:               row.LOCATION_CODE,
            location_description:        row.LOCATION_DESC,
            panel:                       row.PANEL,
            phone_no:                    row.PHONE_NO,
            school_code:                 row.SCHOOL_CODE,
            school_type:                 row.SCHOOL_TYPE,
            home_location_indicator:     row.HOME_LOC_IND,
            position_start_date:         row.POSITION_START_DATE,
            position_end_date:           row.POSITION_END_DATE
        };

        // Grab what will become our object identifiers
        const ein = personRecord.ein;
        const position_id = personPosition.position_id;

        // Upsert Person, and current Position, to people collection object
        if (peopleObject[ein]) {
            if (personPosition.home_location_indicator === 'Y') {peopleObject[ein].home_location = personPosition.location_code;}
            peopleObject[ein].positions[position_id] = personPosition;

        } else {
            if (personPosition.home_location_indicator === 'Y') {personRecord.home_location = personPosition.location_code;}
            personRecord.positions = {};
            personRecord.positions[position_id] = personPosition;
            peopleObject[ein] = personRecord;
        }

        // Add/overwrite jobs, groups, and locations from this row to their collection objects
        jobsObject[personPosition.job_code] = {
            id: personPosition.job_code,
            job_code: personPosition.job_code,
            job_description: personPosition.job_description,
        };
        groupsObject[personPosition.employee_group_code] = {
            id: personPosition.employee_group_code,
            employee_group_code: personPosition.employee_group_code,
            employee_group_category: personPosition.employee_group_category,
            employee_group_description: personPosition.employee_group_description,
        };
        locationsObject[personPosition.location_code] = {
            id: personPosition.location_code,
            location_code: personPosition.location_code,
            location_description: personPosition.location_description,
        };
    });

    // Add each person from peopleObject to peopleArray
    Object.getOwnPropertyNames(peopleObject).forEach(function (ein) {
        peopleProcessed++;
        const person = peopleObject[ein];
        const positions_array = [];
        Object.getOwnPropertyNames(person.positions).forEach(function (position) {
            positions_array.push(person.positions[position]);
        });
        person.positions = positions_array;
        peopleArray.push(person);
    });

    // Step through other collection objects and assign objects to their arrays
    Object.getOwnPropertyNames(jobsObject).forEach(function (job) {
        jobsArray.push(jobsObject[job]);
    });    
    Object.getOwnPropertyNames(groupsObject).forEach(function (group) {
        groupsArray.push(groupsObject[group]);
    });
    Object.getOwnPropertyNames(locationsObject).forEach(function (location) {
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
        people: peopleObject,
        jobs: jobsObject,
        groups: groupsObject,
        locations: locationsObject
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIAMWPProcess;