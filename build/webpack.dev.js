var path = require('path');
var base = require('./webpack.base');
var merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    compress: false,
    port: 9000,
    host: '127.0.0.1',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})