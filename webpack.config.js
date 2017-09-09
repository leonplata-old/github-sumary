const { resolve } = require('path');
const { DllReferencePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const vendorDllManifest = require('./dist/vendor.json');

const expectedEnvironments = [
  'testing',
  'production',
  'development',
];

const [NODE_ENV = 'default'] = expectedEnvironments.filter(env => env === process.env.NODE_ENV);

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
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '~': resolve('src'),
    },
  },

  plugins: [

    new DllReferencePlugin({
      context: process.cwd(),
      manifest: vendorDllManifest,
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),

    new AddAssetHtmlPlugin({
      filepath: resolve(__dirname, './dist/vendor.dll.js'),
    }),

    ...{

      production: [
        new UglifyJSPlugin(),
      ],

      default: [
      ],

    }[NODE_ENV],
  ],

  devtool: {

    testing: 'inline-source-map',

    default: 'source-map',

  }[NODE_ENV],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
};
