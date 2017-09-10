const { resolve } = require('path');
const { readFileSync } = require('fs');
const { DllReferencePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const environments = {
  NONE: 'none',
  TESTING: 'testing',
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};

const { NODE_ENV = environments.NONE } = process.env;

const when = (...envs) => ({
  use(callback) {
    return envs.find(env => env === NODE_ENV) ? callback() : [];
  },
});

module.exports = {

  entry: './src/app.module',

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loaders: 'html-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.scss', 'html'],
    alias: {
      '~': resolve('src'),
    },
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),

    ...when(environments.DEVELOPMENT, environments.PRODUCTION).use(() => [
      new DllReferencePlugin({
        context: process.cwd(),
        manifest: JSON.parse(readFileSync(resolve(__dirname, 'dist/vendor.json'))),
      }),

      new AddAssetHtmlPlugin({
        filepath: resolve(__dirname, 'dist/vendor.dll.js'),
      }),
    ]),

    ...when(environments.PRODUCTION).use(() => [
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ]),
  ],

  devtool: {

    [environments.TESTING]: 'inline-source-map',

    [environments.DEVELOPMENT]: 'source-map',

  }[NODE_ENV],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
};
