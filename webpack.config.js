const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/app.module',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loaders: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '~': path.resolve('src'),
    },
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool:
    process.env.NODE_ENV === 'testing' ? 'inline-source-map' : 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
