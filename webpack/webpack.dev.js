const path = require('path');
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {assets, css, babel} = require('../modules');
const plugins = require('../plugins');

const {PATHS, REG_EXP} = require('./constants');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    target: 'web',
    devtool: 'inline-source-map',
    plugins: [new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[name].css'})],
    module: {
        rules: [
            {
                test: REG_EXP.css,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: REG_EXP.images,
                type: 'asset/resource',
                generator: {
                    emit: true,
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: REG_EXP.fonts,
                type: 'asset/resource',
                generator: {
                    emit: true,
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
    devServer: {
        host: 'localhost',
        hot: true,
        hotOnly: true,
        contentBase: path.join(PATHS.dist, 'client'),
        compress: true,
        liveReload: false,
        watchContentBase: true,
        progress: true,
        port: 8080,
        writeToDisk: true,
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 1000,
            ignored: REG_EXP.node_modules,
        },
    },
    performance: {
        hints: false,
    },
    optimization: {
        nodeEnv: 'development',
        emitOnErrors: true,
        moduleIds: 'named',
        runtimeChunk: 'single',
        innerGraph: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 1,
                },
            },
        },
    },
};
