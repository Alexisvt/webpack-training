// @flow
const path = require('path');

const config = {
  // relative to the webpack.config.js file
  entry: './src/index',
  output: {
    // absolute path
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // loaders go here
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,

      }
    ]
  }
};

module.exports = config;