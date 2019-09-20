const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./common.config');

module.exports = merge.smart(
  common,
  {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin(['TELESCOPE_SERVER_BASE_URL']),
    ],
  },
);
