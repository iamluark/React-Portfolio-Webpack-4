const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    entry: './src/app/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(sass|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: ['node_modules', 'src'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
            img: path.resolve(__dirname, 'src/app/assets/img'),
            app: path.resolve(__dirname, 'src/app'),
            scss: path.resolve(__dirname, 'src/assets/scss'),
            assets: path.resolve(__dirname, 'src/assets')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "dist/css/[name].css",
            chunkFilename: "dist/css/[id].css"
        })
    ]
};