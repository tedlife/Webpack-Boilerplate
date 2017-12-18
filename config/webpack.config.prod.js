const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const options = {
  loaders: {
    styles: ExtractTextPlugin.extract({
      publicPath: "../",
      fallback: "style-loader",
      use: [{ loader: "css-loader" }, { loader: "postcss-loader" }]
    })
  }
};

module.exports = args => {
  options.ROOTPATH = args.ROOTPATH;
  options.env = args.env;
  return webpackMerge(require("./webpack.config.base")(options), {
    plugins: [
      new webpack.BannerPlugin("Project Infomation"),
      new ExtractTextPlugin({
        filename: "css/style.css"
      }),
      new UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CleanWebpackPlugin("dist", {
        root: args.ROOTPATH,
        verbose: true,
        dry: false
      })
    ]
  });
};
