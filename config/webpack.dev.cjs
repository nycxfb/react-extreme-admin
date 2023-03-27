module.exports = {
  mode: "development",
  stats: "none",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$|\.less$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              esModule: false,
              importLoaders: 2
            }
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                esModule: false,
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  }
}
