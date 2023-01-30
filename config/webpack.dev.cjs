
module.exports = {
  mode: "development",
  stats: "none",
  devServer: {
    hot: true,
    proxy: {
      '/api': ''
    }
  }
}
