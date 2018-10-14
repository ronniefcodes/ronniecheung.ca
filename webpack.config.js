const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }, {
        test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2|otf|pdf)(\?.*)?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/data'),
        to: path.resolve(__dirname, 'build/data'),
        force: true,
      },
      {
        from: path.resolve(__dirname, 'src/media'),
        to: path.resolve(__dirname, 'build/media'),
        force: true,
      },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: true,
    }),
  ],
};
