const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./dist/css/style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ['./source/scss/style.scss', './source/js/ribs-popup.js'],
    output: {
        filename: 'dist/js/ribs-popup.js'
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'assets/'),
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        extractSass
    ]
};