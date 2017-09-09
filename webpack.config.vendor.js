const { resolve } = require('path');
const { DllPlugin } = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: process.cwd(),

  devtool: 'source-map',

  entry: {
    vendor: [
      'angular',
      '@uirouter/angularjs',
    ],
  },

  output: {
    filename: '[name].dll.js',
    path: resolve(__dirname, 'dist'),
    library: '[name]',
  },

  plugins: [
    new DllPlugin({
      name: '[name]',
      path: resolve(__dirname, 'dist', '[name].json'),
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
