const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './website/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'production' ?
            MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Terminal Veeloy',
      filename: 'index.html'
    }),
    process.env.NODE_ENV === 'production' ?
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: '[id].css'
      }) : undefined
  ].filter((plugin) => plugin !== undefined),
  devServer: {
    historyApiFallback: true
  }
};
