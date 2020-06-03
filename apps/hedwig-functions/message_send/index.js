module.exports = function (context, data) {
    // get config from environment
    var api_key = process.env["MailgunKey"];
    var domain = process.env["MailgunDomain"];

    // load Mailgun helper
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    // get request params
    var from = data.from;
    var to = data.to;
    var subject = data.subject;
    var text = data.text;
    var html = data.html;

    if (!from) {
        context.log("From address is required.");
        context.done("From address is required.");
        return;
    }
    if (!to) {
        context.log("From address is required.");
        context.done("From address is required.");
        return;
    }
    if (!subject) {
        context.log("From address is required.");
        context.done("From address is required.");
        return;
    }
    if (!text) {
        context.log("From address is required.");
        context.done("From address is required.");
        return;
    }

    var message = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };
    if (html) {
        message.html = html;
    }
    context.log(message);
      
    mailgun.messages().send(message, function (error, body) {
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
