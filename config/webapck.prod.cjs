
const path = require('path')
const BUILD_PATH = path.resolve(__dirname, '../dist')

module.exports = {
  mode:"production",
  output: {
    path: BUILD_PATH,
    filename: "bundle.js",
    clean: true
  }
}
