var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'app': './src/main.ts',
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ]
    },
    output: {
        path: __dirname + './dist',
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            { test: /\.ts$/,  loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'raw-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

    ]

};