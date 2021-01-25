import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { Path, JsonObject, normalize, workspaces, virtualFs } from '@angular-devkit/core';
import { BuildResult, runWebpack } from '@angular-devkit/build-webpack';

import * as ts from 'typescript';
import { join, resolve, dirname, relative, basename } from 'path';
import { from, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { statSync } from 'fs';

import { Configuration } from "webpack";
import * as webpack from 'webpack';
import { merge } from "webpack-merge";
import * as nodeExternals from 'webpack-node-externals';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { NxScopedHost } from '@nrwl/devkit/ngcli-adapter';

const OUT_FILENAME = 'main.js';

type Json = { [k: string]: any };

interface AzFuncExecutorOptions extends Json {
  textToEcho: string;
  baseUrl?: string;
  tsConfig?: string;
  watch?: boolean;
  projectRoot: string;
  rootPath: string;
}

try {
  require('dotenv').config();
} catch (e) {}

export type AzFuncBuildEvent = BuildResult & {
  outfile: string;
};

interface BuildBuilderOptions {
  main: string;
  outputPath: string;
  tsConfig: string;
  watch?: boolean;
  sourceMap?: boolean | SourceMapOptions;
  optimization?: boolean | OptimizationOptions;
  showCircularDependencies?: boolean;
  maxWorkers?: number;
  memoryLimit?: number;
  poll?: number;

  fileReplacements: FileReplacement[];
  assets?: any[];

  progress?: boolean;
  statsJson?: boolean;
  extractLicenses?: boolean;
  verbose?: boolean;

  webpackConfig?: string;

  root?: string;
  sourceRoot?: Path;
  projectRoot?: string;
}

interface BuildAzFuncBuilderOptions extends BuildBuilderOptions {
  optimization?: boolean;
  sourceMap?: boolean;
  externalDependencies?: 'all' | 'none' | string[];
  buildLibsFromSource?: boolean;
  generatePackageJson?: boolean;
}

interface SourceMapOptions {
  scripts: boolean;
  styles: boolean;
  vendors: boolean;
  hidden: boolean;
}

interface OptimizationOptions {
  scripts: boolean;
  styles: boolean;
}

interface FileReplacement {
  replace: string;
  with: string;
}

export default createBuilder<JsonObject & BuildAzFuncBuilderOptions>(run);

function run(options: JsonObject & BuildAzFuncBuilderOptions, context: BuilderContext): Observable<AzFuncBuildEvent> {
  console.log(`Executing "echo"...`);
  console.log(`Options: ${JSON.stringify(options, null, 2)}`);
  console.log(context);

  return from(getRoots(context)).pipe(
    map(({ sourceRoot, projectRoot }) =>
      normalizeBuildOptions(
        options,
        context.workspaceRoot,
        sourceRoot,
        projectRoot
      )
    ),
    map((options) => {
      let config = getNodeWebpackConfig(options);
      if (options.webpackConfig) {
        config = require(options.webpackConfig)(config, {
          options,
          configuration: context.target.configuration,
        });
      }
      return config;
    }),
    concatMap((config) =>
      runWebpack(config, context, {
        logging: (stats) => {
          context.logger.info(stats.toString(config.stats));
        },
        webpackFactory: require('webpack'),
      })
    ),
    map((buildEvent: BuildResult) => {
      buildEvent.outfile = resolve(
        context.workspaceRoot,
        options.outputPath,
        OUT_FILENAME
      );
      return buildEvent as AzFuncBuildEvent;
    })
  );


  async function getRoots(context: BuilderContext): Promise<{ sourceRoot: string; projectRoot: string }> {
    console.log('getRoots');
    const workspaceHost = workspaces.createWorkspaceHost(
      new NxScopedHost(normalize(context.workspaceRoot))
    );
    const { workspace } = await workspaces.readWorkspace('', workspaceHost);
    const project = workspace.projects.get(context.target.project);
    if (project.sourceRoot && project.root) {
      return { sourceRoot: project.sourceRoot, projectRoot: project.root };
    } else {
      context.reportStatus('Error');
      const message = `${context.target.project} does not have a sourceRoot or root. Please define one.`;
      context.logger.error(message);
      throw new Error(message);
    }
  }

  function getNodeWebpackConfig(options: BuildAzFuncBuilderOptions) {
    console.log('getNodeWebpackConfig');
    return merge([
      getBaseWebpackPartial(options),
      getNodePartial(options),
    ]);
  }

  function getNodePartial(options: BuildAzFuncBuilderOptions) {
    console.log('getNodePartial');
    const webpackConfig: Configuration = {
      output: {
        libraryTarget: 'commonjs',
      },
      target: 'node',
      node: false,
    };
  
    if (options.optimization) {
      webpackConfig.optimization = {
        minimize: false,
        concatenateModules: false,
      };
    }
  
    if (options.externalDependencies === 'all') {
      webpackConfig.externals = [nodeExternals()];
    } else if (Array.isArray(options.externalDependencies)) {
      webpackConfig.externals = [
        function (context, request, callback: Function) {
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

  function getBaseWebpackPartial(options: BuildBuilderOptions): Configuration {
    console.log('getBaseWebpackPartial');
    const { options: compilerOptions } = readTsConfig(options.tsConfig);
    const supportsEs2015 =
      compilerOptions.target !== ts.ScriptTarget.ES3 &&
      compilerOptions.target !== ts.ScriptTarget.ES5;
    const mainFields = [...(supportsEs2015 ? ['es2015'] : []), 'module', 'main'];
    const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
    const webpackConfig: Configuration = {
      entry: {
        main: [options.main],
      },
      devtool: options.sourceMap ? 'source-map' : false,
      mode: options.optimization ? 'production' : 'development',
      output: {
        path: options.outputPath,
        filename: OUT_FILENAME,
      },
      module: {
        rules: [
          {
            test: /\.(j|t)sx?$/,
            loader: require.resolve(`ts-loader`),
            exclude: /node_modules/,
            options: {
              configFile: options.tsConfig,
              transpileOnly: true,
              // https://github.com/TypeStrong/ts-loader/pull/685
              experimentalWatchApi: true,
            },
          },
        ],
      },
      resolve: {
        extensions,
        //alias: getAliases(options),
        plugins: [
          //new TsConfigPathsPlugin({
            //configFile: options.tsConfig,
            //extensions,
            //mainFields,
          //}),
        ],
        mainFields,
      },
      performance: {
        hints: false,
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
        poll: options.poll,
      },
      //stats: getStatsConfig(options),
    };
  
    const extraPlugins: webpack.Plugin[] = [];
  
    // process asset entries
    if (Array.isArray(options.assets) && options.assets.length > 0) {
      const copyWebpackPluginInstance = new CopyWebpackPlugin({
        patterns: options.assets.map((asset: any) => {
          return {
            context: asset.input,
            // Now we remove starting slash to make Webpack place it from the output root.
            to: asset.output,
            from: asset.glob,
            globOptions: {
              ignore: [
                '.gitkeep',
                '**/.DS_Store',
                '**/Thumbs.db',
                ...(asset.ignore ? asset.ignore : []),
              ],
              dot: true,
            },
          };
        }),
      });
      extraPlugins.push(copyWebpackPluginInstance);
    }
  
    webpackConfig.plugins = [...webpackConfig.plugins, ...extraPlugins];
  
    return webpackConfig;
  }

  function readTsConfig(tsConfigPath: string) {
    console.log('readTsConfig');
    const readResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
    return ts.parseJsonConfigFileContent(
      readResult.config,
      ts.sys,
      dirname(tsConfigPath)
    );
  }

  function normalizeBuildOptions<T extends BuildBuilderOptions>(options: T, root: string, sourceRoot: string,  projectRoot: string): T {
    console.log('normalizeBuildOptions')
    console.log(options);
    console.log(root);
    console.log(sourceRoot);
    console.log(projectRoot);

    let response = {
      ...options,
      root,
      sourceRoot,
      projectRoot,
      //main: resolve(root, options.main),
      outputPath: resolve(root, options.outputPath),
      tsConfig: resolve(root, options.tsConfig),
      fileReplacements: normalizeFileReplacements(root, options.fileReplacements),
      assets: normalizeAssets(options.assets, root, sourceRoot),
      webpackConfig: options.webpackConfig
        ? resolve(root, options.webpackConfig)
        : options.webpackConfig,
    };
    console.log(response);
    return response;
  }

  function normalizeAssets(assets: any[], root: string, sourceRoot: string): any[] {
    console.log('normalizeAssets');
    return assets.map((asset) => {
      if (typeof asset === 'string') {
        const assetPath = normalize(asset);
        const resolvedAssetPath = resolve(root, assetPath);
        const resolvedSourceRoot = resolve(root, sourceRoot);
  
        if (!resolvedAssetPath.startsWith(resolvedSourceRoot)) {
          throw new Error(
            `The ${resolvedAssetPath} asset path must start with the project source root: ${sourceRoot}`
          );
        }
  
        const isDirectory = statSync(resolvedAssetPath).isDirectory();
        const input = isDirectory
          ? resolvedAssetPath
          : dirname(resolvedAssetPath);
        const output = relative(resolvedSourceRoot, resolve(root, input));
        const glob = isDirectory ? '**/*' : basename(resolvedAssetPath);
        return {
          input,
          output,
          glob,
        };
      } else {
        if (asset.output.startsWith('..')) {
          throw new Error(
            'An asset cannot be written to a location outside of the output path.'
          );
        }
  
        const assetPath = normalize(asset.input);
        const resolvedAssetPath = resolve(root, assetPath);
        return {
          ...asset,
          input: resolvedAssetPath,
          // Now we remove starting slash to make Webpack place it from the output root.
          output: asset.output.replace(/^\//, ''),
        };
      }
    });
  }
  
  function normalizeFileReplacements(root: string, fileReplacements: FileReplacement[]): FileReplacement[] {
    console.log('normalizeFileReplacements');
    return fileReplacements.map((fileReplacement) => ({
      replace: resolve(root, fileReplacement.replace),
      with: resolve(root, fileReplacement.with),
    }));
  }
}

