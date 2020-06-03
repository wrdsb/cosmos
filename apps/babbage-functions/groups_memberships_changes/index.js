module.exports = function (context, data) {
    var group_name = data.group;

    var group_memberships_now = context.bindings.groupMembershipsNow;
    var group_memberships_previous = context.bindings.groupMembershipsPrevious;

    // object to store our diff parts
    var created_memberships = {};
    var created_memberships_count = 0;
    var deleted_memberships = {};
    var deleted_memberships_count = 0;
    var updated_memberships = {};
    var updated_memberships_count = 0;
    var diff = {};
    var g_suite_events = [];
    var timestamp = Date.now();

    context.log('Processing data for ' + group_name);

    Object.getOwnPropertyNames(group_memberships_now).forEach(function (membership) {
        if (!group_memberships_previous[membership]) {
            console.log('Found new membership: ' + membership);
            created_memberships[membership] = group_memberships_now[membership];
            created_memberships_count++;
            var event = {
                timestamp: timestamp,
                service: 'group-memberships',
                event_type: 'create',
                body: group_memberships_now[membership]
            };
            g_suite_events.push(event);
        } else {
            if (group_memberships_now[membership] != group_memberships_previous[membership]) {
                console.log('Found changed membership: ' + membership);
                updated_memberships[membership] = {
                    changed: {
                        from: group_memberships_previous[membership],
                        to: group_memberships_now[membership]
                    }
                };
                updated_memberships_count++;
                var event = {
                    timestamp: timestamp,
                    service: 'group-memberships',
                    event_type: 'update',
                    body: updated_memberships[membership]
                };
                g_suite_events.push(event);
            }
        }
    });

    Object.getOwnPropertyNames(group_memberships_previous).forEach(function (membership) {
        if (!group_memberships_now[membership]) {
            console.log('Found deleted membership: ' + membership);
            deleted_memberships[membership] = group_memberships_previous[membership];
            deleted_memberships_count++;
            var event = {
                timestamp: timestamp,
                service: 'group-memberships',
                event_type: 'delete',
                body: group_memberships_previous[membership]
            };
            g_suite_events.push(event);
        }
    });

    if (Object.getOwnPropertyNames(created_memberships).length > 0) {
        diff.created_memberships = created_memberships;
    } else {
        diff.created_memberships = null;
    }
    if (Object.getOwnPropertyNames(deleted_memberships).length > 0) {
        diff.deleted_memberships = deleted_memberships;
    } else {
        diff.deleted_memberships = null;
    }

    context.log(diff);
    context.bindings.groupMembershipsDiff = JSON.stringify(diff);
    context.bindings.gSuiteEvents = g_suite_events;
    context.res = {
        status: 200,
        body: JSON.stringify(diff)
    };
    context.done();
};