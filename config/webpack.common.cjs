const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


const APP_PATH = path.resolve(__dirname, '../src')
const ROOT_PATH = path.resolve(__dirname)
const BUILD_PATH = path.resolve(__dirname, '../dist')

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'main.tsx')
  },
  resolve: {
    alias: {
      "@": APP_PATH
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "react-extreme-admin",
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|js|ts)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.css$|\.less$/i,
        // exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]

      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, '../src/assets/svg'), // 处理指定svg的文件
        options: {
          symbolId: 'icon-[name]'
        }
      },


    ]
  }

}
