const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = options => {
  const ROOTPATH = options.ROOTPATH;
  const BUILD_DIR = path.resolve(ROOTPATH, "./dist");
  const APP_DIR = path.resolve(ROOTPATH, "./src");
  return {
    entry: "./src/js/app.js",
    output: {
      filename: "bundle-[hash].js",
      path: BUILD_DIR
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: {
            loader: "babel-loader"
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: options.loaders.styles
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: { name: "[name].[ext]", outputPath: "img/" }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html"
      })
    ]
  };
};
