const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: [
    webpackNodeExternals({
      whitelist: /\.css$/
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css'
    })]
}