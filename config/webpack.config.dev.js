const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const options = {
  loaders: {
    styles: [
      { loader: "style-loader", options: { sourceMap: true } },
      { loader: "css-loader", options: { sourceMap: true } },
      { loader: "postcss-loader", options: { sourceMap: true } }
    ]
  }
};

module.exports = args => {
  options.ROOTPATH = args.ROOTPATH;
  options.env = args.env;
  return webpackMerge(require("./webpack.config.base")(options), {
    devtool: "source-map",
    devServer: {
      contentBase: "./public",
      historyApiFallback: true,
      inline: true,
      hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
};
