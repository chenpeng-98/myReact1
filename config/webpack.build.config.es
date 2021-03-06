var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../main.es')]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      // {test: /\.vue$/, loader: 'vue!eslint'},
      {test: /\.jsx$/, loader: 'babel!eslint', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  },
  // vue: {
  //   loaders: {
  //     less: ExtractTextPlugin.extract('vue-style', 'css!less')
  //   }
  // },
  babel: {
    presets: ['es2015', 'react']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new ExtractTextPlugin('index.less'),
    new webpack.optimize.DedupePlugin()
  ],
  externals: {
    // vue: 'Vue',
    // lib: 'lib'
  },
  color: true
}