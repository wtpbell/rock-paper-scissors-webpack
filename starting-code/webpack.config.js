const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  entry: "./code/main.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
};
