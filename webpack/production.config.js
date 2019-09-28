const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./common.config');

module.exports = merge.smart(
  {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin(['API_BASE_URL']),
    ],
  },
  common,
);
