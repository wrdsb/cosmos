module.exports = function (context, data) {
    var group = data.group;

    var memberships_actual = context.bindings.membershipsActual.actual;
    var memberships_ipps = context.bindings.membershipsIPPS;
    var memberships_central = context.bindings.membershipsOverrides.central;

    var memberships_ideal = Object.assign(memberships_ipps, memberships_central);

    // objects to store our diff parts
    var missing_memberships = [];
    var changed_memberships = [];
    var extra_memberships = [];
    var diff = {};

    context.log('Calculating membership diff for Group ' + group);

    Object.getOwnPropertyNames(memberships_ideal).forEach(function (member) {
        if (!memberships_actual[member]) {
            console.log('Did not find member: ' + member);
            var missing_member = memberships_ideal[member];
            missing_member.groupKey = group;
            missing_memberships.push(missing_member);
        } else {
            if (memberships_actual[member].role != memberships_ideal[member].role) {
                context.log(memberships_actual[member].email +' role changed from '+ memberships_actual[member].role +' to '+ memberships_ideal[member].role +' in '+ group);
                var changed_member = memberships_ideal[member];
                changed_member.groupKey = group;
                changed_memberships.push(changed_member);
            }
        }
    });

    Object.getOwnPropertyNames(memberships_actual).forEach(function (member) {
        if (!memberships_ideal[member]) {
            console.log('Found extra member: ' + member);
            var extra_member = {};
            extra_member.email = memberships_actual[member].email;
            extra_member.groupKey = group;
            extra_memberships.push(extra_member);
        }
    });

    diff.missing_memberships = missing_memberships;
    diff.changed_memberships = changed_memberships;
    diff.extra_memberships = extra_memberships;

    context.log(diff);
    context.bindings.membershipsDiff = diff;

    context.done(null, 'Finished calculating membership diff for Group ' + group);
};