"use strict";
exports.__esModule = true;
var architect_1 = require("@angular-devkit/architect");
var childProcess = require("child_process");
var rxjs_1 = require("rxjs");
exports["default"] = architect_1.createBuilder(function (_options, context) {
    context.logger.info("Executing \"echo\"...");
    context.logger.info("Options: " + JSON.stringify(_options, null, 2));
    console.log(context);
    var child = childProcess.spawn('echo', [_options.textToEcho]);
    return new rxjs_1.Observable(function (observer) {
        child.stdout.on('data', function (data) {
            context.logger.info(data.toString());
        });
        child.stderr.on('data', function (data) {
            context.logger.error(data.toString());
        });
        child.on('close', function (code) {
            context.logger.info("Done.");
            observer.next({ success: code === 0 });
            observer.complete();
        });
    });
});
