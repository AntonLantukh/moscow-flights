const path = require('path');
const fs = require('fs');

const VueLoaderPlugin = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {PATHS, REG_EXP} = require('./constants');

module.exports = {
    entry: {
        main: path.join(PATHS.src, 'index.tsx'),
    },
    output: {
        path: path.join(PATHS.dist, 'client'),
    },
    target: 'web',
    resolve: {
        symlinks: false,
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
            src: path.resolve(__dirname, '../../../src'),
            '˜': path.resolve(__dirname, '../../../src'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: `Find all yout Moscow flights!`,
            filename: 'index.html',
            template: path.join(PATHS.src, 'html/index.ejs'),
            inject: false,
            templateParameters: (compilation, assets, assetTags, options) => ({
                compilation,
                webpackConfig: compilation.options,
                htmlWebpackPlugin: {
                    tags: {
                        headTags: assetTags.headTags.filter(tag => ['link', 'style'].includes(tag.tagName)),
                        bodyTags: assetTags.headTags.filter(tag => ['script'].includes(tag.tagName)),
                    },
                    files: assets,
                    options,
                },
            }),
        }),
        new CopyWebpackPlugin({
            patterns: [{from: './assets/icons', to: path.join(PATHS.dist, '/src/icons')}],
        }),
    ],
    module: {
        rules: [
            {
                test: REG_EXP.vue,
                loader: 'vue-loader',
            },
            {
                test: REG_EXP.js,
                exclude: REG_EXP.node_modules,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                    },
                                ],
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                ],
            },
            {
                test: REG_EXP.css,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]_[hash:base64:8]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [['autoprefixer', {}]],
                            },
                        },
                    },
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
        ],
    },
};
