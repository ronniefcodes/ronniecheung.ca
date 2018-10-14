const config = require('./webpack.config');
const path = require('path');
const port = 9091;

module.exports = Object.assign({}, config, {
  devServer: {
    port,
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    host: 'localhost',
    publicPath: '/',
  },

  mode: 'development',
});
