module.exports = function (context, data) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    var flynn_event;

    var Gremlin = require('gremlin');
    var async = require('async');

    var event = {};
    event.id = data.id;

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

    async.waterfall([
        function(callback) {
            callback(null, client, event);
        },
        function(client, event, callback) {
            client.execute(`g.V().has('id', '${event.id}')`, { }, (err, results) => {
                if (err) {
                    callback(err);
                } else {
                    event = results[0];
                    callback(null, client, event);
                }
            });
        },
        function(client, event, callback) {
            client.execute(`g.V().has('id', '${event.id}').in()`, { }, (err, results) => {
                if (err) {
                    callback(err);
                } else {
                    event.triggered_by = results;
                    callback(null, client, event);
                }
            });
        },
        function(client, event, callback) {
            client.execute(`g.V().has('id', '${event.id}').out()`, { }, (err, results) => {
                if (err) {
                    callback(err);
                } else {
                    event.triggers = results;
                    callback(null, event);
                }
            });
        }
    ], function (err, event) {
        if (err) {
            context.done(err);
        } else {
            context.bindings.outBlob = JSON.stringify(event);
            flynn_event = {
                id: 'wrdsb-flynn-'+ context.executionContext.functionName +'-'+ context.executionContext.invocationId,
                eventType: 'Functions.Relay.EventRead',
                subject: 'relay-reads-event',
                eventTime: execution_timestamp,
                data: {
                    app: 'wrdsb-flynn',
                    operation: 'event_read',
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    data_blob: `event-objects/${event.id}.json`,
                    event: event
                },
                dataVersion: '1'
            };
            context.bindings.flynnGrid = JSON.stringify(flynn_event);
            context.res = {
                status: 200,
                body: flynn_event
            };
            context.log(flynn_event);
            context.done(null, flynn_event);
        }
    });
};