const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "CoW Widget: Webpack",
    }),
  ],
  output: {
    filename: "main.js",
    publicPath: process.env.PUBLIC_URL,
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: "./dist",
  },
};
