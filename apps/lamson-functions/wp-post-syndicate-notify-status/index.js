module.exports = function (context, req) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    var syndication_items = req.body.syndications;
    var post_title = req.body.post_title;
    var author_email = req.body.post_author_email;

    var html = `
        <table style="width:100%">
            <tr>
                <th>Status</th>
                <th>Link</th> 
            </tr>`;

    syndication_items.forEach(item => {
        var row_status = (item.status.startsWith('2')) ? 'Good' : '<strong>Error</strong>';
        var row_detail = (item.body.data.link) ? item.body.data.link : '<strong>Error</strong>';
        var row = `
            <tr>
                <td>${row_status}</td> 
                <td>${row_detail}</td>
            </tr>`;

        html += row;
    });

    html += '</table>';

    var notification = {
        subject: `Syndication: ${post_title}`,
        to: author_email,
        from: {
            email: 'syndications@lamson.wrdsb.io',
            name: 'Syndication Status Notifications'
        },
        html: html 
    };

    sgMail.send(notification, (error, result) => {
        if (error) {
            context.res = {
                status: 500,
                body: error
            };

            context.log(error);
            context.done(error);

        } else {
            context.res = {
                status: 200,
                body: notification
            };

            context.log(notification);
            context.done(null, notification);
        }
    });
};
