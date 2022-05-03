const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
      extensions: ['', '.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, './src/components/'),
        '@store': path.resolve(__dirname, './src/store/'),
        '@hooks': path.resolve(__dirname, './src/hooks/'),
        '@styles': path.resolve(__dirname, './src/styles/'),
        '@utils': path.resolve(__dirname, './src/utils/'),
        '@constants': path.resolve(__dirname, './src/constants/'),
        '@assets': path.resolve(__dirname, './src/assets/'),
        '@test': path.resolve(__dirname, './src/__test__/'),
        '@service': path.resolve(__dirname, './src/service/'),
      },
    },
    devtool: 'eval',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3001,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [],
      }),
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
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
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
