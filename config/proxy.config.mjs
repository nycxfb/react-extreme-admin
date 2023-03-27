export default {
  hot: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {"/api": ""},
      changeOrigin: true,
      open: true,
    }
  }
}
