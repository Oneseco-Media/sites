const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
  },
});


