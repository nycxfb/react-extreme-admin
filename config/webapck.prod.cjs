const path = require('path')
const {posix} = path
const BUILD_PATH = path.resolve(__dirname, '../dist')
const testPlugin = require('./plugin')

module.exports = {
  mode: "production",
  output: {
    path: BUILD_PATH,
    filename: posix.join('assets', 'js/[name].[contenthash:8].js'),
    chunkFilename: posix.join('assets', 'js/[name].[contenthash:8].js'),
    clean: true
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 800000,
  },
  plugins: [
    new testPlugin()
  ]
  // devtool: 'source-map',
}
