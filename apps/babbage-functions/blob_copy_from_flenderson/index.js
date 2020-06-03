module.exports = function (context, data) {
    context.bindings.outBlob = context.bindings.inBlob;

    var event = "Replaced contents of ";
    event += "Babbage Storage: " + data.out_blob.path + "/" + data.out_blob.name;
    event += " with ";
    event += "Flenderson Storage: " + data.in_blob.path + "/" + data.in_blob.name;

    context.log(event);
    context.res = {
        status: 200,
        body: event
    };
    context.done(null, event);
};
