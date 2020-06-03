module.exports = function (context, data) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    // Used to merge arrays, removing duplicate elements
    var union = require('lodash.union');

    // Grab the Person records to compare from the HTTP request
    var old_record = data.previous;
    var new_record = data.now;
    var record_id = new_record.ein;

    // Object to store changes we find
    var changes = {};

    // Array to store messages being sent to Flynn Grid
    var events = [];

    // Get a combined list of fields from old_record and new_record
    var fields = union(Object.getOwnPropertyNames(old_record), Object.getOwnPropertyNames(new_record));

    // Iterate over fields list, comparing old and new values
    fields.forEach(function(field) {
        if (field != 'positions') {
            compare_field_values(old_record, new_record, field);
        } else {
            compare_positions(old_record, new_record, field);
        }
    });

    var event_type = "ca.wrdsb.babbage.ipps_person_changes.calculate";
    var flynn_event = {
        eventID: `${event_type}-${context.executionContext.invocationId}`,
        eventType: event_type,
        source: `/ipps/person/${record_id}/changes/calculate`,
        schemaURL: "ca.wrdsb.babbage.ipps_person_changes.calculate.json",
        extensions: { 
            label: "babbage calculates ipps_person_changes", 
            tags: [
                "babbage", 
                "ipps", 
                "ipps_person_changes", 
                "ipps_person", 
                "changes", 
                "calculate"
            ] 
        },
        data: {
            function_name: context.executionContext.functionName,
            invocation_id: context.executionContext.invocationId,
            result: {
                payload: changes
            },
        },
        eventTime: execution_timestamp,
        eventTypeVersion: "0.1",
        cloudEventsVersion: "0.1",
        contentType: "application/json"
    };
    events.push(JSON.stringify(flynn_event));

    // Send generated events to Flynn Grid
    context.bindings.flynnGrid = events;
    context.res = {
        status: 200,
        body: JSON.stringify(changes)
    };
    context.done(null, changes);

    
    function compare_field_values(old_record, new_record, field) {
        var old_value = old_record[field];
        var new_value = new_record[field];

        // if we lost a field
        if (old_value && new_value == null) {
            var event_type = `ca.wrdsb.flenderson.ipps_person_${field}.delete`;
            var source = `${field}/delete`;
            var schema = `ipps_person_${field}.delete`;
            var payload = {
                record: new_record,
                field: field,
                old_value: old_value
            };
            var event = craft_event(new_record.id, field, event_type, payload);
            events.push(JSON.stringify(event));
            changes[event_type] = payload;

        // or if we gained a field
        } else if (old_value == null && new_value) {
            var event_type = `ca.wrdsb.flenderson.ipps_person_${field}.create`;
            var source = `${field}/create`;
            var schema = `ipps_person_${field}.create`;
            var payload = {
                record: new_record,
                field: field,
                new_value: new_value
            };
            var event = craft_event(new_record.id, field, event_type, payload);
            events.push(JSON.stringify(event));
            changes[event_type] = payload;

        // or if field value changed
        } else if (old_value != new_value) {
            var event_type = `ca.wrdsb.flenderson.ipps_person_${field}.update`;
            var source = `${field}/update`;
            var schema = `ipps_person_${field}.update`;
            var payload = {
                record: new_record,
                field: field,
                old_value: old_value,
                new_value: new_value
            };
            var event = craft_event(new_record.id, field, event_type, payload);
            events.push(JSON.stringify(event));
            changes[event_type] = payload;

        // else nothing changed
        } else {
        }
    }

    function compare_positions (old_record, new_record, field) {
        var old_positions = old_record.positions;
        var new_positions = new_record.positions;

        var position_ids = union(Object.getOwnPropertyNames(old_positions), Object.getOwnPropertyNames(new_positions));

        position_ids.forEach(function (position_id) {
            var old_position = old_positions[position_id];
            var new_position = new_positions[position_id];

            // if the position isn't present in old_positions, it's a brand new position
            if (old_position == null) {
                var event_type = 'ca.wrdsb.flenderson.ipps_person_position.create';
                var source = `position/${position_id}/create`;
                var schema = `ipps_person_position.create`;
                var payload = {
                    record: new_record,
                    position: new_position
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;

            // if the position isn't present in new_positions, it got dropped
            } else if (new_position == null) {
                var event_type = 'ca.wrdsb.flenderson.ipps_person_position.delete';
                var source = `position/${position_id}/delete`;
                var schema = `ipps_person_position.delete`;
                var payload = {
                    record: new_record,
                    position: old_position
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;

            // else position is present in old and new, and we look for changes
            } else {
                var event_type = 'ca.wrdsb.flenderson.ipps_person_position.update';
                var source = `position/${position_id}/update`;
                var schema = `ipps_person_position.update`;
                var payload = {
                    new_position: new_position,
                    old_position: old_position
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;
                compare_position_fields(new_record, old_position, new_position);
            }
        });
    }

    function compare_position_fields(new_record, old_position, new_position) {
        var position_fields = union(Object.getOwnPropertyNames(old_position), Object.getOwnPropertyNames(new_position));

        position_fields.forEach(function (field) {
            var old_value = old_position[field];
            var new_value = new_position[field];

            // if the field isn't present in the old position, it's a brand new field
            if (old_value == null) {
                var event_type = `ca.wrdsb.flenderson.ipps_person_position_${field}.create`;
                var source = `position/${position_id}/${field}/create`;
                var schema = `ipps_person_position_${field}.create`;
                var payload = {
                    record: new_record,
                    position: new_position,
                    field: field,
                    new_value: new_value
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;

            // if the field isn't present in the new position, it got dropped
            } else if (new_value == null) {
                var event_type = `ca.wrdsb.flenderson.ipps_person_position_${field}.delete`;
                var source = `position/${position_id}/${field}/delete`;
                var schema = `ipps_person_position_${field}.delete`;
                var payload = {
                    record: new_record,
                    position: new_position,
                    field: field,
                    old_value: old_value
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;

            // else the field is present in old and new positions, and we look for changes
            } else if (old_value != new_value) {
                var event_type = `ca.wrdsb.flenderson.ipps_person_position_${field}.update`;
                var source = `position/${position_id}/${field}/update`;
                var schema = `ipps_person_position_${field}.update`;
                var payload = {
                    record: new_record,
                    position: new_position,
                    field: field,
                    old_value: old_value,
                    new_value: new_value
                };
                var event = craft_event(new_record.id, field, event_type, payload);
                events.push(JSON.stringify(event));
                changes[event_type] = payload;

            // else no change in field value
            } else {
            }
        });
    }

    function craft_event(record_id, source, schema, event_type, payload) {
        var event = {
            eventID: `${event_type}-${context.executionContext.invocationId}`,
            eventType: event_type,
            source: `/ipps/person/${record_id}/${source}`,
            schemaURL: `ca.wrdsb.flenderson.${schema}.json`,
            extensions: { 
                label: `flenderson changes ipps_person`, 
                tags: [
                    "flenderson", 
                    "ipps_person", 
                    "ipps_person_change"
                ] 
            },
            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    payload: payload 
                },
            },
            eventTime: execution_timestamp,
            eventTypeVersion: "0.1",
            cloudEventsVersion: "0.1",
            contentType: "application/json"
        };
        // TODO: check message length
        return event;
    }
};