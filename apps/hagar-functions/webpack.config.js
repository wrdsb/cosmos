/**
 * When passed a string, Glob will attempt to find each file that matches the
 * path given and return each path to the file as string[]
 */
const glob = require('glob')

/**
 * The Path API will be used to get the absolute path to the directory where we
 * plan to run Webpack
 */
const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (config, context) => {
    return {
        ...config,
        target: 'node',
        /**
         * Pass Glob a relative path to each of our entry points
         * We will have different subdirectories inside of the Project directory so
         * we need to replace any of the directory names with a wildcard, **, which 
         * will recursively match any combination of directory names inside of any
         * number of subdirectories until it finds the index.js entry.
         * Then we use the Array.prototype.reduce method to iterate through the array
         * and return an object containing a path to each of our entry files
         * (index.js)
         */
        entry: glob.sync(path.resolve(__dirname, './src/**/index.ts')).reduce((acc, item) => {
            /**
             * The "[name]" placeholder in the "output" property will be replaced
             * with each key name in our "entry" object. We need to make sure the
             * keys are a path to the "index.js" file but without the actual file
             * name. This is why we replace the file name, "index.js", with a string
             */
            let name = item.replace('/index.ts', '');
            name = name.replace(path.resolve(__dirname, './src/'), '');
            /**
             * Here we start building our object by placing the "entry" variable from
             * the previous line as a key and the entire path including the file name
             * as the value
             */
            acc[name] = item
            return acc
        }, {}),
        entry: glob.sync(path.resolve(__dirname, './src/**/function.json')).reduce((acc, item) => {
            /**
             * The "[name]" placeholder in the "output" property will be replaced
             * with each key name in our "entry" object. We need to make sure the
             * keys are a path to the "index.js" file but without the actual file
             * name. This is why we replace the file name, "index.js", with a string
             */
            let name = item.replace('/function.json', '');
            name = name.replace(path.resolve(__dirname, './src/'), '');
            /**
             * Here we start building our object by placing the "entry" variable from
             * the previous line as a key and the entire path including the file name
             * as the value
             */
            acc[name] = item
            return acc
        }, {}),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [
                new TsconfigPathsPlugin()
            ]
        },
        /**
         * The "output" property is what our build files will be named and where the
         * build file will be placed
         */
        output: {
            filename: 'hagar-functions[name]/index.js',
            libraryTarget: 'commonjs'
        }
    };
};
