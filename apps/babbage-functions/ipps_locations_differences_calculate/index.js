module.exports = function (context, data) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    var waterfall = require('async/waterfall');
    var isEqual = require('lodash.isequal');

    // give our bindings more human-readable names
    var records_previous = context.bindings.recordsPrevious;
    var records_now = context.bindings.recordsNow;

    // object to store our total diff as we build it
    var differences = {};
    differences.created_records = {};
    differences.updated_records = {};
    differences.deleted_records = {};

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
    
                // if person changed, add changes to total diff
                if (!records_equal) {
                    // context.log('Found changed record for record_id ' + record_id);
                    differences.updated_records[record_id] = {
                        previous: old_record,
                        now: new_record
                    };
                } else {
                    // context.log('No changes found for record_id ' + record_id);
                }
    
                // remove old_record from records_previous to leave us with a diff. See find_deletes().
                delete records_previous[record_id];
    
            // if we don't find a corresponding record in records_previous, they're new
            } else {
                // context.log('Found new record for record_id ' + record_id);
                differences.created_records[record_id] = new_record;
            }
        });
        callback(null, records_previous, records_now, differences);
    }

    function find_deletes(records_previous, records_now, differences, callback) {
        // if we have any old records remaining, they didn't match a new record, so they must be deletes
        Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
            // context.log('Found deleted record for record_id ' + record_id);
            differences.deleted_records[record_id] = records_previous[record_id];
        });
        callback(null, differences);
    }

    function create_events(differences, callback) {
        // array for the events being sent to the Flynn Grid
        var events = [];

        Object.getOwnPropertyNames(differences.created_records).forEach(function (record_id) {
            var record = differences.created_records[record_id];
            var event_type = "ca.wrdsb.flenderson.ipps_location.create";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/ipps/location/{location_id}/create",
                schemaURL: "ca.wrdsb.flenderson.ipps_location.create.json",
                extensions: { 
                    label: "flenderson creates ipps_location", 
                    tags: [
                        "flenderson", 
                        "ipps", 
                        "ipps_location", 
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

        Object.getOwnPropertyNames(differences.updated_records).forEach(function (record_id) {
            var record = differences.updated_records[record_id];
            var event_type = "ca.wrdsb.flenderson.ipps_location.update";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/ipps/location/{location_id}/update",
                schemaURL: "ca.wrdsb.flenderson.ipps_location.update.json",
                extensions: { 
                    label: "flenderson updates ipps_location", 
                    tags: [
                        "flenderson", 
                        "ipps", 
                        "ipps_location", 
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

        Object.getOwnPropertyNames(differences.deleted_records).forEach(function (record_id) {
            var record = differences.deleted_records[record_id];
            var event_type = "ca.wrdsb.flenderson.ipps_location.delete";
            var event = {
                eventID: `${event_type}-${context.executionContext.invocationId}`,
                eventType: event_type,
                source: "/ipps/location/{location_id}/delete",
                schemaURL: "ca.wrdsb.flenderson.ipps_location.delete.json",
                extensions: { 
                    label: "flenderson deletes ipps_location", 
                    tags: [
                        "flenderson", 
                        "ipps", 
                        "ipps_location", 
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

        var event = "ca.wrdsb.babbage.ipps_locations_differences.calculate";
        var flynn_event = {
            eventID: `${event_type}-${context.executionContext.invocationId}`,
            eventType: event_type,
            source: "/ipps/locations/differences/calculate",
            schemaURL: "ca.wrdsb.babbage.ipps_locations_differences.calculate.json",
            extensions: { 
                label: "babbage calculates ipps_locations_differences", 
                tags: [
                    "babbage", 
                    "ipps", 
                    "ipps_locations_differences", 
                    "differences", 
                    "calculate"
                ] 
            },
            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    blob: {
                        path: 'ipps/locations-differences.json',
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
