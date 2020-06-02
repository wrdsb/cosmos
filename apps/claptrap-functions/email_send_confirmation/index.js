module.exports = function (context, data) {
    var request = require('request');
    var ejs = require('ejs');

    // Parse job object for API service request URL
    var service = "wrdsb-hedwig";
    var operation = "message_send";
    var service_key = process.env['HedwigKey'];
    var template_path = __dirname + '/../email_send_confirmation/template.ejs';

    var from = data.from;
    var to = data.to;
    var subject = "Your confirmation is required";

    var template_values = {
        //Please confirm <%= thing_being_confirmed %> by clicking the link below.
        thing_being_confirmed: "this thing that needs confirmation",

        reason_confirmation_required: "We may need to send you critical information about our service and it is important that we have an accurate email address.",
        confirmation_button_text: "Confirm, baby!"
    };

    var payload = {
        "from": from,
        "to": to,
        "subject": subject
    };

    payload.text = "This is another test email.";

    ejs.renderFile(template_path, template_values, function(err, str) {
        if (err) {
            context.log(err);
            context.done(err);
            return;
        } else {
            payload.html = str;
        }
    });

    // Prepare HTTP request options for calling API service
    var request_options = {
        method: 'POST',
        url: `https://${service}.azurewebsites.net/api/${operation}?code=${service_key}&clientId=hedwig`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'wrdsb-claptrap'
        },
        json: payload
    };

    // Make the request
    request.post(request_options, function (error, response, body) {
        if (error) {
            context.log('error:', error);
            context.done(error);
            return;
        } else {
            context.log('statusCode:', response && response.statusCode);
            context.log('body:', body);
            context.done(null, body);
        }
    });
};
