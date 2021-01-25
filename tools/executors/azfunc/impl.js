"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var architect_1 = require("@angular-devkit/architect");
var core_1 = require("@angular-devkit/core");
var build_webpack_1 = require("@angular-devkit/build-webpack");
var ts = require("typescript");
var path_1 = require("path");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var fs_1 = require("fs");
var webpack_merge_1 = require("webpack-merge");
var nodeExternals = require("webpack-node-externals");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ngcli_adapter_1 = require("@nrwl/devkit/ngcli-adapter");
var OUT_FILENAME = 'main.js';
try {
    require('dotenv').config();
}
catch (e) { }
exports["default"] = architect_1.createBuilder(run);
function run(options, context) {
    console.log("Executing \"echo\"...");
    console.log("Options: " + JSON.stringify(options, null, 2));
    console.log(context);
    return rxjs_1.from(getRoots(context)).pipe(operators_1.map(function (_a) {
        var sourceRoot = _a.sourceRoot, projectRoot = _a.projectRoot;
        return normalizeBuildOptions(options, context.workspaceRoot, sourceRoot, projectRoot);
    }), operators_1.map(function (options) {
        var config = getNodeWebpackConfig(options);
        if (options.webpackConfig) {
            config = require(options.webpackConfig)(config, {
                options: options,
                configuration: context.target.configuration
            });
        }
        return config;
    }), operators_1.concatMap(function (config) {
        return build_webpack_1.runWebpack(config, context, {
            logging: function (stats) {
                context.logger.info(stats.toString(config.stats));
            },
            webpackFactory: require('webpack')
        });
    }), operators_1.map(function (buildEvent) {
        buildEvent.outfile = path_1.resolve(context.workspaceRoot, options.outputPath, OUT_FILENAME);
        return buildEvent;
    }));
    function getRoots(context) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceHost, workspace, project, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getRoots');
                        workspaceHost = core_1.workspaces.createWorkspaceHost(new ngcli_adapter_1.NxScopedHost(core_1.normalize(context.workspaceRoot)));
                        return [4 /*yield*/, core_1.workspaces.readWorkspace('', workspaceHost)];
                    case 1:
                        workspace = (_a.sent()).workspace;
                        project = workspace.projects.get(context.target.project);
                        if (project.sourceRoot && project.root) {
                            return [2 /*return*/, { sourceRoot: project.sourceRoot, projectRoot: project.root }];
                        }
                        else {
                            context.reportStatus('Error');
                            message = context.target.project + " does not have a sourceRoot or root. Please define one.";
                            context.logger.error(message);
                            throw new Error(message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function getNodeWebpackConfig(options) {
        console.log('getNodeWebpackConfig');
        return webpack_merge_1.merge([
            getBaseWebpackPartial(options),
            getNodePartial(options),
        ]);
    }
    function getNodePartial(options) {
        console.log('getNodePartial');
        var webpackConfig = {
            output: {
                libraryTarget: 'commonjs'
            },
            target: 'node',
            node: false
        };
        if (options.optimization) {
            webpackConfig.optimization = {
                minimize: false,
                concatenateModules: false
            };
        }
        if (options.externalDependencies === 'all') {
            webpackConfig.externals = [nodeExternals()];
        }
        else if (Array.isArray(options.externalDependencies)) {
            webpackConfig.externals = [
                function (context, request, callback) {
                    if (options.externalDependencies.includes(request)) {
                        // not bundled
                        return callback(null, 'commonjs ' + request);
                    }
                    // bundled
                    callback();
                },
            ];
        }
        return webpackConfig;
    }
    function getBaseWebpackPartial(options) {
        console.log('getBaseWebpackPartial');
        var compilerOptions = readTsConfig(options.tsConfig).options;
        var supportsEs2015 = compilerOptions.target !== ts.ScriptTarget.ES3 &&
            compilerOptions.target !== ts.ScriptTarget.ES5;
        var mainFields = __spreadArrays((supportsEs2015 ? ['es2015'] : []), ['module', 'main']);
        var extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
        var webpackConfig = {
            entry: {
                main: [options.main]
            },
            devtool: options.sourceMap ? 'source-map' : false,
            mode: options.optimization ? 'production' : 'development',
            output: {
                path: options.outputPath,
                filename: OUT_FILENAME
            },
            module: {
                rules: [
                    {
                        test: /\.(j|t)sx?$/,
                        loader: require.resolve("ts-loader"),
                        exclude: /node_modules/,
                        options: {
                            configFile: options.tsConfig,
                            transpileOnly: true,
                            // https://github.com/TypeStrong/ts-loader/pull/685
                            experimentalWatchApi: true
                        }
                    },
                ]
            },
            resolve: {
                extensions: extensions,
                //alias: getAliases(options),
                plugins: [
                //new TsConfigPathsPlugin({
                //configFile: options.tsConfig,
                //extensions,
                //mainFields,
                //}),
                ],
                mainFields: mainFields
            },
            performance: {
                hints: false
            },
            plugins: [
            //new ForkTsCheckerWebpackPlugin({
            //tsconfig: options.tsConfig,
            //memoryLimit:
            //options.memoryLimit ||
            //ForkTsCheckerWebpackPlugin.DEFAULT_MEMORY_LIMIT,
            //workers: options.maxWorkers || ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
            //useTypescriptIncrementalApi: false,
            //}),
            ],
            watch: options.watch,
            watchOptions: {
                poll: options.poll
            }
        };
        var extraPlugins = [];
        // process asset entries
        if (Array.isArray(options.assets) && options.assets.length > 0) {
            var copyWebpackPluginInstance = new CopyWebpackPlugin({
                patterns: options.assets.map(function (asset) {
                    return {
                        context: asset.input,
                        // Now we remove starting slash to make Webpack place it from the output root.
                        to: asset.output,
                        from: asset.glob,
                        globOptions: {
                            ignore: __spreadArrays([
                                '.gitkeep',
                                '**/.DS_Store',
                                '**/Thumbs.db'
                            ], (asset.ignore ? asset.ignore : [])),
                            dot: true
                        }
                    };
                })
            });
            extraPlugins.push(copyWebpackPluginInstance);
        }
        webpackConfig.plugins = __spreadArrays(webpackConfig.plugins, extraPlugins);
        return webpackConfig;
    }
    function readTsConfig(tsConfigPath) {
        console.log('readTsConfig');
        var readResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
        return ts.parseJsonConfigFileContent(readResult.config, ts.sys, path_1.dirname(tsConfigPath));
    }
    function normalizeBuildOptions(options, root, sourceRoot, projectRoot) {
        console.log('normalizeBuildOptions');
        console.log(options);
        console.log(root);
        console.log(sourceRoot);
        console.log(projectRoot);
        var response = __assign(__assign({}, options), { root: root,
            sourceRoot: sourceRoot,
            projectRoot: projectRoot, 
            //main: resolve(root, options.main),
            outputPath: path_1.resolve(root, options.outputPath), tsConfig: path_1.resolve(root, options.tsConfig), fileReplacements: normalizeFileReplacements(root, options.fileReplacements), assets: normalizeAssets(options.assets, root, sourceRoot), webpackConfig: options.webpackConfig
                ? path_1.resolve(root, options.webpackConfig)
                : options.webpackConfig });
        console.log(response);
        return response;
    }
    function normalizeAssets(assets, root, sourceRoot) {
        console.log('normalizeAssets');
        return assets.map(function (asset) {
            if (typeof asset === 'string') {
                var assetPath = core_1.normalize(asset);
                var resolvedAssetPath = path_1.resolve(root, assetPath);
                var resolvedSourceRoot = path_1.resolve(root, sourceRoot);
                if (!resolvedAssetPath.startsWith(resolvedSourceRoot)) {
                    throw new Error("The " + resolvedAssetPath + " asset path must start with the project source root: " + sourceRoot);
                }
                var isDirectory = fs_1.statSync(resolvedAssetPath).isDirectory();
                var input = isDirectory
                    ? resolvedAssetPath
                    : path_1.dirname(resolvedAssetPath);
                var output = path_1.relative(resolvedSourceRoot, path_1.resolve(root, input));
                var glob = isDirectory ? '**/*' : path_1.basename(resolvedAssetPath);
                return {
                    input: input,
                    output: output,
                    glob: glob
                };
            }
            else {
                if (asset.output.startsWith('..')) {
                    throw new Error('An asset cannot be written to a location outside of the output path.');
                }
                var assetPath = core_1.normalize(asset.input);
                var resolvedAssetPath = path_1.resolve(root, assetPath);
                return __assign(__assign({}, asset), { input: resolvedAssetPath, 
                    // Now we remove starting slash to make Webpack place it from the output root.
                    output: asset.output.replace(/^\//, '') });
            }
        });
    }
    function normalizeFileReplacements(root, fileReplacements) {
        console.log('normalizeFileReplacements');
        return fileReplacements.map(function (fileReplacement) { return ({
            replace: path_1.resolve(root, fileReplacement.replace),
            "with": path_1.resolve(root, fileReplacement["with"])
        }); });
    }
}
