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
                    callback(null, event);
                }
            });
        },
    ], function (err, event) {
        if (err) {
            context.done(err);
        } else {
            context.res = {
                status: 200,
                body: event
            };
            event = JSON.stringify(event);
            context.bindings.outBlob = event;
            context.log(event);
            context.done(null, event);
        }
    });
};