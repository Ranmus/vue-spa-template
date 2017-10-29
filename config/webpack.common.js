const CleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = ({ rootDir, styleLoaders }) => {
  return {
    entry: `${rootDir}/src/assets/entry.js`,
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['*', '.js', '.vue'],
      modules: ['node_modules', '*'],
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          options: {
            loaders: styleLoaders,
          },
        },
        {
          test: /\.pug$/i,
          loader: 'pug-loader',
        },
        {
          test: /\.css$/i,
          loader: styleLoaders.css,
        },
        {
          test: /\.styl?$/i,
          loader: styleLoaders.stylus,
        },
      ],
    },
    plugins: [
      new CleanupPlugin(),
      new HtmlPlugin({
        filename: `${rootDir}/compiled/index.html`,
        template: `${rootDir}/src/assets/index.pug`,
      }),
    ],
  };
};
