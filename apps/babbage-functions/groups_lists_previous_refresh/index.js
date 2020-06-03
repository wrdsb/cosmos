module.exports = function (context, data) {
    var list = data.list;

    // Overwrite previous file with now file
    context.log('Overwrite previous file with contents now file for '+ list +'-object.json');
    context.bindings.groupsListPrevious = context.bindings.groupsListNow;

    context.done();
};