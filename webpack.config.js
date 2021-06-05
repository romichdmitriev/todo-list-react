const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
    },
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: []
    }),
    new SpriteLoaderPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["jpegtran", { progressive: true }],
        ],
      },
    })
  ],
  module:{
    rules:  [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader:'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: './assets/icons/',
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
    ]
  }
};
