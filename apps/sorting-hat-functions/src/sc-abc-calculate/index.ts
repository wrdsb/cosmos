import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const SCABCCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'SCMembership',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

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
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
    async function calculateMembers(classes) {
        let members = new Set();

        classes.forEach(function(classObject) {
            if (classObject.school_code && classObject.school_code === requestedSchoolCode) {
                let teacherEIN = (classObject.teacher_ein) ? classObject.teacher_ein : "0";

                if (teacherEIN !== "0") {
                  members.add(teacherEIN);
                }
            }
        });

        return [...members];
    }

    async function materializeMembers(members) {
        let materializedMembers = {};

        members.forEach(function(ein) {
            if (people[ein]) {
                let email = people[ein].email ? people[ein].email : "";
                let username = people[ein].username ? people[ein].username : "";
                let name = people[ein].name ? people[ein].name : "";
                let sortableName = people[ein].sortable_name ? people[ein].sortable_name : "";
                let firstName = people[ein].first_name ? people[ein].first_name : "";
                let lastName = people[ein].last_name ? people[ein].last_name : "";
    
                materializedMembers[ein] = {
                    id: ein,
                    staffNumber: ein,
                    ein: ein,
                    email: email,
                    username: username,
                    name: name,
                    sortableName: sortableName,
                    firstName: firstName,
                    lastName: lastName
                }
            }
        });

        return materializedMembers;
    }
}

export default SCABCCalculate;