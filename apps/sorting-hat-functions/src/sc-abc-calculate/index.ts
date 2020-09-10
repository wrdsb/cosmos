import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const SCABCCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.SortingHat.SC.ABC.Calculate';
    const functionEventID = `sorting-hat-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-sc-abc-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "sorting-hat", 
    ];

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toUpperCase();
    const classes = context.bindings.classesNow;
    const people = context.bindings.peopleNow;

    let materializedMembersObject = {};
    let materializedMembersArray = [];

    let calculatedMembers = await calculateMembers(classes);
    materializedMembersObject = await materializeMembers(calculatedMembers);

    Object.getOwnPropertyNames(materializedMembersObject).forEach(id => {
        materializedMembersArray.push(materializedMembersObject[id]);
    });

    context.bindings.outputBlobObject = materializedMembersObject;
    context.bindings.outputBlobArray = materializedMembersArray;

    const logPayload = "";
    context.log(logPayload);

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    //context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    //context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);

    
    async function calculateMembers(classes) {
        let members = new Set();

        classes.forEach(classObject => {
            let teacherEIN = (classObject.teacher_ein) ? classObject.teacher_ein : "0";

            members.add(teacherEIN);
        });

        return [...members];
    }

    async function materializeMembers(members) {
        let materializedMembers = {};

        members.forEach(ein => {
            materializedMembers[ein] = {
                id: ein,
                staff_number: ein,
                ein: ein,
                email: people[ein].email,
                username: people[ein].username,
                name: people[ein].name,
                sortable_name: people[ein].sortable_name,
                first_name: people[ein].first_name,
                last_name: people[ein].last_name
            }
        });

        return materializedMembers;
    }
}

export default SCABCCalculate;