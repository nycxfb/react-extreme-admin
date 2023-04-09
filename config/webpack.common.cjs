const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar')

const APP_PATH = path.resolve(__dirname, "../src");

const _DEV_ = process.env.NODE_ENV === "DEVELOPMENT"
const _PRD_ = process.env.NODE_ENV === "PRODUCTION"

console.log('_DEV_', _DEV_)
console.log('_PRD_', _PRD_)


const configs = {
  entry: {
    app: path.resolve(APP_PATH, "main.tsx")
  },
  resolve: {
    alias: {
      "@": APP_PATH
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  infrastructureLogging: {
    level: "error"
  },
  stats: "none",
  cache: {
    type: "filesystem",     // 持久化缓存,将缓存类型设置为文件系统
    buildDependencies: {
      config: [__filename]
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|ts|jsx)$/,
        use: [
          'thread-loader',
          {
            loader: "babel-loader",
            options: {cacheDirectory: true}
          }
        ],
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: path.resolve(__dirname, "../src/assets/svg"), // 处理指定svg的文件
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "assets/image/[name].[hash:8].[ext]",
        },
        parser: {
          dataUrlCondition:{
            maxSize:8*1024
          }
        },
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "assets/video/[name].[hash:8].[ext]",
        },
        parser: {
          dataUrlCondition:{
            maxSize:50*1024
          }
        },
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: "asset",
        generator: {
          filename: "assets/font/[name].[hash:8].[ext]",
        },
        parser: {
          dataUrlCondition:{
            maxSize:8*1024
          }
        },
        exclude: path.resolve(__dirname, "../node_modules")
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new htmlWebpackPlugin({
      favicon: path.resolve(__dirname, "../public/favicon.ico"),
      title: _DEV_ ? "dev-react-extreme-admin" : 'react-extreme-admin',
      template: path.resolve(__dirname, "../public/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true
      }
    })
  ]
};

module.exports = configs
