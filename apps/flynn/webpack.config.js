const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (config, context) => {
    return {
        ...config,
        target: 'node',
        entry: {
            "aad-group-command": path.resolve(__dirname, './src/aad-group-command/index.ts')
        },
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
        output: {
            filename: 'flynn/[name]/index.js',
            libraryTarget: 'commonjs'
        }
    };
};
