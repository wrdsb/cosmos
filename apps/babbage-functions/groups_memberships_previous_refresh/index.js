module.exports = function (context, data) {
    var group_name = data.group;

    // Overwrite previous file with now file
    context.log('Overwrite previous file with contents now file for '+ group_name);
    context.bindings.groupMembershipsPrevious = context.bindings.groupMembershipsNow;

    context.done();
};