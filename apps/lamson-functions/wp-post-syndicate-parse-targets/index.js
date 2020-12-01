module.exports = function (context, req) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    //var post = req.body;
    var post = context.bindings.postObject;
    var post_syndication_targets = post.lamson_syndication_targets;

    var syndication_targets = new Set();
    var response = [];

    var schools_secondary = new Set([
        'schools-bci',
        'schools-chc',
        'schools-eci',
        'schools-eds',
        'schools-fhc',
        'schools-gci',
        'schools-gps',
        'schools-grc',
        'schools-hrh',
        'schools-jhs',
        'schools-kci',
        'schools-phs',
        'schools-jam',
        'schools-sss',
        'schools-wci',
        'schools-wod'
    ]);

    var schools_elementary = new Set([
        'schools-ark',
        'schools-abe',
        'schools-alp',
        'schools-ave',
        'schools-ayr',

        'schools-bdn',
        'schools-blr',
        'schools-bre',
        'schools-brp',
        'schools-bgd',

        'schools-cdc',
        'schools-ced',
        'schools-cnc',
        'schools-cnw',
        'schools-ctr',
        'schools-cha',
        'schools-chi',
        'schools-cle',
        'schools-con',
        'schools-cor',
        'schools-coh',
        'schools-crl',
        'schools-cre',

        'schools-doo',
        'schools-dpk',

        'schools-est',
        'schools-elg',
        'schools-elz',
        'schools-emp',

        'schools-flo',
        'schools-fgl',
        'schools-fhl',
        'schools-fra',

        'schools-gcp',
        'schools-gvc',
        'schools-gvn',
        'schools-gro',

        'schools-hes',
        'schools-hig',
        'schools-hil',
        'schools-how',

        'schools-jfc',
        'schools-jwg',
        'schools-jme',
        'schools-jst',
        'schools-jdp',
        'schools-jma',

        'schools-kea',
        'schools-ked',

        'schools-lkw',
        'schools-lrw',
        'schools-lau',
        'schools-lbp',
        'schools-lex',
        'schools-lnh',
        'schools-lin',

        'schools-mcg',
        'schools-mck',
        'schools-man',
        'schools-mrg',
        'schools-mjp',
        'schools-mea',
        'schools-mil',
        'schools-mof',

        'schools-nam',
        'schools-ndd',
        'schools-nlw',

        'schools-pkm',
        'schools-pkw',
        'schools-pio',
        'schools-pre',
        'schools-pru',

        'schools-qel',
        'schools-qsm',

        'schools-riv',
        'schools-roc',
        'schools-rmt',
        'schools-rye',

        'schools-sag',
        'schools-shl',
        'schools-snd',
        'schools-she',
        'schools-sil',
        'schools-sab',
        'schools-smi',
        'schools-srg',
        'schools-sta',
        'schools-stj',
        'schools-stn',
        'schools-stw',
        'schools-sud',
        'schools-sun',

        'schools-tai',
        'schools-tri',

        'schools-vis',

        'schools-wtt',
        'schools-wel',
        'schools-wsh',
        'schools-wsm',
        'schools-wsv',
        'schools-wgd',
        'schools-wlm',
        'schools-wls',
        'schools-wcp',
        'schools-wpk'
    ]);

    var schools_all = new Set([...schools_elementary, ...schools_secondary]);

    post_syndication_targets.forEach(syndication_target => {
        switch (syndication_target) {
            case 'schools-all':
                syndication_targets = new Set([...syndication_targets, ...schools_all]);
                break;

            case 'schools-elementary':
                syndication_targets = new Set([...syndication_targets, ...schools_elementary]);
                break;

            case 'schools-secondary':
                syndication_targets = new Set([...syndication_targets, ...schools_secondary]);
                break;
       
            default:
                syndication_targets.add(syndication_target);
                break;
        }
    });

    syndication_targets.forEach(syndication_target => {
        var wp_install = syndication_target.split('-')[0];
        var wp_site_slug = syndication_target.replace(`${wp_install}-`, '');

        var syndication = {
            "wp_domain": `${wp_install}.wrdsb.ca`,
            "wp_site": wp_site_slug,
            "wp_service": wp_install,
            "wp_environment": "prod",
            "post": {
                "title": post.post_title,
                "content": post.post_content,
                "status": "publish",
                "author_email": post.post_author_email
            }
        };
        response.push(syndication);
    });

    context.res = {
        status: 200,
        body: response
    };

    context.log(response);
    context.done(null, response);
};
