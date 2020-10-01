const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HTMLS = ['index', 'login'];

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    umdNamedDefine: true, // optional
    globalObject: 'this', // optional
  },
  module: {
    rules: [
      // HTML
      {
        include: /\.pug/,
        loader: ['html-loader', 'pug-html-loader'],
      },

      // JS
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // CSS
      {
        test: /\.s[ac]ss$/i,
        exclude: /(helpers)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      // IMAGES
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
    }),
    ...HTMLS.map(
      (x) =>
        new HtmlWebpackPlugin({
          filename: `${x}.html`,
          template: `./src/pug/${x}.pug`,
          inject: true,
        })
    ),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js',
    },
  },
};
