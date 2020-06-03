module.exports = function (context, data) {
    // get config from environment
    var api_key = process.env["MailgunKey"];
    var domain = process.env["MailgunDomain"];

    // load Mailgun helper
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    // get request params
    var list_address = data.list_address;
    var member_address = data.member_address;

    if (!list_address) {
        context.log("List address is required.");
        context.done("List address is required.");
        return;
    }
    if (!member_address) {
        context.log("Member address is required.");
        context.done("Member address is required.");
        return;
    }

    var mailgun_list = mailgun.lists(list_address);
    
    mailgun_list.members(member_address).info(function (error, body) {
        if (error) {
            context.res = {
                status: 500,
                body: error
            }
            context.log(error);
            context.done(error);
            return;
        } else {
            context.res = {
                status: 200,
                body: body
            }
            context.log(body);
            context.done(null, JSON.stringify(body));
        }
    });
};
