const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');

module.exports = {
  entry: [
    './src/main.js',
  ],
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
    }),
    new VueLoaderPlugin(),
  ],
};