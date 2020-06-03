module.exports = function (context, data) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    var flynn_event;

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

    async.waterfall([
        function(callback) {
            callback(null, client);
        },
        function(client, callback) {
            client.execute('g.V()', { }, (err, results) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, results);
                }
            });
        },
    ], function (err, results) {
        if (err) {
            context.done(err);
        } else {
            context.res = {
                status: 200,
                body: results
            };
            results = JSON.stringify(results);
            context.bindings.outBlob = results;
            context.log(results);
            context.done(null, results);
        }
    });
};