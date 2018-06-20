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
        path: path.join(__dirname, 'dist'),
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
            containers: path.resolve(__dirname, 'src/components/containers'),
            img: path.resolve(__dirname, 'src/assets/img'),
            app: path.resolve(__dirname, 'src/app')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/app/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "dist/css/[name].css",
            chunkFilename: "dist/css/[id].css"
        })
    ]
};