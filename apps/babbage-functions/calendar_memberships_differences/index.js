module.exports = function (context, data) {
    var calendar_id = data.calendar;

    var memberships_actual = context.bindings.membershipsActual;
    var memberships_ipps = context.bindings.membershipsIPPS;
    var memberships_central = data.memberships.central;
    var memberships_supplemental = data.memberships.supplemental;

    var memberships_ideal = Object.assign(memberships_ipps, memberships_supplemental, memberships_central);

    // objects to store our diff parts
    var missing_memberships = [];
    var changed_memberships = [];
    var extra_memberships = [];
    var diff = {};

    context.log('Calculating membership diff for Calendar ' + calendar_id);

    Object.getOwnPropertyNames(memberships_ideal).forEach(function (member) {
        if (!memberships_actual[member]) {
            console.log('Did not find member: ' + member);
            var missing_member = memberships_ideal[member];
            missing_memberships.push(missing_member);
        } else {
            if (memberships_actual[member].role != memberships_ideal[member].role) {
                context.log(memberships_actual[member].scope.value +' role changed from '+ memberships_actual[member].role +' to '+ memberships_ideal[member].role +' in '+ calendar_id);
                var changed_member = memberships_ideal[member];
                changed_memberships.push(changed_member);
            }
        }
    });

    Object.getOwnPropertyNames(memberships_actual).forEach(function (member) {
        if (!memberships_ideal[member]) {
            console.log('Found extra member: ' + member);
            var extra_member = {};
            extra_member.rule_id = memberships_actual[member].id;
            extra_member.calendar_id = calendar_id;
            extra_memberships.push(extra_member);
        }
    });

    diff.missing_memberships = missing_memberships;
    diff.changed_memberships = changed_memberships;
    diff.extra_memberships = extra_memberships;

    context.log(diff);
    context.bindings.membershipsDiff = diff;
    context.res = {
        status: 200,
        body: JSON.stringify(diff)
    };

    context.done(null, 'Finished calculating membership diff for Calendar ' + calendar_id);
};