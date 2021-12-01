const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createCssFile = (isDev) => {
  const styleLoaders = [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: `${isDev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64]'}`,
        },
      },
    },
    'sass-loader',
  ];

  if (isDev) {
    return styleLoaders;
  }

  // заменяем style-loader
  styleLoaders[0] = MiniCssExtractPlugin.loader;
  return styleLoaders;
};

module.exports = ({ development }) => {
  return {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
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
      port: 3001,
      'stats.children': true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [],
      }),
      new SpriteLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [...createCssFile(development)],
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
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                publicPath: './assets/icons/',
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['lodash'],
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
  };
};
