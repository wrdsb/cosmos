import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "../SharedCode/createLogObject";
import { createLogBlob } from "../SharedCode/createLogBlob";
import { createInvocationCallback } from "../SharedCode/createInvocationCallback";
import { createInvocationEvent } from "../SharedCode/createInvocationEvent";

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
    const first_name = flendersonPerson.first_name || '';
    const last_name = flendersonPerson.last_name || '';
    const sortable_name = flendersonPerson.sortable_name || '';

    const location_codes = flendersonPerson.location_codes || [];

    let trillium_record = {};;
    let school_codes = [];;

    if (skinnerPerson) {
        trillium_record = skinnerPerson;
        school_codes = skinnerPerson.school_codes;
    }

    const codexPerson = {
        ein: ein,
        email: email,
        pal: pal,
    
        full_name: full_name,
        first_name: first_name,
        last_name: last_name,
        sortable_name: sortable_name,
    
        school_codes: school_codes,
        location_codes: location_codes,
    
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
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createInvocationCallback(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createInvocationEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);
};

export default materializePerson;
