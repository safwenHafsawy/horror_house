"use strict";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      statics: path.resolve(__dirname, "static"),
    },
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"),
      minify: true,
      title: "Horror House",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      linkType: "text/css",
    }),
  ],
};
