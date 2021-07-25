const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {PATHS} = require('./constants');

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: REG_EXP.css,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: REG_EXP.images,
                type: 'asset/resource',
                generator: {
                    emit: true,
                    filename: 'images/[name].[contenthash][ext]',
                },
            },
            {
                test: REG_EXP.fonts,
                type: 'asset/resource',
                generator: {
                    emit: true,
                    filename: 'images/[name].[contenthash][ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css', chunkFilename: '[name].[contenthash].css'}),
    ],
    performance: {
        maxEntrypointSize: 1 * 1024 * 1024, // 1 mb
        maxAssetSize: 1 * 500 * 1024, // 500 kb
    },
    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
        nodeEnv: 'production',
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            maxAsyncRequests: 10,
            maxInitialRequests: 5,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 1,
                },
                main: {
                    reuseExistingChunk: true,
                    minChunks: 2,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};
