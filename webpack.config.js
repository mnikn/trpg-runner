const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'index.tsx')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.tsx$|\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.tsx',
            '.ts',
            'react'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080
    }
}
