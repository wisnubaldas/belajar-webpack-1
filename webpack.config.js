// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    devtool: false,
    watch: true,
    entry: {
        app: './src/index.js',
        vendor: [
            'animate.css/animate.min.css',
            '@fortawesome/fontawesome-free/css/all.min.css',
            'jquery-ui-dist/jquery-ui.min.css',
            'pace-js/themes/black/pace-theme-flash.css',
            'perfect-scrollbar/css/perfect-scrollbar.css',
            './src/assets/css/default/app.css',
            'js-cookie',
            'pace-js/pace.min.js',
            'jquery/dist/jquery.min.js',
            'jquery-ui-dist/jquery-ui.min.js',
            'bootstrap/dist/js/bootstrap.bundle.min.js',
            'perfect-scrollbar/dist/perfect-scrollbar.min.js',
            './src/assets/js/app.js',
            './src/assets/js/theme/default.js'
        ],
        // 'vendor': [
        //     'js-cookie',
        //     'pace-js/pace.min.js',
        //     'jquery/dist/jquery.min.js',
        //     'jquery-ui-dist/jquery-ui.min.js',
        //     'bootstrap/dist/js/bootstrap.bundle.min.js',
        //     'perfect-scrollbar/dist/perfect-scrollbar.min.js',
            
        // ],

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name][ext]', // Output file gambar
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Output file CSS sesuai nama entry
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            PerfectScrollbar:'perfect-scrollbar',
            // bootstrap:'bootstrap',
            // Pace:'pace-js/pace.js'
        }),
    ],
    module: {
        rules: [
            // {
            //     test: require.resolve('./src/assets/js/vendor.js'),
            //     loader: "expose-loader",
            //     options: {
            //         exposes: ["$", "jQuery","Cookies","PerfectScrollbar","bootstrap"],
            //     },
            // },
            // {
            //     test: require.resolve('./src/assets/js/app.min.js'),
            //     loader: "expose-loader",
            //     options: {
            //         exposes: ["$", "jQuery","fn","Cookies"],
            //     },
            // },
            {
                test: /\.m?js$/, // Untuk menangani modul ECMAScript
                type: 'javascript/auto',
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    stylesHandler,
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            // importLoaders: 1,
                            esModule: false, // Nonaktifkan ES module untuk kompatibilitas
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
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]', // Atur output path
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // Minifikasi untuk JS
                terserOptions: {
                    compress: true,
                },
            }),
            new CssMinimizerPlugin(), // Minifikasi untuk CSS
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
