var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/js/index',
    output: {
        filename: 'js/index-bundle.js',
        path: path.resolve(__dirname, "public"),
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: /node_modules/,
                test: /\.jsx?$/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}