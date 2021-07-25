const path = require('path');

const PATHS = {
    client: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
};

const REG_EXP = {
    images: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
    fonts: /\.(?:\.woff(2)?|eot|ttf|otf)$/i,
    css: /\.(scss|css)$/,
    js: /\.(ts|js)x?$/,
    vue: /\.vue$/,
    node_modules: /node_modules/,
};

module.exports = {PATHS, REG_EXP};
