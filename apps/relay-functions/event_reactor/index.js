module.exports = function (context, triggerEvent) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    var flynn_events = [];

    var trigger_event = triggerEvent;  // incoming event object from trigger
    //context.log(trigger_event);
    // TODO: validate trigger_event
  
    var Gremlin = require('gremlin');
    var async = require('async');

    const client = Gremlin.createClient(
        443,
        process.env["relayGraphURL"],
        {
            "session": false,
            "ssl": true,
            "user": `/dbs/${process.env["relayGraphDatabase"]}/colls/${process.env["relayGraphCollection"]}`,
            "password": process.env["relayGraphPrimaryKey"]
        }
    );

    if (trigger_event.eventType != "ca.wrdsb.relay.event.reactor") {
        async.waterfall([
            kick_off,
            get_relay_event,
            get_triggered_events,
            extract_crankcase_jobs,
            prep_crankcase_requests
        ], function (err, crankcase_requests) {
            if (err) {
                context.done(err);
            } else {
                var event_type = "ca.wrdsb.relay.event.reactor";
                var flynn_event = {
                    eventID: `${event_type}-${context.executionContext.invocationId}`,
                    eventType: event_type,
                    source: "",
                    schemaURL: "ca.wrdsb.relay.event.reactor.json",
                    extensions: {},
                    data: {
                        function_name: context.executionContext.functionName,
                        invocation_id: context.executionContext.invocationId,
                        payload: {},
                    },
                    eventTime: execution_timestamp,
                    eventTypeVersion: "0.1",
                    cloudEventsVersion: "0.1",
                    contentType: "application/json"
                };
                flynn_events.push(JSON.stringify(flynn_event));
                //context.bindings.flynnGrid = flynn_events;
                context.bindings.crankcaseRequest = crankcase_requests;
                //context.log("Crankcase Requests:");
                //context.log(crankcase_requests);
                context.done(null, crankcase_requests);
            }
        });
    } else {
        context.done();
    }

    function kick_off(callback) {
        callback(null, trigger_event);
    }

    function get_relay_event(event, callback) {
        client.execute(`g.V().has('id', '${event.eventType}')`, { }, function (err, results) {
            if (err) {
                callback(err);
            } else {
                var relay_event = results[0];
                if (relay_event == null) {
                    relay_event = null;
                }
                //context.log("Relay Event:");
                //context.log(relay_event);
                callback(null, relay_event);
            }
        });
    }

    function get_triggered_events(event, callback) {
        if (event != null) {
            client.execute(`g.V().has('id', '${event.id}').out()`, { }, function (err, events) {
                if (err) {
                    callback(err);
                } else {
                    //context.log("Events:");
                    //context.log(events);
                    callback(null, events);
                }
            });
        } else {
            var events = [];
            callback(null, events);
        }
    }

    function extract_crankcase_jobs(events, callback) {
        // Array of job objects
        var jobs = [];

        events.forEach(function(event) {
            if (event.properties.crankcase_job.value) {
                var job = {};
                var crankcase_job = JSON.parse(event.properties.crankcase_job.value);
                //context.log("Crankcase Job:");
                //context.log(crankcase_job);
                job.service = crankcase_job.service;
                job.operation = crankcase_job.operation;
                job.payload = crankcase_job.payload;
                jobs.push(job);
            }
        });

        callback(null, jobs);
    }

    function prep_crankcase_requests(jobs, callback) {
        // Array of strings
        var crankcase_requests = [];

        jobs.forEach(function(job) {
            var job_request = {};
            job_request.service = job.service;
            job_request.operation = job.operation;
            job_request.payload = job.payload;
            job_request = JSON.stringify(job_request);
            crankcase_requests.push(job_request);
        });

        callback(null, crankcase_requests);
    }
};
