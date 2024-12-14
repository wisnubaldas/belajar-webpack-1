// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require("webpack");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    devtool: false,
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            PerfectScrollbar:'perfect-scrollbar/dist/perfect-scrollbar.js',
            bootstrap:'bootstrap',
            Pace:'pace-js/pace.js'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    stylesHandler, 
                    {
                        loader: "css-loader",
                        options: {
                          // Run `postcss-loader` on each CSS `@import` and CSS modules/ICSS imports, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                          // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                          importLoaders: 1,
                        },
                      },
                      'postcss-loader',
                      {
                        loader: "sass-loader",
                      },
                    ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: 'asset',
                loader: "file-loader",
                options: {
                    name: '[id][name].[ext]',
                    outputPath: 'assets/images/'
                }
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());


    } else {
        config.mode = 'development';
    }
    return config;
};
