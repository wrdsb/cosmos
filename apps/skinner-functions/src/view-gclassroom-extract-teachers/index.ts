import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractTeachersFunctionRequest, ViewGclassroomExtractTeachersFunctionRequestPayload, ViewGclassroomRecord, TrilliumTeacher } from "@cosmos/types";

const viewGclassroomExtractTeachers: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractTeachersFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractClasses',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractTeachersFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractTeachersFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let teachersObject = {};
    let teachersArray = [];

    objects.forEach(function(record: ViewGclassroomRecord) {
        let school_code  = record.school_code ? record.school_code : "";
        let staff_number = record.staff_number ? record.staff_number : "";

        if (school_code !== "" && staff_number !== "") {
            let teacherObjectID   = sanitizeID(staff_number);

            // Extract the 'teacher' object from the row
            let teacherObject = {
                id:            teacherObjectID,
                school_code:   school_code,
                staff_number:  staff_number
            } as TrilliumTeacher;
            
            // Add/overwrite individual objects from this row to their collection objects
            teachersObject[teacherObjectID] = teacherObject;
        }
    });

    // Add each teacher from teachersObject to teachersArray
    Object.getOwnPropertyNames(teachersObject).forEach(function (teacherID) {
        teachersArray.push(teachersObject[teacherID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.teachersNowArray = JSON.stringify(teachersArray);
    context.bindings.teachersNowObject = JSON.stringify(teachersObject);

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function sanitizeID(id)
    {
        while (id.includes("/")) {
            id = id.split("/").join("-");
        }

        while (id.includes("\/")) {
            id = id.split("\/").join("-");
        }

        return id;
    }
};

export default viewGclassroomExtractTeachers;