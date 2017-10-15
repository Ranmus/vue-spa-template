const CleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    entry: './src/assets/entry.js',
    output: {
      path: path.resolve(__dirname, 'compiled'),
      filename: '[name].[chunkhash].bundle.js',
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['*', '.js', '.vue'],
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
              }),
              stylus: ExtractTextPlugin.extract({
                use: 'css-loader!stylus-loader',
              }),
            },
          },
        },
        {
          test: /\.pug$/i,
          loader: 'pug-loader',
        },
        {
          test: /\.css$/i,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader',
          }),
        },
        {
          test: /\.styl?$/i,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader!stylus-loader',
          }),
        },
      ],
    },
    plugins: [
      new CleanupPlugin(),
      new ExtractTextPlugin({
        filename: '[name].[hash].css',
      }),
      new HtmlPlugin({
        filename: './index.html',
        template: './src/assets/index.pug',
      }),
    ],
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  };
};

