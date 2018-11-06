const root = require('app-root-path').path;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractCSS = new ExtractTextPlugin('style.css');
const fs = require('fs');

var exts = {}
fs.readdirSync('./node_modules').forEach(function(item) {
    if(item.indexOf('.') === 0) return;
    exts[item] = 'commonjs ' + item
});

module.exports = {
    entry: `${root}/server/server.ts`,
    target: 'node',
    node: {
        __filename: false,
        __dirname: true
    },
    externals: [
        exts // Ignore node_modules folder,
    ],
    output: {
        filename: 'compiled.js', // output file
        path: `${root}/build_server`,
        libraryTarget: "commonjs"
    },
    resolve: {
        modules: [`${root}/node_modules`],
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.config.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.(ts|tsx)$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        },{
            test: /\.(js|jsx|mjs)$/,
            exclude: [/node_modules/],
            loader: require.resolve('babel-loader'),
            options: {
                compact: true,
            },
        },{
                test: /\.scss$/,
                use:ExtractCSS.extract(['css-loader', 'sass-loader']),
            },{
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            }]
    },
    plugins: [
        ExtractCSS // plugins数组中将使用的插件引入
    ]
};