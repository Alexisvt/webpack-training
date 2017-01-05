// @flow
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  // relative to the webpack.config.js file
  entry: './src/index',
  output: {
    // absolute path
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    // loaders go here
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,

      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};