const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

// Options specific for development mode
const options = {
  mode: 'build',
  rootDir: path.resolve(__dirname, '../'),
  styleLoaders: {
    css: ['vue-style-loader', 'css-loader'],
    stylus: ['vue-style-loader', 'css-loader', 'stylus-loader'],
  },
};

module.exports = merge(common(options), {
  // Development server options
  devServer: {
    // Allow all hosts (helpful for storing project in docker container)
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // Display overlay with errors
    overlay: {
      warnings: false,
      errors: true,
    },
    // Expose compiled directory as root via http
    contentBase: `${options.rootDir}/compiled`,
  },
  // Choose eval-source-map as slower but more precise debugging tool (modules, original sources)
  devtool: 'eval-source-map',
});
