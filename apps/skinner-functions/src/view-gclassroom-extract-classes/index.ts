import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractClassesFunctionRequest, ViewGclassroomExtractClassesFunctionRequestPayload, ViewGclassroomRecord, TrilliumClass } from "@cosmos/types";

const viewGclassroomExtractClasses: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractClassesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractClasses',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractClassesFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractClassesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;
    const people = context.bindings.peopleNow;

    let classesObject = {};
    let classesArray = [];

    objects.forEach(function(record: ViewGclassroomRecord) {
        let school_code   = record.school_code ? record.school_code : "";
        let class_code    = record.class_code ? record.class_code : "";
        let class_grades  = record.student_grade ? [record.student_grade] : [];
        let staff_number  = record.staff_number ? record.staff_number : "";
        let teacher_email = "";
        let teacher_name  = "";

        if (people[staff_number]) {
            teacher_email = people[staff_number].email;
            teacher_name = people[staff_number].name;
        }

        // we don't care if a teacher is assigned yet
        if (school_code !== "" && class_code !== "") {
            let classObjectID = sanitizeID(`${school_code}-${class_code}`);

            // Extract the 'class' object from the row
            let classObject = {
                id: classObjectID,
                school_code: school_code,
                class_code: class_code,
                class_grades: class_grades,
                staff_number: staff_number,
                teacher_email: teacher_email,
                teacher_name: teacher_name
            } as TrilliumClass;

            if (classesObject[classObjectID] && classesObject[classObjectID][class_grades]) {
                let merged_grades = new Set([
                    ...classesObject[classObjectID][class_grades],
                    ...classObject.class_grades
                ]);
                classObject.class_grades = Array.from(merged_grades);
            }
    
            // Add/overwrite individual objects from this row to their collection objects
            classesObject[classObjectID] = classObject;
        }
    });

    // Add each class from classesObject to classesArray
    Object.getOwnPropertyNames(classesObject).forEach(function (classID) {
        classesArray.push(classesObject[classID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.classesNowArray = JSON.stringify(classesArray);
    context.bindings.classesNowObject = JSON.stringify(classesObject);

    const skinner_trillium_classes_reconcile_job = {
        "job_type": "Skinner.Trillium.Classes.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(skinner_trillium_classes_reconcile_job)];

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

export default viewGclassroomExtractClasses;