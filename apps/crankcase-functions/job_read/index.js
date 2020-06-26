module.exports = function (context, data) {
    var job = context.bindings.job;

    context.res = {
        status: 200,
        body: job
    };

    context.done(null, job);
};
