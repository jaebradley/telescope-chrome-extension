const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const {
  OUTPUT_PATH,
  ENTRY_FILE_PATHS,
} = require('./constants');

module.exports = {
  entry: {
    content: ENTRY_FILE_PATHS.CONTENT,
    background: ENTRY_FILE_PATHS.BACKGROUND,
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: 'html',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      // Load in-line so that don't have to specify web-accessible fonts, etc.
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'url-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json',
        to: OUTPUT_PATH,
      },
      {
        from: 'src/icons',
        to: 'icons',
        toType: 'dir',
      },
    ]),
    new WriteFilePlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
