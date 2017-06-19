var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main')]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'babel!eslint', exclude: /node_modules/},
      // loaders: ['babel-loader?presets[]=es2015,presets[]=react']
      {test: /\.less$/, loader: 'style!css!less?sourceMap'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'] //后缀名自动补全
  //   alias: {
  //     'vue$': 'vue/dist/vue.js'
  //   }
  },

  externals: {
    // lib: 'lib',
    // vue: 'Vue',
  },
  babel: {
    presets: ['es2015','react']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: '#source-map',
  watch: true
}