module.exports = function (context, data) {
    context.log(context.bindings);

    context.bindings.outBlob = context.bindings.inBlob;
    context.done(null, "Blob contents replaced.");
};
