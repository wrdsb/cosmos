import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { createLogBlob } from "../shared/createLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";

const ippsLocationsReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.SortingHat.IPPS.Locations.Reconcile';
    const functionEventID = `sorting-hat-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-ipps-locations-reconcile-logs';

    const eventLabel = '';
    const eventTags = [
        "sorting-hat", 
    ];

    let yup = new Set();
    let maybe = new Set();
    let dunno = new Set();

    let maybe_fresh = false;

    let person = context.bindings.triggerMessage.person;
    let flat_person = flattenPerson(person);

    initDunno(flat_person);

    while (dunno.size > 0 || maybe_fresh) {
        if (dunno.size > 0) {
            dunno.forEach(function (my_set) {
                let member = isMemberOf(yup, my_set);

                if (member === 'yes') {
                    yup.add(my_set);
                    maybe_fresh = true;

                    let parent_sets = getParentSets(my_set);
                    dunno = new Set([...dunno, ...parent_sets])

                } else if (member === 'maybe') {
                    maybe.add(my_set);
                    maybe_fresh = true;
                }

                dunno.delete(my_set);
            });

        // When dunno is empty, process maybe
        } else if (maybe_fresh) {
            maybe_fresh = false;

            maybe.forEach(function (my_set) {
                let member = isMemberOf(yup, my_set);

                if (member === 'yes') {
                    yup.add(my_set);
                    maybe_fresh = true;

                    let parent_sets = getParentSets(my_set);
                    dunno = new Set([...dunno, ...parent_sets])

                    maybe.delete(my_set);
                }
            });
        }
    }

    function flattenPerson(person) {
        let flattened = {
            job_codes: [],
            group_codes: [],
            location_codes: [],
            location_jobs: [],
            location_groups: []
        };

        person.positions.forEach(function (position) {
            flattened.job_codes.push(transformJobCode(position.job_code));
            flattened.group_codes.push(transformGroupCode(position.group_code));
            flattened.location_codes.push(transformLocationCode(position.location_code));

            flattened.location_jobs.push(createLocationJob(position));
            flattened.location_groups.push(createLocationGroup(position));
        });

        return flattened;
    }

    function initDunno(flat_person) {
        flat_person.job_codes.forEach(function (job_code) {
            yup.add(job_code);

            let parent_sets = getParentSets(job_code);
            dunno = new Set([...dunno, ...parent_sets])
        });
        flat_person.group_codes.forEach(function (group_code) {
            yup.add(group_code);

            let parent_sets = getParentSets(group_code);
            dunno = new Set([...dunno, ...parent_sets])
        });
        flat_person.location_codes.forEach(function (location_code) {
            yup.add(location_code);

            let parent_sets = getParentSets(location_code);
            dunno = new Set([...dunno, ...parent_sets])
        });
        flat_person.location_jobs.forEach(function (location_job) {
            yup.add(location_job);

            let parent_sets = getParentSets(location_job);
            dunno = new Set([...dunno, ...parent_sets])
        });
        flat_person.location_groups.forEach(function (location_group) {
            yup.add(location_group);

            let parent_sets = getParentSets(location_group);
            dunno = new Set([...dunno, ...parent_sets])
        });
    }

    function isMemberOf(yup, set_name) {
        let my_set = getSet(set_name);

        if (my_set.atomic) {
            if (yup.has(my_set.id)) {
                return 'yes';
            }
        } else {
            let confirmations = new Set;

            my_set.definition.forEach(function (term_array) {
                confirmations.add(confirmTerm(yup, term_array));
            });
            
            if (confirmations.has(true) && !confirmations.has(false)) {
                return 'yes';
            } else if (confirmations.has(true) && confirmations.has(false)) {
                return 'maybe';
            } else {
                return 'no';
            }
        }
    }

    function confirmTerm(yup, term_array) {
        let confirmed =  false;

        term_array.forEach(function (item) {
            if (yup.has(item)) {
                confirmed = true;
            }
        });

        return confirmed;
    }

    function getSet(set_name) {
        let my_set = {
            id: '',
            atomic: true,
            definition: []
        };

        return my_set;
    }

    function getParentSets(set_name) {
        let my_sets = [];

        return my_sets;
    }

    function transformJobCode(job_code) {
        return `JC-${job_code}`;
    }

    function transformGroupCode(group_code) {
        return `GC-${group_code}`;
    }

    function transformLocationCode(location_code) {
        return `LC-${location_code}`;
    }

    function createLocationJob(position) {
        return `LJ-${position.location_code}-${position.job_code}`;
    }

    function createLocationGroup(position) {
        return `LG-${position.location_code}-${position.group_code}`;
    }

};

export default ippsLocationsReconcile;
