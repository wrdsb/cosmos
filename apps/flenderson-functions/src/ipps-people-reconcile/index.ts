import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, IPPSPeopleReconcileFunctionRequest, IPPSPeopleReconcileFunctionRequestPayload, IPPSPerson, IPPSAssignment } from "@cosmos/types";

const ippsPeopleReconcile: AzureFunction = async function (context: Context, triggerMessage: IPPSPeopleReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPerson',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'people';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as IPPSPeopleReconcileFunctionRequest;
    const payload = triggerObject.payload as IPPSPeopleReconcileFunctionRequestPayload;

    // give our bindings more human-readable names
    const peopleNow = context.bindings.peopleNow;
    const directoryNow = context.bindings.directoryNow;

    // ensure we have a full data set
    const totalPeople = Object.getOwnPropertyNames(peopleNow).length;
    if (totalPeople < 5000) {
        context.done('Too few records. Aborting.');
    }

    const recordsNow = await materializePeople(peopleNow, directoryNow);

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    // object to store our total diff as we build it
    let calculation = {
        recordsPrevious: recordsPrevious,
        recordsNow: recordsNow,
        differences: {
            createdRecords: [],
            updatedRecords: [],
            deletedRecords: []
        }
    };

    calculation = await findCreatesAndUpdates(calculation);
    calculation = await findDeletes(calculation);

    const creates = await processCreates(calculation.differences.createdRecords);
    const updates = await processUpdates(calculation.differences.updatedRecords);
    const deletes = await processDeletes(calculation.differences.deletedRecords);

    const totalDifferences = creates.length + updates.length + deletes.length;

    context.bindings.queueStore = creates.concat(updates, deletes);

    const logPayload = {
        totalDifferences: totalDifferences
        //differences: calculation.differences
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function materializePeople(people, directory)
    {
        const materializedPeople = {};

        Object.getOwnPropertyNames(people).forEach(function (personID) {
            const personRecord = people[personID];
            const directoryRecord = directory[personRecord.email];

            const materializedPerson = {
                id:            personRecord.id,
                email:         personRecord.email,
                username:      personRecord.username,
                employeeID:    personRecord.ein,
                firstName:     personRecord.first_name,
                lastName:      personRecord.last_name,
                ein:           personRecord.ein,
                fullName:      `${personRecord.first_name} ${personRecord.last_name}`,
                sortableName:  `${personRecord.last_name}, ${personRecord.first_name}`,
                homeLocation:  personRecord.home_location,
                directory:     null,
                phone:         null,
                extension:     null,
                mbxnumber:     null
            } as IPPSPerson;

            personRecord.positions.forEach(function (position) {
                const assignment = position as IPPSAssignment;
                materializedPerson.assignments.push(assignment);
                materializedPerson.locationCodes.push(assignment.locationCode);
                materializedPerson.schoolCodes.push(assignment.schoolCode);
                materializedPerson.jobCodes.push(assignment.jobCode);
            });

            if (directoryRecord) {
                (directoryRecord.directory) ? materializedPerson.directory = directoryRecord.directory : materializedPerson.directory = '';
                (directoryRecord.phone_no) ? materializedPerson.phone = directoryRecord.phone_no : materializedPerson.phone = '';
                (directoryRecord.extension) ? materializedPerson.extension = directoryRecord.extension : materializedPerson.extension = '';
                (directoryRecord.mbxnumber) ? materializedPerson.mbxnumber = directoryRecord.mbxnumber : materializedPerson.mbxnumber = '';
            }
    
            materializedPeople[materializedPerson.id] = materializedPerson;
        });
        
        return materializedPeople;
    }

    async function findCreatesAndUpdates(calculation) {
        context.log('findCreatesAndUpdates');

        const recordsPrevious = calculation.recordsPrevious;
        const recordsNow = calculation.recordsNow;

        if (!recordsNow) {
            return calculation;
        }

        // loop through all records in recordsNow, looking for updates and creates
        Object.getOwnPropertyNames(recordsNow).forEach(function (recordID) {
            const newRecord = {
                id:             recordsNow[recordID].id,
                email:          recordsNow[recordID].email,
                username:       recordsNow[recordID].username,
                employeeID:     recordsNow[recordID].employeeID,
                staffNumber:    recordsNow[recordID].staffNumber,
                firstName:      recordsNow[recordID].firstName,
                lastName:       recordsNow[recordID].lastName,
                fullName:       recordsNow[recordID].fullName,
                sortableName:   recordsNow[recordID].sortableName,
                ein:            recordsNow[recordID].ein,
                locationCodes:  recordsNow[recordID].locationCodes,
                schoolCodes:    recordsNow[recordID].schoolCodes,
                jobCodes:       recordsNow[recordID].jobCodes,
                homeLocation:   recordsNow[recordID].homeLocation,
                directory:      recordsNow[recordID].directory,
                phone:          recordsNow[recordID].phone,
                extension:      recordsNow[recordID].extension,
                mbxnumber:      recordsNow[recordID].mbxnumber,
                assignments:    recordsNow[recordID].assignments

                // these fields are not present in the data from ipps, so we don't map them
                //createdAt
                //updatedAt
                //deletedAt
                //deleted
            } as IPPSPerson;
    
            if (!recordsPrevious || !recordsPrevious[recordID]) {
                calculation.differences.createdRecords.push(newRecord);
            } else {
                // get the corresponding record in recordsPrevious
                const oldRecord = {
                    id:             recordsPrevious[recordID].id,
                    email:          recordsPrevious[recordID].email,
                    username:       recordsPrevious[recordID].username,
                    employeeID:     recordsPrevious[recordID].employeeID,
                    staffNumber:    recordsPrevious[recordID].staffNumber,
                    firstName:      recordsPrevious[recordID].firstName,
                    lastName:       recordsPrevious[recordID].lastName,
                    fullName:       recordsPrevious[recordID].fullName,
                    sortableName:   recordsPrevious[recordID].sortableName,
                    ein:            recordsPrevious[recordID].ein,
                    locationCodes:  recordsPrevious[recordID].locationCodes,
                    schoolCodes:    recordsPrevious[recordID].schoolCodes,
                    jobCodes:       recordsPrevious[recordID].jobCodes,
                    homeLocation:   recordsPrevious[recordID].homeLocation,
                    directory:      recordsPrevious[recordID].directory,
                    phone:          recordsPrevious[recordID].phone,
                    extension:      recordsPrevious[recordID].extension,
                    mbxnumber:      recordsPrevious[recordID].mbxnumber,
                    assignments:    recordsPrevious[recordID].assignments
        
                    // these fields are not present in the data from ipps, so we don't map them
                    //createdAt
                    //updatedAt
                    //deletedAt
                    //deleted
                } as IPPSPerson; 
    
                // Re-calculate the change detection hashes locally,
                // because different functions may have different change detection standards
                const newRecordChangeDetectionHash = makeHash(newRecord);
                const oldRecordChangeDetectionHash = makeHash(oldRecord);

                // Compare old and new records
                const recordsEqual = (newRecordChangeDetectionHash === oldRecordChangeDetectionHash) ? true : false;
    
                // if record changed, record the change
                if (!recordsEqual) {
                    calculation.differences.updatedRecords.push({
                        previous: oldRecord,
                        now: newRecord
                    });
                }
            }
        });
        return calculation;
    }

    async function findDeletes(calculation) {
        context.log('findDeletes');

        const recordsPrevious = calculation.recordsPrevious;
        const recordsNow = calculation.recordsNow;

        if (!recordsPrevious) {
            return calculation;
        }

        // loop through all records in recordsPrevious, looking for deletes
        Object.getOwnPropertyNames(recordsPrevious).forEach(function (recordID) {
            if (!recordsNow || !recordsNow[recordID]) {
                calculation.differences.deletedRecords.push(recordsPrevious[recordID]);
            }
        });

        return calculation;
    }

    async function processCreates(createdRecords) {
        context.log('processCreates');

        // array for the results being returned
        const messages = [];

        createdRecords.forEach(function (record) {
            const message = {
                operation: "replace",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processUpdates(updatedRecords) {
        context.log('processUpdates');

        // array for the results being returned
        const messages = [];

        updatedRecords.forEach(function (record) {
            const message = {
                operation: "replace",
                payload: record.now
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDeletes(deletedRecords) {
        context.log('processDeletes');

        // array for the results being returned
        const messages = [];

        deletedRecords.forEach(function (record) {
            const message = {
                operation: "delete",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log('getCosmosItems');

        const recordsPrevious = {};

        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    const recordObject = {
                        id:             item.id,
                        email:          item.email,
                        username:       item.username,
                        employeeID:     item.employeeID,
                        staffNumber:    item.staffNumber,
                        firstName:      item.firstName,
                        lastName:       item.lastName,
                        fullName:       item.fullName,
                        sortableName:   item.sortableName,
                        ein:            item.ein,
                        locationCodes:  item.locationCodes,
                        schoolCodes:    item.schoolCodes,
                        jobCodes:       item.jobCodes,
                        homeLocation:   item.homeLocation,
                        directory:      item.directory,
                        phone:          item.phone,
                        extension:      item.extension,
                        mbxnumber:      item.mbxnumber,
                        assignments:    item.assignments
    
                        // these fields are not present in the data from ipps
                        //createdAt: item.createdAt,
                        //updatedAt: item.updatedAt,
                        //deletedAt: item.deletedAt,
                        //deleted: item.deleted
                    } as IPPSPerson;
        
                    recordsPrevious[item.id] = recordObject;
                }
            }
    
            return recordsPrevious;
        } catch (error) {
            context.log(error);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }

    function makeHash(objectToHash: IPPSPerson): string {
        const objectForHash = JSON.stringify({
            email:          objectToHash.email,
            username:       objectToHash.username,
            employeeID:     objectToHash.employeeID,
            staffNumber:    objectToHash.staffNumber,
            firstName:      objectToHash.firstName,
            lastName:       objectToHash.lastName,
            fullName:       objectToHash.fullName,
            sortableName:   objectToHash.sortableName,
            ein:            objectToHash.ein,
            locationCodes:  objectToHash.locationCodes,
            schoolCodes:    objectToHash.schoolCodes,
            jobCodes:       objectToHash.jobCodes,
            homeLocation:   objectToHash.homeLocation,
            directory:      objectToHash.directory,
            phone:          objectToHash.phone,
            extension:      objectToHash.extension,
            mbxnumber:      objectToHash.mbxnumber,
            assignments:    objectToHash.assignments
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default ippsPeopleReconcile;
