module.exports = function (context, data) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    var waterfall = require('async/waterfall');
    var isEqual = require('lodash.isequal');

    // give our bindings more human-readable names
    var records_previous = context.bindings.recordsPrevious;
    var records_now = context.bindings.recordsNow;

    // object to store our total diff as we build it
    var differences = {};
    differences.created_records = [];
    differences.updated_records = [];
    differences.deleted_records = [];

    waterfall([
        kickoff,
        find_creates_and_updates,
        find_deletes,
        create_events
    ], function (err, differences, events) {
        if (err) {
            context.done(err);
        } else {
            context.bindings.recordsDifferences = JSON.stringify(differences);
            context.bindings.flynnGrid = events;
            context.res = {
                status: 200,
                body: JSON.stringify(differences)
            };
            context.done(null, differences);
        }
    });

    function kickoff(callback) {
        callback(null, records_previous, records_now, differences);
    }

    function find_creates_and_updates(records_previous, records_now, differences, callback) {
        // loop through all records in records_now, each of which is a property of records_now, named for the record's record_id
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            // context.log('Processing record_id ' + record_id);
            var new_record = records_now[record_id];      // get the full person record from records_now
            var old_record = records_previous[record_id]; // get the corresponding record in records_previous
    
            // if we found a corresponding record in records_previous, look for changes
            if (old_record) {
                // context.log('Found existing record for record_id ' + record_id);

                // Compare old and new records using Lodash _.isEqual, which performs a deep comparison
                var records_equal = isEqual(old_record, new_record);
    
                // if record changed, add changes to total diff
                if (!records_equal) {
                    // context.log('Found changed record for record_id ' + record_id);
                    differences.updated_records.push({
                        previous: old_record,
                        now: new_record
                    });
                } else {
                    // context.log('No changes found for record_id ' + record_id);
                }
    
                // remove old_record from records_previous to leave us with a diff. See find_deletes().
                delete records_previous[record_id];
    
            // if we don't find a corresponding record in records_previous, they're new
            } else {
                // context.log('Found new record for record_id ' + record_id);
                differences.created_records.push(new_record);
            }
        });
        callback(null, records_previous, records_now, differences);
    }

    function find_deletes(records_previous, records_now, differences, callback) {
        // if we have any old records remaining, they didn't match a new record, so they must be deletes
        Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
            // context.log('Found deleted record for record_id ' + record_id);
            differences.deleted_records.push(records_previous[record_id]);
        });
        callback(null, differences);
    }

    function create_events(differences, callback) {
        // array for the events being sent to the Flynn Grid
        var events = [];

        differences.created_records.forEach(function (record) {
            var event_type = "ca.wrdsb.skinner.trillium_enrolment.create";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/trillium/enrolment/{record_id}/create",
                schemaURL: "ca.wrdsb.skinner.trillium_enrolment.create.json",
                extensions: {
                    app: 'wrdsb-babbage',
                    label: "skinner creates trillium_enrolment",
                    tags: [
                        "skinner",
                        "trillium",
                        "trillium_enrolment",
                        "create"
                    ]
                },
                data: {
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    result: {
                        payload: record
                    },
                },
                eventTime: execution_timestamp,
                eventTypeVersion: "0.1",
                cloudEventsVersion: "0.1",
                contentType: "application/json"
            };
            events.push(JSON.stringify(event));
        });

        differences.updated_records.forEach(function (record) {
            var event_type = "ca.wrdsb.skinner.trillium_enrolment.update";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/trillium/enrolment/{record_id}/update",
                schemaURL: "ca.wrdsb.skinner.trillium_enrolment.update.json",
                extensions: {
                    label: "skinner updates trillium_enrolment",
                    tags: [
                        "skinner",
                        "trillium",
                        "trillium_enrolment",
                        "update"
                    ]
                },
                data: {
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    result: {
                        payload: record
                    },
                },
                eventTime: execution_timestamp,
                eventTypeVersion: "0.1",
                cloudEventsVersion: "0.1",
                contentType: "application/json"
            };
            events.push(JSON.stringify(event));
        });

        differences.deleted_records.forEach(function (record) {
            var event_type = "ca.wrdsb.skinner.trillium_enrolment.delete";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/trillium/enrolment/{record_id}/delete",
                schemaURL: "ca.wrdsb.skinner.trillium_enrolment.delete.json",
                extensions: { 
                    label: "skinner deletes trillium_enrolment", 
                    tags: [
                        "skinner", 
                        "trillium", 
                        "trillium_enrolment", 
                        "delete"
                    ] 
                },
                data: {
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    result: {
                        payload: record
                    },
                },
                eventTime: execution_timestamp,
                eventTypeVersion: "0.1",
                cloudEventsVersion: "0.1",
                contentType: "application/json"
            };
            events.push(JSON.stringify(event));
        });

        var event_type = "ca.wrdsb.babbage.trillium_enrolmentes_differences.calculate";
        var flynn_event = {
            eventID: `${event_type}-${context.executionContext.invocationId}`,
            eventType: event_type,
            source: "/trillium/enrolmentes/differences/calculate",
            schemaURL: "ca.wrdsb.babbage.trillium_enrolmentes_differences.calculate.json",
            extensions: { 
                app: 'wrdsb-babbage',
                label: "babbage calculates trillium_enrolmentes_differences", 
                tags: [
                    "babbage", 
                    "trillium", 
                    "trillium_enrolmentes_differences", 
                    "differences", 
                    "calculate"
                ] 
            },
            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    blob: {
                        path: 'trillium/enrolmentes-differences.json',
                        connection: 'wrdsbbabbage_STORAGE'
                    }
                },
            },
            eventTime: execution_timestamp,
            eventTypeVersion: "0.1",
            cloudEventsVersion: "0.1",
            contentType: "application/json"
        };
        events.push(JSON.stringify(flynn_event));

        callback(null, differences, events);
    }
};
