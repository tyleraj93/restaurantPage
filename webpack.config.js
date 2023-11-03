const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        header: "./src/header.js",
        home: "./src/home.js",
        clearContent: "./src/clearContent.js",
        menu: "./src/menu.js",
        about: "./src/about.js",
        footer: "./src/footer.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Loki's Lair",
        }),
    ],
    devServer: {
        static: "./dist",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,

                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,

                type: "asset/resource",
            },
        ],
    },
};