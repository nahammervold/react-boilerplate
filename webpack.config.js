/*
 *  * webpack config file
 *   */

const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },

    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: /node_modules/ 
            },
            { 
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [htmlWebpackPluginConfig]
}

