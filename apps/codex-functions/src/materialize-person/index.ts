import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const materializePerson: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.Person.Materialize';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-materialize-person-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

    const triggerObject = context.bindings.triggerMessage;
    const flendersonPerson = context.bindings.flendersonIn;
    const skinnerPerson = context.bindings.skinnerIn;

    const ipps_record = flendersonPerson || {};

    const ein = flendersonPerson.ein || '';
    const email = flendersonPerson.email || '';
    const pal = flendersonPerson.username || '';

    const full_name = flendersonPerson.name || '';
    const firstName = flendersonPerson.firstName || '';
    const lastName = flendersonPerson.lastName || '';
    const sortableName = flendersonPerson.sortableName || '';

    const locationCodes = flendersonPerson.locationCodes || [];

    let trillium_record = {};;
    let schoolCodes = [];;

    if (skinnerPerson) {
        trillium_record = skinnerPerson;
        schoolCodes = skinnerPerson.schoolCodes;
    }

    const codexPerson = {
        ein: ein,
        email: email,
        pal: pal,
    
        full_name: full_name,
        firstName: firstName,
        lastName: lastName,
        sortableName: sortableName,
    
        schoolCodes: schoolCodes,
        locationCodes: locationCodes,
    
        trillium_record: trillium_record,
    
        ipps_record: ipps_record
    };

    const personStoreMessge = {
        operation: 'patch',
        payload: codexPerson
    }
    context.bindings.personStore = JSON.stringify(personStoreMessge);

    const logPayload = {
        codexPerson: codexPerson
    };
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);
};

export default materializePerson;
