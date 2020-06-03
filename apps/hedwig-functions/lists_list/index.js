module.exports = function (context, data) {
    // get config from environment
    var api_key = process.env["MailgunKey"];
    var domain = process.env["MailgunDomain"];

    // load Mailgun helper
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    mailgun.lists().list(function (error, body) {
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
