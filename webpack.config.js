const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BeautifyHtmlWebpackPlugin = require("beautify-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

const HTMLS = [
  "index",
  "login",
  "mantenedor-equipos",
  "seguimiento-ordenes",
  "seguimiento-ordenes-detalle",
  "mantenedor-nodos",
  "mantenedor-nodos-especialidades",
  "componentes",
];

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    publicPath: '/',
    path: path.resolve(__dirname, ""),
    umdNamedDefine: true, // optional
    globalObject: "this", // optional
    
  },
  devServer: {
    open: true
  },
  module: {
    // devServer: {
    //   contentBase: path.join(__dirname, ""),
    //   compress: true,
    //   port: 9000,
    // },
    rules: [
      // HTML
      {
        test: /\.pug/,
        use: ["html-loader", "pug-html-loader"],
      },

      // JS
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // CSS
      {
        test: /\.s[ac]ss$/i,
        exclude: /(helpers)/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // IMAGES
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery",
    }),
    ...HTMLS.map(
      (x) =>
        new HtmlWebpackPlugin({
          filename: `${x}.html`,
          template: `./src/pug/${x}.pug`,
          inject: true,
          minify: false,
        })
    ),
    new BeautifyHtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      "jquery-ui": "jquery-ui-dist/jquery-ui.js",
    },
  },
};
