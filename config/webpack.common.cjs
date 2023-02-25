const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

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
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              importLoaders: 2,
              url: false
            }
          },
          'postcss-loader',
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: [path.resolve(__dirname, '../src/styles/global.less')]
            }
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
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      favicon: path.resolve(__dirname, '../favicon.ico'),
      title: "react-extreme-admin",
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].css'
    }),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile:false
    // })
  ],
}
