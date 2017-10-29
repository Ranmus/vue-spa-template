const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');

// Options specific for build mode
const options = {
  mode: 'build',
  rootDir: path.resolve(__dirname, '../'),
  styleLoaders: {
    css: ExtractTextPlugin.extract({ use: ['css-loader'] }),
    stylus: ExtractTextPlugin.extract({ use: ['css-loader', 'stylus-loader'] }),
  },
};

module.exports = merge(common(options), {
  output: {
    // Output path
    path: path.resolve(__dirname, '../compiled'),
    // Output bundle filename
    filename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    // No emit assets when error occured
    new webpack.NoEmitOnErrorsPlugin(),
    // Minify js assets
    new UglifyJSPlugin(),
    // Extract styles and bundle to separated asset
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
    }),
    // Define production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  // Choose source-map as development tool
  devtool: 'source-map',
});
